from flask import Flask, jsonify, request, redirect
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
from LeerObservaciones import observaciones
from EvaluarObservaciones import data
from OrdenResultados import resultados, nombre_y_curso, promedio_calificacion, ordenar_diccionario_por_nombres, peor_promedio_calificacion, mejor_promedio_calificacion, nombres_docentes
import urllib.request
import numpy as np

def procesador_mejor():

    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'resultado.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())
    diccionario = resultados(datos)

    nombresCursos = nombre_y_curso(datos)
    prom_notas = promedio_calificacion(diccionario)
    nombres = nombres_docentes(nombresCursos)
    orden_nombres = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor_promedio = peor_promedio_calificacion(prom_notas, diccionario)
    mejor_promedio = mejor_promedio_calificacion(prom_notas, diccionario)
    return mejor_promedio

def procesador_peor():

    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'resultado.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())
    diccionario = resultados(datos)

    nombresCursos = nombre_y_curso(datos)
    prom_notas = promedio_calificacion(diccionario)
    nombres = nombres_docentes(nombresCursos)
    orden_nombres = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor_promedio = peor_promedio_calificacion(prom_notas, diccionario)
    mejor_promedio = mejor_promedio_calificacion(prom_notas, diccionario)
    return peor_promedio

def procesador_orden():

    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'resultado.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())
    diccionario = resultados(datos)

    nombresCursos = nombre_y_curso(datos)
    prom_notas = promedio_calificacion(diccionario)
    nombres = nombres_docentes(nombresCursos)
    orden_nombres = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor_promedio = peor_promedio_calificacion(prom_notas, diccionario)
    mejor_promedio = mejor_promedio_calificacion(prom_notas, diccionario)
    return orden_nombres

def procesador(pdf):
    texto = observaciones(pdf)
    infoPrincipal = data(texto, pdf)
    module_dir = os.path.dirname(__file__)
    os.remove(module_dir+'\\'+pdf)
    os.remove(module_dir+'\\'+pdf+'.txt')
    return infoPrincipal

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'pdf'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




app = Flask(__name__)
CORS(app)


@app.route("/")
def idenx():
# renderiamos la plantilla "formulario.html"
    return "<h1>Welcome</h1>"

@app.route("/upload", methods=['POST'])
def uploader():
    if request.method == 'POST':
        # obtenemos el archivo del input "archivo"
        f = request.files['File']
        if f and allowed_file(f.filename):
            filename = secure_filename(f.filename)
            # Guardamos el archivo en el directorio "PDF"
            module_dir = os.path.dirname(__file__)
            app.config['UPLOAD_FOLDER'] = module_dir
            f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            procesador(filename)
        # Retornamos una respuesta satisfactoria
            return redirect('http://localhost:3000/evaluaciones')
        return redirect('http://localhost:3000/classifier')


@app.route("/mejor-promedio", methods=["GET"])
def mejor_prom():
    mejor_promedio = procesador_mejor()
    best = {}
    best["data"] = mejor_promedio
    return jsonify(best)


@app.route("/peor-promedio", methods=["GET"])
def peor_prom():
    peor_promedio = procesador_peor()
    worse = {}
    worse["data"] = peor_promedio
    return jsonify(worse)


@app.route("/alfabeticamente", methods=["GET"])
def alfabeticamente():
    orden_nombres = procesador_orden()
    ordenado = {}
    ordenado["data"] = orden_nombres
    return jsonify(ordenado)


@app.route("/historial", methods=["POST"])
def historial():
    if request.method == 'POST':
        # obtenemos el nombre del input "archivo"
        f = request.values["link"]
        print(f)
        url = "https://storage.googleapis.com/teacher-qualifier.appspot.com/"+f
        obtenerArchivo(url)
        
        return redirect('http://localhost:3000/ordenado')
        

def obtenerArchivo(url):
        data = urllib.request.urlopen(url).read().decode(encoding="utf-8")
        conc = ""
        infoWeb = []
        for line in data:
            if line == "\r" :
                infoWeb.append(conc.strip())
                conc = ""
            else:
                conc += line
    
        if len(infoWeb) > 1:
            cambio = []
            for line in infoWeb:
                if len(line) < 4:
                    cambio.append(int(line))
                else:
                    cambio.append(line)
        module_dir = os.path.dirname(__file__)
        print(module_dir)
        resultado = os.path.join(module_dir, 'historial.txt')
        np.savetxt(resultado, np.array(cambio), fmt="%s")


@app.route("/historial-ordenado", methods=["GET"])
def historialorden():
    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'historial.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())

    diccionario = resultados(datos)
    nombresCursos = nombre_y_curso(datos)
    prom_notas = promedio_calificacion(diccionario)
    nombres = nombres_docentes(nombresCursos)
    ordenado = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor= peor_promedio_calificacion(prom_notas, diccionario)
    mejor = mejor_promedio_calificacion(prom_notas, diccionario)
    historial = {}
    historial["data"] = ordenado
    return jsonify(historial)

@app.route("/historial-mejor-prom", methods=["GET"])
def historialmejor():
    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'historial.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())

    diccionario = resultados(datos)
    nombresCursos = nombre_y_curso(datos)
    prom_notas = promedio_calificacion(diccionario)
    nombres = nombres_docentes(nombresCursos)
    ordenado = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor= peor_promedio_calificacion(prom_notas, diccionario)
    mejor = mejor_promedio_calificacion(prom_notas, diccionario)
    historial = {}
    historial["data"] = mejor
    return jsonify(historial)

    

@app.route("/historial-peor-prom", methods=["GET"])
def historialpeor():
    datos = []
    module_dir = os.path.dirname(__file__)
    pdf_a_texto = os.path.join(module_dir, 'historial.txt')
    archivo = open(pdf_a_texto, 'r')
    for line in archivo.readlines():
        if len(line) < 4:
            datos.append(int(line.strip()))
        else:
            datos.append(line.strip())

    diccionario = resultados(datos)
    nombresCursos = nombre_y_curso(datos)
    prom_notas = promedio_calificacion(diccionario)
    nombres = nombres_docentes(nombresCursos)
    ordenado = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor= peor_promedio_calificacion(prom_notas, diccionario)
    mejor = mejor_promedio_calificacion(prom_notas, diccionario)
    historial = {}
    historial["data"] = peor
    return jsonify(historial)

if __name__ == '__main__':
    app.run(debug=True)
