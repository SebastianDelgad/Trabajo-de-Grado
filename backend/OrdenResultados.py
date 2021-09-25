import operator
import os

def consolidado_notas(datos):
    notas = []
    consolidado = []

    for info in datos:
        if type(info) != str:
            notas.append(info)
        else:
            consolidado.append(notas)
            notas = []
    consolidado.append(notas)
    consolidado.pop(0)
    print(consolidado)
    return consolidado


def nombre_y_curso(datos):
    nombreYCurso = []

    for nombre in datos:
        if type(nombre) == str:
            nombreYCurso.append(nombre)
    print(nombreYCurso)
    return nombreYCurso


def cant_muy_negativa(dataClasificacion):

    totalMuyNeg = []
    for item in dataClasificacion:
        muyNeg = 0
        for num in item:
            if num == -2:
                muyNeg += 1
        totalMuyNeg.append(muyNeg)
    return totalMuyNeg


def cant_negativa(dataClasificacion):
    totalNeg = []
    for item in dataClasificacion:
        neg = 0
        for num in item:
            if num == -1:
                neg += 1
        totalNeg.append(neg)
    return totalNeg


def cant_neutral(dataClasificacion):
    totalNeu = []
    for item in dataClasificacion:
        neu = 0
        for num in item:
            if num == 0:
                neu += 1
        totalNeu.append(neu)
    return totalNeu


def cant_postiva(dataClasificacion):
    totalPos = []
    for item in dataClasificacion:
        pos = 0
        for num in item:
            if num == 1:
                pos += 1
        totalPos.append(pos)
    return totalPos


def cant_muy_positiva(dataClasificacion):
    totalMuyPos = []
    for item in dataClasificacion:
        muyPos = 0
        for num in item:
            if num == 2:
                muyPos += 1
        totalMuyPos.append(muyPos)
    return totalMuyPos


def nota_promedio(muyNeg, neg, neu, pos, muyPos):

    notas_prom = []

    for i in range(len(pos)):
        nota_prom = ((-2 * muyNeg[i]) + (neg[i] * -1) + pos[i] + (muyPos[i] * 2)) / (
            muyNeg[i] + neg[i] + pos[i] + muyPos[i] + neu[i])
        notas_prom.append(float("{0:.1f}".format(nota_prom)))
    return notas_prom


def total_observaciones(muyNeg, neg, neu, pos, muyPos):

    total = []

    for i in range(len(pos)):
        nota_prom = muyNeg[i] + neg[i] + pos[i] + muyPos[i] + neu[i]
        total.append(nota_prom)
    return total


def nombres_docentes(datos):
    docentes = []
    nombreDocente = ""

    for word2 in datos:
        for name in word2:
            if name != "-":
                nombreDocente += name
            else:
                docentes.append(nombreDocente.strip())
                nombreDocente = ""
                break
    return docentes


def cursos(datos):
    curso = []
    nombreCurso = ""
    validar = 0

    for item in datos:
        for word in item:
            if word == "-":
                validar = 1
            else:
                if validar == 1:
                    nombreCurso += word

        curso.append(nombreCurso.strip())
        validar = 0
        nombreCurso = ""
    return curso


def info_dicionario(nombres, asignaturas, notas, total_muy_neg, total_neg, total_neu, total_pos, total_muy_pos,
                    total_observaciones):

    dict_from_list = {}

    for i in range(len(nombres)):
        dict_from_list[i] = {'docente': nombres[i], 'asignatura': asignaturas[i], 'promedio_calificación': notas[i],
                             'total_muy_neg': total_muy_neg[i], 'total_neg': total_neg[i], 'total_neu': total_neu[i],
                             'total_pos': total_pos[i], 'total_muy_pos': total_muy_pos[i],
                             'total_observaciones': total_observaciones[i], 'id': i}
    #print(dict_from_list)
    return dict_from_list


def ordenar_diccionario_por_nombres(diccionario, nombres):

    docentesEvaluados = []
    for item in nombres:
        if item not in docentesEvaluados:
            docentesEvaluados.append(item)

    docentesOrdenados = sorted(docentesEvaluados)

    ordenadoAlfabeticamente = []

    for name in docentesOrdenados:
        for i in range(len(diccionario)):
            if diccionario[i]['docente'] == name:
                ordenadoAlfabeticamente.append(diccionario[i])

    for i in range(len(ordenadoAlfabeticamente)):
        if ordenadoAlfabeticamente[i]['promedio_calificación'] >= 1.5:
            ordenadoAlfabeticamente[i]['promedio_calificación'] = "Muy positivo"
        elif ordenadoAlfabeticamente[i]['promedio_calificación'] >= 0.5:
            ordenadoAlfabeticamente[i]['promedio_calificación'] = "Positivo"
        elif ordenadoAlfabeticamente[i]['promedio_calificación'] >= -0.4:
            ordenadoAlfabeticamente[i]['promedio_calificación'] = "Neutral"
        elif ordenadoAlfabeticamente[i]['promedio_calificación'] >= -1.5:
            ordenadoAlfabeticamente[i]['promedio_calificación'] = "Negativo"
        else:
            ordenadoAlfabeticamente[i]['promedio_calificación'] = "Muy negativo"

    #print(ordenadoAlfabeticamente)
    return ordenadoAlfabeticamente


def promedio_calificacion(diccionario):

    notas = {}

    for i in range(len(diccionario)):
        notas[i] = diccionario[i]['promedio_calificación']
    return notas


def peor_promedio_calificacion(notas, diccionario):

    notas_sort = sorted(
        notas.items(), key=operator.itemgetter(1), reverse=False)
    peor_nota = {}

    for key in enumerate(notas_sort):
        peor_nota[key[1][0]] = notas[key[1][0]]

    peor_prom_profesor = []
    list_keys1 = list(peor_nota.keys())

    for key in list_keys1:
        peor_prom_profesor.append(diccionario[key])

    #print(peor_prom_profesor)
    return peor_prom_profesor


def mejor_promedio_calificacion(notas, diccionario):

    notas_sort = sorted(
        notas.items(), key=operator.itemgetter(1), reverse=True)
    mejor_nota = {}

    for key in enumerate(notas_sort):
        mejor_nota[key[1][0]] = notas[key[1][0]]

    mejor_prom_profesor = []
    list_keys2 = list(mejor_nota.keys())

    for key in list_keys2:
        mejor_prom_profesor.append(diccionario[key])

    #print(mejor_prom_profesor)
    return mejor_prom_profesor

def consultar_por_nombre(datos, nombre):

    datos_docente= []

    for i in range(len(datos)):
        if datos[i]['docente'] == nombre:
            datos_docente.append(datos[i])
    #print(datos_docente)


def resultados(datosCalificados):
    valoraciones = consolidado_notas(datosCalificados)
    nombresCursos = nombre_y_curso(datosCalificados)
    total_muy_neg = cant_muy_negativa(valoraciones)
    total_neg = cant_negativa(valoraciones)
    total_neu = cant_neutral(valoraciones)
    total_pos = cant_postiva(valoraciones)
    total_muy_pos = cant_muy_positiva(valoraciones)
    total_obs = total_observaciones(
        total_muy_neg, total_neg, total_neu, total_pos, total_muy_pos)
    notas = nota_promedio(total_muy_neg, total_neg,
                          total_neu, total_pos, total_muy_pos)
    nombres = nombres_docentes(nombresCursos)
    asignaturas = cursos(nombresCursos)
    diccionario = info_dicionario(nombres, asignaturas, notas, total_muy_neg,
                                  total_neg, total_neu, total_pos, total_muy_pos, total_obs)
    prom_notas = promedio_calificacion(diccionario)
    ordenar_diccionario_por_nombres(diccionario, nombres)
    peor_promedio_calificacion(prom_notas, diccionario)
    mejor_promedio_calificacion(prom_notas, diccionario)
    consultar_por_nombre(diccionario, 'JUAN SEBASTIAN CORREA FERNANDEZ')

def leer_archivo():
    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'resultado.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else: datos.append(line.strip())
    print(datos)
    return datos

datos = leer_archivo()
resultados(datos)