import operator

# toma todas las notas o calificaciones que hay en el vector entrante separandolas de los nombres de los docentes


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


# almacena el nombre del profesor y cruso que dictó

def nombre_y_curso(datos):
    nombreYCurso = []

    for nombre in datos:
        if type(nombre) == str:
            nombreYCurso.append(nombre)
    print(nombreYCurso)
    return nombreYCurso


# cuenta la cantidad de obsercaciones muy negativas que tuvo el profesor

def cant_muy_negativa(dataClasificacion):

    totalMuyNeg = []
    for item in dataClasificacion:
        muyNeg = 0
        for num in item:
            if num == -2:
                muyNeg += 1
        totalMuyNeg.append(muyNeg)
    return totalMuyNeg


# cuenta la cantidad de obsercaciones negativas que tuvo el profesor

def cant_negativa(dataClasificacion):
    totalNeg = []
    for item in dataClasificacion:
        neg = 0
        for num in item:
            if num == -1:
                neg += 1
        totalNeg.append(neg)
    return totalNeg


# cuenta la cantidad de obsercaciones neural que tuvo el profesor

def cant_neutral(dataClasificacion):
    totalNeu = []
    for item in dataClasificacion:
        neu = 0
        for num in item:
            if num == 0:
                neu += 1
        totalNeu.append(neu)
    return totalNeu


# cuenta la cantidad de obsercaciones positivas que tuvo el profesor

def cant_postiva(dataClasificacion):
    totalPos = []
    for item in dataClasificacion:
        pos = 0
        for num in item:
            if num == 1:
                pos += 1
        totalPos.append(pos)
    return totalPos


# cuenta la cantidad de obsercaciones muy positivas que tuvo el profesor

def cant_muy_positiva(dataClasificacion):
    totalMuyPos = []
    for item in dataClasificacion:
        muyPos = 0
        for num in item:
            if num == 2:
                muyPos += 1
        totalMuyPos.append(muyPos)
    return totalMuyPos


# determinar el promedio de calificación que tuvo el docente sumando tomas las observaciones que tuvo en cada categoria y dividiendo por la cantidad

def nota_promedio(muyNeg, neg, neu, pos, muyPos):
    notas_prom = []

    for i in range(len(pos)):
        nota_prom = ((-2 * muyNeg[i]) + (neg[i] * -1) + pos[i] + (muyPos[i] * 2)) / (
            muyNeg[i] + neg[i] + pos[i] + muyPos[i] + neu[i])
        notas_prom.append(float("{0:.1f}".format(nota_prom)))
    return notas_prom


# cuenta la cantidad de observaciones que tuvo dicho docente
def total_observaciones(muyNeg, neg, neu, pos, muyPos):
    total = []

    for i in range(len(pos)):
        nota_prom = muyNeg[i] + neg[i] + pos[i] + muyPos[i] + neu[i]
        total.append(nota_prom)
    return total


# separa y almacena los nombres de los docentes

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


# separa y almacena el nombre de los cursos

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


# Se arma el diccionario de datos con los resultados de todas las funciones anteriores

def info_dicionario(nombres, asignaturas, notas, total_muy_neg, total_neg, total_neu, total_pos, total_muy_pos,
                    total_observaciones):

    dict_from_list = {}

    for i in range(len(nombres)):
        dict_from_list[i] = {'docente': nombres[i], 'asignatura': asignaturas[i], 'promedio_calificación': notas[i],
                             'total_muy_neg': total_muy_neg[i], 'total_neg': total_neg[i], 'total_neu': total_neu[i],
                             'total_pos': total_pos[i], 'total_muy_pos': total_muy_pos[i],
                             'total_observaciones': total_observaciones[i], 'id': i}
    # print(dict_from_list)
    return dict_from_list


# Se ordena el diccionario de datos por el orden alfabético de los nombres de los profesores
#También se cambian las puntuaciones del promedio de calificación por texto
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

    print(ordenadoAlfabeticamente)


#Se almacena el primedio de notas en un vector para más adelante operarlo con sort y organizarlo
def promedio_calificacion(diccionario):
    notas = {}
    for i in range(len(diccionario)):
        notas[i] = diccionario[i]['promedio_calificación']
    return notas


#Se organiza el diccionario por el promedio de notas más bajo,  en segundo lugar se organiza por el docente que más observaciones
#obtuvo en cada categoria
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

    # Ordenando las observaciones muy positivas según la cantidad total de observaciones
    muy_positivo = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Muy positivo':
            muy_positivo[i] = peores_notas[i]['total_observaciones']

    muy_positivo_ordenado = {}
    muy_positivo_sort = sorted(
        muy_positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_positivo_sort):
        muy_positivo_ordenado[key[1][0]] = muy_positivo[key[1][0]]

    list_keys_muy_pos = list(muy_positivo_ordenado.keys())

    # ORdenando las observaciones positivas según la cantidad total de observaciones
    positivo = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Positivo':
            positivo[i] = peores_notas[i]['total_observaciones']

    positivo_ordenado = {}
    positivo_sort = sorted(
        positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(positivo_sort):
        positivo_ordenado[key[1][0]] = positivo[key[1][0]]

    list_keys_pos = list(positivo_ordenado.keys())

    # ORdenando las observaciones neutrales según la cantidad total de observaciones
    neutral = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Neutral':
            neutral[i] = peores_notas[i]['total_observaciones']

    neutral_ordenado = {}
    neutral_sort = sorted(
        neutral.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(neutral_sort):
        neutral_ordenado[key[1][0]] = neutral[key[1][0]]

    list_keys_neu = list(neutral_ordenado.keys())

    # ORdenando las observaciones negativas según la cantidad total de observaciones
    negativas = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Negativo':
            negativas[i] = peores_notas[i]['total_observaciones']

    negativas_ordenado = {}
    negativas_sort = sorted(
        negativas.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(negativas_sort):
        negativas_ordenado[key[1][0]] = negativas[key[1][0]]

    list_keys_neg = list(negativas_ordenado.keys())

    # Ordenando las observaciones muy negativas según la cantidad total de observaciones
    muy_negativo = {}
    for i in range(len(peores_notas)):
        if peores_notas[i]['promedio_calificación'] == 'Muy negativo':
            muy_negativo[i] = peores_notas[i]['total_observaciones']

    muy_negativo_ordenado = {}
    muy_negativo_sort = sorted(
        muy_negativo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_negativo_sort):
        muy_negativo_ordenado[key[1][0]] = muy_negativo[key[1][0]]

    list_keys_muy_neg = list(muy_negativo_ordenado.keys())

    #creo el vector final donde van a estar ordenalas las observaciones del promedio más bajo al más alto
    #primero se almacena los datos con el promedio muy negativo hasta el muy positivo
    peor_prom_profesor = []
    for key in list_keys_muy_neg:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys_neg:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys_neu:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys_pos:
        peor_prom_profesor.append(peores_notas[key])

    for key in list_keys_muy_pos:
        peor_prom_profesor.append(peores_notas[key])

    print(peor_prom_profesor)


#Se organiza el diccionario por el promedio de notas más alto,  en segundo lugar se organiza por el docente que más observaciones
#obtuvo en cada categoria
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

    # ORdenando las observaciones muy positivas según la cantidad total de observaciones
    muy_positivo = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Muy positivo':
            muy_positivo[i] = mejores_notas[i]['total_observaciones']

    muy_positivo_ordenado = {}
    muy_positivo_sort = sorted(
        muy_positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_positivo_sort):
        muy_positivo_ordenado[key[1][0]] = muy_positivo[key[1][0]]

    list_keys_muy_pos = list(muy_positivo_ordenado.keys())

    # ORdenando las observaciones positivas según la cantidad total de observaciones
    positivo = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Positivo':
            positivo[i] = mejores_notas[i]['total_observaciones']

    positivo_ordenado = {}
    positivo_sort = sorted(
        positivo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(positivo_sort):
        positivo_ordenado[key[1][0]] = positivo[key[1][0]]

    list_keys_pos = list(positivo_ordenado.keys())

    # ORdenando las observaciones neutrales según la cantidad total de observaciones
    neutral = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Neutral':
            neutral[i] = mejores_notas[i]['total_observaciones']

    neutral_ordenado = {}
    neutral_sort = sorted(
        neutral.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(neutral_sort):
        neutral_ordenado[key[1][0]] = neutral[key[1][0]]

    list_keys_neu = list(neutral_ordenado.keys())

    # ORdenando las observaciones negativas según la cantidad total de observaciones
    negativas = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Negativo':
            negativas[i] = mejores_notas[i]['total_observaciones']

    negativas_ordenado = {}
    negativas_sort = sorted(
        negativas.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(negativas_sort):
        negativas_ordenado[key[1][0]] = negativas[key[1][0]]

    list_keys_neg = list(negativas_ordenado.keys())

    # Ordenando las observaciones muy negativas según la cantidad total de observaciones
    muy_negativo = {}
    for i in range(len(mejores_notas)):
        if mejores_notas[i]['promedio_calificación'] == 'Muy negativo':
            muy_negativo[i] = mejores_notas[i]['total_observaciones']

    muy_negativo_ordenado = {}
    muy_negativo_sort = sorted(
        muy_negativo.items(), key=operator.itemgetter(1), reverse=True)
    for key in enumerate(muy_negativo_sort):
        muy_negativo_ordenado[key[1][0]] = muy_negativo[key[1][0]]

    list_keys_muy_neg = list(muy_negativo_ordenado.keys())


    #creo el vector final donde van a estar ordenalas las observaciones del promedio más alto al más bajo
    #primero se almacena los datos con el promedio muy positivo hasta el muy negativo
    mejor_prom_profesor = []
    for key in list_keys_muy_pos:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys_pos:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys_neu:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys_neg:
        mejor_prom_profesor.append(mejores_notas[key])

    for key in list_keys_muy_neg:
        mejor_prom_profesor.append(mejores_notas[key])

    print(mejor_prom_profesor)


#Se obtienen los datos de las observaciones de un docente en especifico
def consultar_por_nombre(datos, nombre):
    datos_docente = []
    for i in range(len(datos)):
        if datos[i]['docente'] == nombre:
            datos_docente.append(datos[i])
    
    print(datos_docente)



#Se obtiene los datos de las observaciones de un curso
def consultar_por_curso(datos, curso):
    datos_docente = []
    grupos = ["50", "51", "52", "53", "54",
              "55", "56", "57", "58", "59", "60"]

    for i in range(len(datos)):
        materia = datos[i]['asignatura'] 
        for grupo in grupos:
            if (materia[(len(materia))-2] +""+ materia[(len(materia))-1]) == grupo:
                materia = materia.replace(" "+grupo,"")
                if materia == curso:  
                    datos_docente.append(datos[i])

    print(datos_docente)


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
    #consultar_por_nombre(diccionario, 'JUAN SEBASTIAN CORREA FERNANDEZ')
    #consultar_por_curso(diccionario, 'CALCULO I 111050M')


#funcion que lee el txt donde estan almacenados los resultados de calificar dicho PDF que esta en esa ruta
def leer_archivo():
    datos = []
    archivo = open('PDF/resultado.txt', 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())
    print(datos)
    return datos

#inicializó la función para obtener los resultados, como ya están almacedos los resultados de califcacion, el orden los obtiene al instante
datos = leer_archivo()
resultados(datos)
