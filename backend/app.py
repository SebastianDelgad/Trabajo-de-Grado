from flask import Flask, jsonify
from flask_cors import CORS
from LeerObservaciones import tiempo_calificacion, observaciones, almacenar_nombres
from EvaluarObservaciones import data, promedio_calificacion, ordenar_diccionario_por_nombres, peor_promedio_calificacion, mejor_promedio_calificacion, nombres_docentes

app = Flask(__name__)
CORS(app)

texto = observaciones()
diccionario = data()
nombres = nombres_docentes(texto)
promedio = promedio_calificacion(diccionario)
orden_nombres = ordenar_diccionario_por_nombres(diccionario, nombres)
peor_promedio = peor_promedio_calificacion(promedio, diccionario)
mejor_promedio = mejor_promedio_calificacion(promedio, diccionario)


@app.route("/tiempo", methods=["GET"])
def tiempo_cla():
    time = {}
    tiempo = tiempo_calificacion(texto)
    time['Tiempo'] = tiempo
    return jsonify(
        {"data": [time] })


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