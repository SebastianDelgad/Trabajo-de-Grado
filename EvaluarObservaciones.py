import LeerObservaciones
import Preprocesado


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
                    vecClasificador.append(float("{0:.2f}".format(nota)))
                    nota = 0
                clasificacionInicial.append(observaciones)

        if observaciones == txt[len(txt)-1]:
            vectorRating = Preprocesado.dataset(evaluar)
            for rating in vectorRating:
                clasificacionInicial.append(rating)
                nota += rating
            nota = nota / len(evaluar)
            vecClasificador.append(float("{0:.2f}".format(nota)))

    print(clasificacionInicial)
    doc_evaluado(clasificacionInicial)
    return vecClasificador

def doc_evaluado(dataClasificacion):

    clasificacionFinal = []
    for puntaje in dataClasificacion:
        if puntaje == 0:
            clasificacionFinal.append("Muy negativo")
        elif puntaje == 1:
            clasificacionFinal.append("Negativo")
        elif puntaje == 2:
            clasificacionFinal.append("Neutral")
        elif puntaje == 3:
            clasificacionFinal.append("Positivo")
        elif puntaje == 4:
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


def data():
    notas = evaluar_documento()
    nombres = nombres_docentes()
    asignaturas = cursos()
    info_dicionario(nombres, asignaturas, notas)

data()

#ordenar_doc(corsair,evaluado)

#nombre_docente()
