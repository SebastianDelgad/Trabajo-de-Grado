from LeerObservaciones import observaciones, almacenar_nombres
from Preprocesado import dataset
import numpy as np
import os


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
    pdf_a_texto = os.path.join(module_dir, 'resultado.txt')

    np.savetxt(pdf_a_texto, np.array(evaluacion), fmt="%s")

    return evaluacion
