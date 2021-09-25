from LeerObservaciones import observaciones, almacenar_nombres
from Preprocesado import dataset
import operator




def evaluar_documento(txt):

    nombres_cursos = almacenar_nombres(txt)
    clasificacionInicial = []
    cantidad = []
    evaluar = []
    vectorEvaluado = []
    vecClasificador = []
    notas = []
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

    vectorEvaluado = dataset(evaluar)
    cantidad.pop(0)
    item = 0
    for i in range(len(nombres_cursos)):
        vecClasificador.append(nombres_cursos[i])
        clasificacionInicial.append(notas)
        notas = []
        while item < cantidad[i]:
            vecClasificador.append(vectorEvaluado[item])
            notas.append(vectorEvaluado[item])
            item += 1
    clasificacionInicial.append(notas)

    clasificacionInicial.pop(0)
    #print(vecClasificador)
    #print(clasificacionInicial)
    doc_evaluado(vecClasificador)
    return clasificacionInicial


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


def doc_evaluado(dataClasificacion):

    clasificacionFinal = []
    for puntaje in dataClasificacion:
        if puntaje == -2:
            clasificacionFinal.append("Muy negativo")
        elif puntaje == -1:
            clasificacionFinal.append("Negativo")
        elif puntaje == 0:
            clasificacionFinal.append("Neutral")
        elif puntaje == 1:
            clasificacionFinal.append("Positivo")
        elif puntaje == 2:
            clasificacionFinal.append("Muy positivo")
        else:
            clasificacionFinal.append(puntaje)

    # print(clasificacionFinal)
    return dataClasificacion


def nombres_docentes(txt):
    docentes = []
    nombreDocente = ""
    nombres_cursos = almacenar_nombres(txt)
    for word2 in nombres_cursos:
        for name in word2:
            if name != "-":
                nombreDocente += name
            else:
                docentes.append(nombreDocente.strip())
                nombreDocente = ""
                break

    return docentes


def cursos(txt):
    curso = []
    nombreCurso = ""
    validar = 0
    nombres_cursos = almacenar_nombres(txt)
    for item in nombres_cursos:
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

    return mejor_prom_profesor


def data(txt):
    evaluacion = evaluar_documento(txt)
    total_muy_neg = cant_muy_negativa(evaluacion)
    total_neg = cant_negativa(evaluacion)
    total_neu = cant_neutral(evaluacion)
    total_pos = cant_postiva(evaluacion)
    total_muy_pos = cant_muy_positiva(evaluacion)
    total_obs = total_observaciones(
        total_muy_neg, total_neg, total_neu, total_pos, total_muy_pos)
    notas = nota_promedio(total_muy_neg, total_neg,
                          total_neu, total_pos, total_muy_pos)
    nombres = nombres_docentes(txt)
    asignaturas = cursos(txt)
    diccionario = info_dicionario(nombres, asignaturas, notas, total_muy_neg,
                                  total_neg, total_neu, total_pos, total_muy_pos, total_obs)
    #prom_notas = promedio_calificacion(diccionario)
    #ordenar_diccionario_por_nombres(diccionario, nombres)
    #peor_promedio_calificacion(prom_notas, diccionario)
    #mejor_promedio_calificacion(prom_notas, diccionario)
    return diccionario

#data()