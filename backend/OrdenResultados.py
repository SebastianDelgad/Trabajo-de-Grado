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

    return consolidado


def nombre_y_curso(datos):
    nombreYCurso = []

    for nombre in datos:
        if type(nombre) == str:
            nombreYCurso.append(nombre)

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

    list_keys = list(peor_nota.keys())

    peores_notas = {}
    for key in list_keys:
        peores_notas[key] = diccionario[key]

    # Ordenando las observaciones muy positivas
    muy_positivo = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Muy positivo':
            muy_positivo[i] = peores_notas[i]['total_observaciones']

    muy_positivo_ordenado = {}
    muy_positivo_sort = sorted(
        muy_positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_positivo_sort):
        muy_positivo_ordenado[key[1][0]] = muy_positivo[key[1][0]]

    list_keys1 = list(muy_positivo_ordenado.keys())

    # Ordenando las observaciones positivas
    positivo = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Positivo':
            positivo[i] = peores_notas[i]['total_observaciones']

    positivo_ordenado = {}
    positivo_sort = sorted(
        positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(positivo_sort):
        positivo_ordenado[key[1][0]] = positivo[key[1][0]]

    list_keys2 = list(positivo_ordenado.keys())

    # Ordenando las observaciones neutrales
    neutral = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Neutral':
            neutral[i] = peores_notas[i]['total_observaciones']

    neutral_ordenado = {}
    neutral_sort = sorted(
        neutral.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(neutral_sort):
        neutral_ordenado[key[1][0]] = neutral[key[1][0]]

    list_keys3 = list(neutral_ordenado.keys())

    # Ordenando las observaciones negativas
    negativas = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Negativo':
            negativas[i] = peores_notas[i]['total_observaciones']

    negativas_ordenado = {}
    negativas_sort = sorted(
        negativas.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(negativas_sort):
        negativas_ordenado[key[1][0]] = negativas[key[1][0]]

    list_keys4 = list(negativas_ordenado.keys())

    # Ordenando las observaciones muy negativas
    muy_negativo = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Muy negativo':
            muy_negativo[i] = peores_notas[i]['total_observaciones']

    muy_negativo_ordenado = {}
    muy_negativo_sort = sorted(
        muy_negativo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_negativo_sort):
        muy_negativo_ordenado[key[1][0]] = muy_negativo[key[1][0]]

    list_keys5 = list(muy_negativo_ordenado.keys())

    peor_prom_profesor = []
    for key in list_keys5:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys4:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys3:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys2:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys1:
        peor_prom_profesor.append(peores_notas[key])

    return peor_prom_profesor


def mejor_promedio_calificacion(notas, diccionario):

    notas_sort = sorted(
        notas.items(), key=operator.itemgetter(1), reverse=True)
    mejor_nota = {}

    for key in enumerate(notas_sort):
        mejor_nota[key[1][0]] = notas[key[1][0]]

    list_keys = list(mejor_nota.keys())

    mejores_notas = {}
    for key in list_keys:
        mejores_notas[key] = diccionario[key]

    # Ordenando las observaciones muy positivas
    muy_positivo = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Muy positivo':
            muy_positivo[i] = mejores_notas[i]['total_observaciones']

    muy_positivo_ordenado = {}
    muy_positivo_sort = sorted(
        muy_positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_positivo_sort):
        muy_positivo_ordenado[key[1][0]] = muy_positivo[key[1][0]]

    list_keys1 = list(muy_positivo_ordenado.keys())

    # Ordenando las observaciones positivas
    positivo = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Positivo':
            positivo[i] = mejores_notas[i]['total_observaciones']

    positivo_ordenado = {}
    positivo_sort = sorted(
        positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(positivo_sort):
        positivo_ordenado[key[1][0]] = positivo[key[1][0]]

    list_keys2 = list(positivo_ordenado.keys())

    # Ordenando las observaciones neutrales
    neutral = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Neutral':
            neutral[i] = mejores_notas[i]['total_observaciones']

    neutral_ordenado = {}
    neutral_sort = sorted(
        neutral.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(neutral_sort):
        neutral_ordenado[key[1][0]] = neutral[key[1][0]]

    list_keys3 = list(neutral_ordenado.keys())

    # Ordenando las observaciones negativas
    negativas = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Negativo':
            negativas[i] = mejores_notas[i]['total_observaciones']

    negativas_ordenado = {}
    negativas_sort = sorted(
        negativas.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(negativas_sort):
        negativas_ordenado[key[1][0]] = negativas[key[1][0]]

    list_keys4 = list(negativas_ordenado.keys())

    # Ordenando las observaciones muy negativas
    muy_negativo = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Muy negativo':
            muy_negativo[i] = mejores_notas[i]['total_observaciones']

    muy_negativo_ordenado = {}
    muy_negativo_sort = sorted(
        muy_negativo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_negativo_sort):
        muy_negativo_ordenado[key[1][0]] = muy_negativo[key[1][0]]

    list_keys5 = list(muy_negativo_ordenado.keys())

    mejor_prom_profesor = []
    for key in list_keys1:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys2:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys3:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys4:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys5:
        mejor_prom_profesor.append(mejores_notas[key])

    return mejor_prom_profesor


def consultar_por_nombre(datos, nombre):

    datos_docente = []

    for i in range(len(datos)):
        if datos[i]['docente'] == nombre:
            datos_docente.append(datos[i])


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
    return diccionario
