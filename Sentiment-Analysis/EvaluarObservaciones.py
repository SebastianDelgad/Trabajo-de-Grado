import LeerObservaciones
import Preprocesado
import operator


txt = LeerObservaciones.observaciones()
nombres_cursos = LeerObservaciones.almacenar_nombres(txt)

def evaluar_documento():

    clasificacionInicial = []
    evaluar = []
    vecClasificador = []
    nota = 0
    for observaciones in txt:
        if observaciones[0].isnumeric():
            evaluar.append(observaciones)

        for nombreDoc in nombres_cursos:
            if observaciones == nombreDoc:
                if len(clasificacionInicial) > 0:
                    vectorRating = Preprocesado.dataset(evaluar)
                    for rating in vectorRating:
                        clasificacionInicial.append(rating)
                        nota += rating
                    nota = nota / len(evaluar)
                    evaluar = []
                    vecClasificador.append(float("{0:.1f}".format(nota)))
                    nota = 0
                clasificacionInicial.append(observaciones)

        if observaciones == txt[len(txt)-1]:
            vectorRating = Preprocesado.dataset(evaluar)
            for rating in vectorRating:
                clasificacionInicial.append(rating)
                nota += rating
            nota = nota / len(evaluar)
            vecClasificador.append(float("{0:.1f}".format(nota)))

    print(clasificacionInicial)
    doc_evaluado(clasificacionInicial)
    return vecClasificador

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

    print(clasificacionFinal)
    #return clasificacionFinal

def nombres_docentes():
    docentes = []
    nombreDocente = ""

    for word2 in nombres_cursos:
        for name in word2:
            if name != "-":
                nombreDocente += name
            else:
                docentes.append(nombreDocente.strip())
                nombreDocente = ""
                break
    return docentes


def cursos():
    curso = []
    nombreCurso = ""
    validar = 0

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


def info_dicionario(nombres,asignaturas,notas):

    dict_from_list = {}

    for i in range(len(nombres)):
        dict_from_list[i] = {'docente': nombres[i], 'asignatura': asignaturas[i], 'calificación': notas[i]}

    print(dict_from_list)
    return dict_from_list

def ordenar_diccionario_por_nombres(diccionario, nombres):

    docentesEvaluados = []
    for item in nombres:
        if item not in docentesEvaluados:
            docentesEvaluados.append(item)

    docentesOrdenados = sorted(docentesEvaluados)
    #print(docentesOrdenados)
    #return docentesOrdenados

    ordenadoAlfabeticamente = {}

    for name in docentesOrdenados:
        for i in range(len(diccionario)):
            if diccionario[i]['docente'] == name:
                ordenadoAlfabeticamente[i] = diccionario[i]

    print(ordenadoAlfabeticamente)

def promedio_calificacion(diccionario):

    notas = {}

    for i in range(len(diccionario)):
        notas[i] = diccionario[i]['calificación']

    return notas

def peor_promedio_calificacion(notas,diccionario):

    notas_sort = sorted(notas.items(), key=operator.itemgetter(1), reverse=False)
    peor_nota = {}

    for key in enumerate(notas_sort):
        peor_nota[key[1][0]] = notas[key[1][0]]

    peor_prom_profesor = {}
    list_keys1 = list(peor_nota.keys())

    for key in list_keys1:
        peor_prom_profesor[key] = diccionario[key]

    print(peor_prom_profesor)

def mejor_promedio_calificacion(notas,diccionario):

    notas_sort = sorted(notas.items(), key=operator.itemgetter(1), reverse=True)
    mejor_nota = {}

    for key in enumerate(notas_sort):
        mejor_nota[key[1][0]] = notas[key[1][0]]

    mejor_prom_profesor = {}
    list_keys2 = list(mejor_nota.keys())

    for key in list_keys2:
        mejor_prom_profesor[key] = diccionario[key]

    print(mejor_prom_profesor)

def data():
    notas = evaluar_documento()
    nombres = nombres_docentes()
    asignaturas = cursos()
    diccionario = info_dicionario(nombres, asignaturas, notas)
    ordenar_diccionario_por_nombres(diccionario, nombres)
    prom_notas = promedio_calificacion(diccionario)
    peor_promedio_calificacion(prom_notas, diccionario)
    mejor_promedio_calificacion(prom_notas, diccionario)

data()

