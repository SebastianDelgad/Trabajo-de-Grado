import firebase_admin.storage

from LeerObservaciones import  almacenar_nombres
from Preprocesado import dataset
import numpy as np
import os
from firebase_admin import credentials, initialize_app, storage, db

# Fetch the service account key JSON file contents
module_dir = os.path.dirname(__file__)
credential = os.path.join(module_dir, 'teacher-qualifier-firebase-adminsdk-33adn-c47f32bda8.json')

cred = credentials.Certificate(credential)

initialize_app(cred, {
    'storageBucket': 'teacher-qualifier.appspot.com',
})

def almacenar():
# Put your local file path 
    fileName = "resultado1.txt"
    file = os.path.join(module_dir, fileName)
    bucket = storage.bucket()
    blob = bucket.blob(fileName)
    blob.upload_from_filename(file)

# Opt : if you want to make public access from the URL
    blob.make_public()

    print("your file url", blob.public_url)


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


def data(txt):
    evaluacion = evaluar_documento(txt)

    module_dir = os.path.dirname(__file__)
    resultado = os.path.join(module_dir, 'resultado1.txt')

    np.savetxt(resultado, np.array(evaluacion), fmt="%s")

    return evaluacion

