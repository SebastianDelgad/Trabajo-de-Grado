from nltk.corpus import stopwords
from nltk import word_tokenize, sent_tokenize
from string import punctuation
from nltk.stem import SnowballStemmer
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report
from sklearn.svm import SVC

non_words = list(punctuation)
spanish_stopwords = stopwords.words('spanish')
# stemmer trnasformar la palabra en su raiz
stemmer = SnowballStemmer('spanish')
non_words.extend(['¿', '¡', '...'])
non_words.extend(map(str, range(10)))

#Lectura del data set
data = pd.read_csv('dataset/Observaciones_0_a_4.csv', sep=',', encoding= "utf8", header=None)
data.columns = ['Observaciones', 'Sentiment']



def sentence_tokenize(text):
    """
    take string input and return a list of sentences.
    use nltk.sent_tokenize() to split the sentences.
    """
    return sent_tokenize(str(text))

def remove_numbers(text):
    """
    take string input and return a clean text without numbers.
    Use regex to discard the numbers.
    """
    output = ''.join(c for c in text if not c.isdigit())
    return output


def remove_punct(text):
    """
    Remueve los signos de puntuación
    """
    return ''.join(c for c in text if c not in punctuation)


def remove_stopwords(sentence):
    """
    Elimina los stopwords que hay estipulados en el español y deja las palabras en su raiz
    """
    return ' '.join([stemmer.stem(w) for w in word_tokenize(sentence) if not w in spanish_stopwords])

#Preprocesado de los datos aplicando cada una de las funciones
def preprocess(text):
    sentence_tokens = sentence_tokenize(text)
    word_list = []
    for each_sent in sentence_tokens:
        clean_text = remove_numbers(each_sent)
        clean_text = remove_punct(clean_text)
        clean_text = remove_stopwords(clean_text)
        word_tokens = word_tokenize(clean_text)
        for i in word_tokens:
            word_list.append(i)
    return word_list


#Función que crea el vector y aplica el preprosesamiento
bow = CountVectorizer(analyzer=preprocess)
#TF- IDF
tfidf = TfidfTransformer()


#SVM (Máquina de vectores de soporte)
print("Clasificador SVM")
text_classifier = SVC(kernel='linear')
pipeline = Pipeline([
    ('bow', bow),  # strings to token integer counts
    ('tfidf', tfidf),  # integer counts to weighted TF-IDF scores
    ('classifier', text_classifier),  # train on TF-IDF vectors w/ SVM classifier
])
pipeline.fit(data['Observaciones'].values.astype('U'),data['Sentiment'])
pipeline.score(data['Observaciones'].values.astype('U'), data['Sentiment'])
#aplicamos todas las técnicas de medición
all_predictions = pipeline.predict(data['Observaciones'].values.astype('U'))
print(classification_report(data['Sentiment'], all_predictions))
#Prueba
new_reviews = ['Utiliza muchos vídeos de YouTube en vez de explicar los temas él mismo, no me gusta su metodología',
               'Lee muchas diapositivas',
               'es grosero',
               'es arrogante',
               'muy buen profesor',
               'xd',
               '(y)',
               'sin comentarios',
               'Muy buena docente , excelente directora de trabajo de grado']

print(pipeline.predict(new_reviews))
