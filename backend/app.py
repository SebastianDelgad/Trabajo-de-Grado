from flask import Flask, jsonify, request, render_template, redirect
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
from LeerObservaciones import observaciones
from EvaluarObservaciones import data
from OrdenResultados import resultados, nombre_y_curso, promedio_calificacion, ordenar_diccionario_por_nombres, peor_promedio_calificacion, mejor_promedio_calificacion, nombres_docentes

ALLOWED_EXTENSIONS = {'pdf'}

app = Flask(__name__)

module_dir = os.path.dirname(__file__)
file = os.path.join(module_dir, '/PDF')
app.config['UPLOAD_FOLDER'] = module_dir
CORS(app)


def procesador(pdf):
    texto = observaciones(pdf)
    infoPrincipal = data(texto)
    return infoPrincipal


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


# @app.route("/")
# def upload_file():
# renderiamos la plantilla "formulario.html"
# return render_template('formulario.html')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload", methods=['GET', 'POST'])
def uploader():
    if request.method == 'POST':
        # obtenemos el archivo del input "archivo"
        f = request.files['archivo']
        if f and allowed_file(f.filename):
            filename = secure_filename(f.filename)
            # Guardamos el archivo en el directorio "PDF"
            f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            procesador(filename)
        # Retornamos una respuesta satisfactoria
            return redirect('http://localhost:3000/evaluaciones')
        return redirect('http://localhost:3000/classifier')



@app.route("/mejor-promedio", methods=["GET"])
def mejor_prom():
    best = {}
    best["data"] = mejor_promedio
    return jsonify(best)


@app.route("/peor-promedio", methods=["GET"])
def peor_prom():
    worse = {}
    worse["data"] = peor_promedio
    return jsonify(worse)


@app.route("/alfabeticamente", methods=["GET"])
def alfabeticamente():
    ordenado = {}
    ordenado["data"] = orden_nombres
    return jsonify(ordenado)


if __name__ == '__main__':
    app.run(debug=True)
