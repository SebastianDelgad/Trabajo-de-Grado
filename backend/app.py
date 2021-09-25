from flask import Flask, jsonify, request, render_template, redirect
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
from LeerObservaciones import observaciones
from EvaluarObservaciones import data, promedio_calificacion, ordenar_diccionario_por_nombres, peor_promedio_calificacion, mejor_promedio_calificacion, nombres_docentes

app = Flask(__name__)
module_dir = os.path.dirname(__file__)
file = os.path.join(module_dir, '/PDF')
app.config['UPLOAD_FOLDER'] = module_dir
CORS(app)


def procesador(pdf):
    texto = observaciones(pdf)
    diccionario = data(texto)
    nombres = nombres_docentes(texto)
    promedio = promedio_calificacion(diccionario)
    orden_nombres = ordenar_diccionario_por_nombres(diccionario, nombres)
    peor_promedio = peor_promedio_calificacion(promedio, diccionario)
    mejor_promedio = mejor_promedio_calificacion(promedio, diccionario)
    alfabeticamente(orden_nombres)
    mejor_prom(mejor_promedio)
    peor_prom(peor_promedio)
    print("terminé")
    

#@app.route("/")
#def upload_file():
 # renderiamos la plantilla "formulario.html"
 #return render_template('formulario.html')


@app.route("/upload", methods=['GET','POST'])
def uploader():
 if request.method == 'POST':
  # obtenemos el archivo del input "archivo"
  f = request.files['archivo']
  filename = secure_filename(f.filename)
  # Guardamos el archivo en el directorio "PDF"
  f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
  procesador(filename)
  # Retornamos una respuesta satisfactoria
  return redirect('http://localhost:3000/classifier')


@app.route("/mejor-promedio", methods=["GET"])
def mejor_prom(mejor_promedio):
    best = {}
    best["data"] = mejor_promedio
    return jsonify(best)


@app.route("/peor-promedio", methods=["GET"])
def peor_prom(peor_promedio):
    worse = {}
    worse["data"] = peor_promedio
    return jsonify(worse)


@app.route("/alfabeticamente", methods=["GET"])
def alfabeticamente(orden_nombres):
    ordenado = {}
    ordenado["data"] = orden_nombres
    return jsonify(ordenado)


if __name__ == '__main__':
    app.run(debug=True)
