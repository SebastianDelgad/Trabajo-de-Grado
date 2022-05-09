from LeerObservaciones import almacenar_nombres
from Preprocesado import dataset
import numpy as np
import os
import firebase_admin
from firebase_admin import credentials, initialize_app, storage


def saveFile(txt):

    if (not len(firebase_admin._apps)):
        # Fetch the service account key JSON file contents
        module_dir = os.path.dirname(__file__)
        credential = os.path.join(
            module_dir, 'teacher-qualifier-firebase-adminsdk-rcl5m-f2037fdc9f.json')

        cred = credentials.Certificate(credential)

        initialize_app(cred, {
            'storageBucket': 'teacher-qualifier.appspot.com',
        })
# Put your local file path
    module_dir = os.path.dirname(__file__)
    fileName = txt+".txt"
    module_dir = module_dir + '/datos/'
    file = os.path.join(module_dir, fileName).replace(os.sep, "/")
    bucket = storage.bucket('teacher-qualifier.appspot.com')
    blob = bucket.blob(fileName)
    blob.upload_from_filename(file)

# Opt : if you want to make public access from the URL
    blob.make_public()

    #print("your file url", blob.public_url)


def evaluar_documento(txt):

    nombres_cursos = almacenar_nombres(txt)
    cantidad = []
    evaluar = []
    vecClasificador = []
    cont = 0

    for observaciones in txt:
        if observaciones[0].isnumeric():
            cont += 1
            evaluar.append(observaciones)

        for nombreDoc in nombres_cursos:
            if observaciones == nombreDoc:
                cantidad.append(cont)

        if observaciones == txt[len(txt) - 1]:
            evaluar.append(observaciones)
            cantidad.append(cont)

    vectorEvaluado = dataset(evaluar)
    cantidad.pop(0)
    item = 0
    for i in range(len(nombres_cursos)):
        vecClasificador.append(nombres_cursos[i])
        while item < cantidad[i]:
            vecClasificador.append(vectorEvaluado[item])
            item += 1

    return vecClasificador


def normalize(s):
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("ñ", "n"),
        ("ü", "u"),
    )
    for a, b in replacements:
        s = s.replace(a, b).replace(a.upper(), b.upper())
    return s


def quitarTildes(datos):
    endName = []
    for name in datos:
        if type(name) == str:
            endName.append(normalize(name))
        else:
            endName.append(name)

    # print(endName)
    return endName


def data(txt, pdf):
    evaluacion = evaluar_documento(txt)
    file = quitarTildes(evaluacion)
    module_dir = os.path.dirname(__file__)
    module_dir = module_dir + '/datos/'
    resultado = os.path.join(module_dir, pdf+".txt").replace(os.sep, "/")

    np.savetxt(resultado, np.array(file), fmt="%s")
    saveFile(pdf)

    return file
