import LeerObservaciones
import Preprocesado
import numpy as np

txt = LeerObservaciones.observaciones()
nombres_cursos = LeerObservaciones.almacenar_nombres(txt)
# Evalua los comentarios de los pdf y acomoda el resultado en un vector


def evaluar_documento():

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

        if observaciones == txt[len(txt)-1]:
            evaluar.append(observaciones)
            cantidad.append(cont)

    vectorEvaluado = Preprocesado.dataset(evaluar)
    cantidad.pop(0)
    item = 0
    for i in range(len(nombres_cursos)):
        vecClasificador.append(nombres_cursos[i])
        while item < cantidad[i]:
            vecClasificador.append(vectorEvaluado[item])
            item += 1

    print(vecClasificador)
    return vecClasificador


def data():
    evaluacion = evaluar_documento()
    # almacena los resultados de la evaluación en esta ruta, estos son leidos en la clase OrdenResultados.py
    pdf_a_texto = 'PDF/resultado.txt'
    np.savetxt(pdf_a_texto, np.array(evaluacion), fmt="%s")

    return evaluacion

#inicializó la función para obtener los resultados del pdf de la ruta PDF/ y que los almacene en un txt
data()
