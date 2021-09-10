from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/mejorProm", methods=["GET"])
def mejor_prom():
    return jsonify(
        {"data": [
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "MATEMÁTICAS ESPECIALES PARA TECNOLOGÍA 111060M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 0,
                "total_pos": 1,
                "total_muy_pos": 0,
                "total_observaciones": 1,
                "id": 5
            },
            {
                "docente": "RAMIRO ANTONIO VICTORIA ALVAREZ",
                "asignatura": "CONTROL ELECTRÓNICO DE POTENCIA (E) 710104M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 0,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 3,
                "id": 7
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "CÁLCULO II 111051M 51",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 1,
                "total_pos": 5,
                "total_muy_pos": 0,
                "total_observaciones": 6,
                "id": 4
            },
            {
                "docente": "JUAN SEBASTIAN CORREA FERNANDEZ",
                "asignatura": "CÁLCULO II 111051M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 0,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 4,
                "id": 3
            },
            {
                "docente": "RODRIGO BECERRA TROCHEZ",
                "asignatura": "MATEMÁTICAS FINANCIERAS 802078M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 2,
                "total_pos": 5,
                "total_muy_pos": 0,
                "total_observaciones": 8,
                "id": 9
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "ELECTRICIDAD PARA ELECTRÓNICA 710196M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 3,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 7,
                "id": 8
            },
            {
                "docente": "JUAN SEBASTIAN CORREA FERNANDEZ",
                "asignatura": "CÁLCULO I 111050M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 2,
                "total_neu": 2,
                "total_pos": 4,
                "total_muy_pos": 0,
                "total_observaciones": 8,
                "id": 2
            },
            {
                "docente": "GERARDO HUMBERTO PERILLA CALVO",
                "asignatura": "ÁLGEBRA LINEAL 111048M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 3,
                "total_neu": 1,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 7,
                "id": 1
            },
            {
                "docente": "NATHALIA RIOS LOPEZ",
                "asignatura": "ESPAÑOL 204001M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 1,
                "total_pos": 0,
                "total_muy_pos": 0,
                "total_observaciones": 1,
                "id": 6
            },
            {
                "docente": "SANDRA ISABEL GARCIA MONTAÑO",
                "asignatura": "FÍSICA I 106011M 50",
                "promedio_calificación": "Negativo",
                "total_muy_neg": 0,
                "total_neg": 9,
                "total_neu": 2,
                "total_pos": 2,
                "total_muy_pos": 0,
                "total_observaciones": 13,
                "id": 0
            }
        ]}

    )


@app.route("/peorProm", methods=["GET"])
def peor_prom():
    return jsonify(
        {"data": [
            {
                "docente": "SANDRA ISABEL GARCIA MONTAÑO",
                "asignatura": "FÍSICA I 106011M 50",
                "promedio_calificación": "Negativo",
                "total_muy_neg": 0,
                "total_neg": 9,
                "total_neu": 2,
                "total_pos": 2,
                "total_muy_pos": 0,
                "total_observaciones": 13,
                "id": 0
            },
            {
                "docente": "GERARDO HUMBERTO PERILLA CALVO",
                "asignatura": "ÁLGEBRA LINEAL 111048M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 3,
                "total_neu": 1,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 7,
                "id": 1
            },
            {
                "docente": "NATHALIA RIOS LOPEZ",
                "asignatura": "ESPAÑOL 204001M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 1,
                "total_pos": 0,
                "total_muy_pos": 0,
                "total_observaciones": 1,
                "id": 6
            },
            {
                "docente": "JUAN SEBASTIAN CORREA FERNANDEZ",
                "asignatura": "CÁLCULO I 111050M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 2,
                "total_neu": 2,
                "total_pos": 4,
                "total_muy_pos": 0,
                "total_observaciones": 8,
                "id": 2
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "ELECTRICIDAD PARA ELECTRÓNICA 710196M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 3,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 7,
                "id": 8
            },
            {
                "docente": "JUAN SEBASTIAN CORREA FERNANDEZ",
                "asignatura": "CÁLCULO II 111051M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 0,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 4,
                "id": 3
            },
            {
                "docente": "RODRIGO BECERRA TROCHEZ",
                "asignatura": "MATEMÁTICAS FINANCIERAS 802078M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 2,
                "total_pos": 5,
                "total_muy_pos": 0,
                "total_observaciones": 8,
                "id": 9
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "CÁLCULO II 111051M 51",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 1,
                "total_pos": 5,
                "total_muy_pos": 0,
                "total_observaciones": 6,
                "id": 4
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "MATEMÁTICAS ESPECIALES PARA TECNOLOGÍA 111060M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 0,
                "total_pos": 1,
                "total_muy_pos": 0,
                "total_observaciones": 1,
                "id": 5
            },
            {
                "docente": "RAMIRO ANTONIO VICTORIA ALVAREZ",
                "asignatura": "CONTROL ELECTRÓNICO DE POTENCIA (E) 710104M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 0,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 3,
                "id": 7
            }
        ]}
    )


@app.route("/Albabeticamente", methods=["GET"])
def alfabeticamente():
    return jsonify(
        {"data": [
            {
                "docente": "GERARDO HUMBERTO PERILLA CALVO",
                "asignatura": "ÁLGEBRA LINEAL 111048M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 3,
                "total_neu": 1,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 7,
                "id": 1
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "CÁLCULO II 111051M 51",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 1,
                "total_pos": 5,
                "total_muy_pos": 0,
                "total_observaciones": 6,
                "id": 4
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "MATEMÁTICAS ESPECIALES PARA TECNOLOGÍA 111060M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 0,
                "total_pos": 1,
                "total_muy_pos": 0,
                "total_observaciones": 1,
                "id": 5
            },
            {
                "docente": "HECTOR GARCIA",
                "asignatura": "ELECTRICIDAD PARA ELECTRÓNICA 710196M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 3,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 7,
                "id": 8
            },
            {
                "docente": "JUAN SEBASTIAN CORREA FERNANDEZ",
                "asignatura": "CÁLCULO I 111050M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 2,
                "total_neu": 2,
                "total_pos": 4,
                "total_muy_pos": 0,
                "total_observaciones": 8,
                "id": 2
            },
            {
                "docente": "JUAN SEBASTIAN CORREA FERNANDEZ",
                "asignatura": "CÁLCULO II 111051M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 0,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 4,
                "id": 3
            },
            {
                "docente": "NATHALIA RIOS LOPEZ",
                "asignatura": "ESPAÑOL 204001M 50",
                "promedio_calificación": "Neutral",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 1,
                "total_pos": 0,
                "total_muy_pos": 0,
                "total_observaciones": 1,
                "id": 6
            },
            {
                "docente": "RAMIRO ANTONIO VICTORIA ALVAREZ",
                "asignatura": "CONTROL ELECTRÓNICO DE POTENCIA (E) 710104M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 0,
                "total_neu": 0,
                "total_pos": 3,
                "total_muy_pos": 0,
                "total_observaciones": 3,
                "id": 7
            },
            {
                "docente": "RODRIGO BECERRA TROCHEZ",
                "asignatura": "MATEMÁTICAS FINANCIERAS 802078M 50",
                "promedio_calificación": "Positivo",
                "total_muy_neg": 0,
                "total_neg": 1,
                "total_neu": 2,
                "total_pos": 5,
                "total_muy_pos": 0,
                "total_observaciones": 8,
                "id": 9
            },
            {
                "docente": "SANDRA ISABEL GARCIA MONTAÑO",
                "asignatura": "FÍSICA I 106011M 50",
                "promedio_calificación": "Negativo",
                "total_muy_neg": 0,
                "total_neg": 9,
                "total_neu": 2,
                "total_pos": 2,
                "total_muy_pos": 0,
                "total_observaciones": 13,
                "id": 0
            }
        ]}
    )


if __name__ == '__main__':
    app.run(debug=True)
