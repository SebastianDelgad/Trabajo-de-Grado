import fitz  # Libreria PyMuPDF
import os


# Transforma un archivo PDF a TXT sin perder la estructura del PDF


def leer_PDF(pdf):
    module_dir = os.path.dirname(__file__)
    file = os.path.join(module_dir, pdf)
    documento = fitz.open(file)
    pdf_a_texto = os.path.join(module_dir, pdf+'.txt')
    nombre_txt = pdf+'.txt'
    salida = open(pdf_a_texto, "wb")

    for pagina in documento:
        texto = pagina.getText().encode("utf8")
        salida.write(texto)
        salida.write(b"\n----\n")
    salida.close()
    return nombre_txt


# Extrae información del archivo TXT desde donde comienzan observaciones a los docentes

def leer_txt(documento):
    # def leer_txt():
    tObservaciones = []
    quitarEspacios = []
    quitarLinks = []
    module_dir = os.path.dirname(__file__)
    file = os.path.join(module_dir, documento)
    archivo = open(file, mode='r', encoding='utf8')
    for word in archivo:
        if word.strip() == 'Observaciones':
            while (True):
                linea = archivo.readline()
                tObservaciones.append(linea.strip())
                # print(linea)
                if not linea:
                    break

    for word3 in tObservaciones:
        if len(word3) > 0:
            quitarEspacios.append(word3)
    
    for frases in quitarEspacios:
        if len(frases) > 2:
            if frases != "----":
                if frases[2] != "/":
                    if frases != "https://swebse12.univalle.edu.co/evaluaciondocente//paquetes/reportes/index.php": 
                        quitarLinks.append(frases)
        
        else:
            quitarLinks.append(frases)

    
    return quitarLinks

# Almacena los nombres, curso y grupo del curso que enseña el docente


def almacenar_nombres(datos):
    vectorNombres = []

    grupos = ["M 50", "M 51", "M 52", "M 53", "M 54",
              "M 55", "M 56", "M 57", "M 58", "M 59", "M 60"]

    for nombre in datos:
        if len(nombre) > 18:
            grupoPDF = nombre[len(nombre) - 4] + "" + nombre[len(nombre) - 3] + \
                "" + nombre[len(nombre) - 2] + "" + nombre[len(nombre) - 1]
            for grupo in grupos:
                if grupoPDF == grupo:
                    vectorNombres.append(nombre)

    return vectorNombres


# Texto perfectamente acomodado, se extrajeron saltos de linea innecesarios que se generaban por el formato del PDF

def procesado_txt(datos, vectorNombres):
    vectorFinal = []
    vectorDatosProcesados = []
    datosFinalesProcesados = []
    nObservación = 0
    union = ""

    for word2 in datos:
        if word2[0].isnumeric():
            if int(word2[0]) > nObservación:
                vectorFinal.append(union)
                union = ""
                nObservación += 1
            else:
                if int(word2[0]) <= nObservación:
                    vectorFinal.append(union)
                    union = ""

        for nombre in vectorNombres:
            if word2 == nombre:
                if len(union) > 0:
                    vectorFinal.append(union)
                    union = ""
                vectorFinal.append(word2)
                break
        else:
            union += word2 + " "

    vectorFinal.append(union)

    # se elimina los elementos vacios que hay en el vector
    for word3 in vectorFinal:
        if len(word3) > 0:
            vectorDatosProcesados.append(word3)
    
    for word4 in vectorDatosProcesados:
        if len(word4) > 1 and word4[1] != "/":
            datosFinalesProcesados.append(word4)

    return datosFinalesProcesados


def observaciones(file):

    pdf = leer_PDF(file)
    txt = leer_txt(pdf)
    nombres = almacenar_nombres(txt)
    procesado = procesado_txt(txt, nombres)
    
    return procesado
