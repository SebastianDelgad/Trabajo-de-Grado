import fitz  # Libreria PyMuPDF
import os

# Transforma un archivo PDF a TXT sin perder la estructura del PDF


def leer_PDF(pdf):
    module_dir = os.path.dirname(__file__)
    module_dir = module_dir + '/datos/'
    file = os.path.join(module_dir, pdf).replace(os.sep, "/")
    documento = fitz.open(file)
    pdf_a_texto = os.path.join(module_dir, pdf+'.txt').replace(os.sep, "/")
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
    module_dir = os.path.dirname(__file__)
    module_dir = module_dir + '/datos/'
    file = os.path.join(module_dir,  documento).replace(os.sep, "/")
    archivo = open(file, mode='r', encoding='utf8')
    for word in archivo:
        if word.strip() == 'RESULTADOS DE LA EVALUACIÓN DE LOS CURSOS DE LA UNIDAD ACADÉMICA':
            valido = True
            break
        else:
            valido = False
    archivo.close()

    return valido


def comprobarArchivo(pdf):
    nombre = leer_PDF(pdf)
    validacion = leer_txt(nombre)

    return validacion
