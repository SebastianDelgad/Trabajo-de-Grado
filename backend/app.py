from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/get", methods=["GET"])
def hello_world():
    return jsonify(
        {"data": [{
            'key': 1,
            'docente': 'HECTOR GARCIA',
            'asignatura': 'MATEMÁTICAS ESPECIALES PARA TECNOLOGÍA 111060M 50',
            'promedio_calificación': 'Positivo',
            'total_muy_neg': 0,
            'total_neg': 0,
            'total_neu': 0,
            'total_pos': 1,
            'total_muy_pos': 0,
            'total_observaciones': 1
        }, {
            'key': 2,
            'docente': 'RAMIRO ANTONIO VICTORIA ALVAREZ',
            'asignatura': 'CONTROL ELECTRÓNICO DE POTENCIA (E) 710104M 50',
            'promedio_calificación': 'Positivo',
            'total_muy_neg': 0,
            'total_neg': 0,
            'total_neu': 0,
            'total_pos': 3,
            'total_muy_pos': 0,
            'total_observaciones': 3
        }, {
            'key': 3,
            'docente': 'HECTOR GARCIA',
            'asignatura': 'CÁLCULO II 111051M 51',
            'promedio_calificación': 'Positivo',
            'total_muy_neg': 0,
            'total_neg': 0,
            'total_neu': 1,
            'total_pos': 5,
            'total_muy_pos': 0,
            'total_observaciones': 6
        }, {
            'key': 4,
            'docente': 'JUAN SEBASTIAN CORREA FERNANDEZ',
            'asignatura': 'CÁLCULO II 111051M 50',
            'promedio_calificación': 'Positivo',
            'total_muy_neg': 0,
            'total_neg': 1,
            'total_neu': 0,
            'total_pos': 3,
            'total_muy_pos': 0,
            'total_observaciones': 4
        }, {
            'key': 5,
            'docente': 'RODRIGO BECERRA TROCHEZ',
            'asignatura': 'MATEMÁTICAS FINANCIERAS 802078M 50',
            'promedio_calificación': 'Positivo',
            'total_muy_neg': 0,
            'total_neg': 1,
            'total_neu': 2,
            'total_pos': 5,
            'total_muy_pos': 0,
            'total_observaciones': 8
        }, {
            'key': 6,
            'docente': 'HECTOR GARCIA',
            'asignatura': 'ELECTRICIDAD PARA ELECTRÓNICA 710196M 50',
            'promedio_calificación': 'Neutral',
            'total_muy_neg': 0,
            'total_neg': 1,
            'total_neu': 3,
            'total_pos': 3,
            'total_muy_pos': 0,
            'total_observaciones': 7
        }, {
            'key': 7,
            'docente': 'JUAN SEBASTIAN CORREA FERNANDEZ',
            'asignatura': 'CÁLCULO I 111050M 50',
            'promedio_calificación': 'Neutral',
            'total_muy_neg': 0,
            'total_neg': 2,
            'total_neu': 2,
            'total_pos': 4,
            'total_muy_pos': 0,
            'total_observaciones': 8
        }, {
            'key': 8,
            'docente': 'GERARDO HUMBERTO PERILLA CALVO',
            'asignatura': 'ÁLGEBRA LINEAL 111048M 50',
            'promedio_calificación': 'Neutral',
            'total_muy_neg': 0,
            'total_neg': 3,
            'total_neu': 1,
            'total_pos': 3,
            'total_muy_pos': 0,
            'total_observaciones': 7
        }, {
            'key': 9,
            'docente': 'NATHALIA RIOS LOPEZ',
            'asignatura': 'ESPAÑOL 204001M 50',
            'promedio_calificación': 'Neutral',
            'total_muy_neg': 0,
            'total_neg': 0,
            'total_neu': 1,
            'total_pos': 0,
            'total_muy_pos': 0,
            'total_observaciones': 1
        }, {
            'key': 10,
            'docente': 'SANDRA ISABEL GARCIA MONTAÑO',
            'asignatura': 'FÍSICA I 106011M 50',
            'promedio_calificación': 'Negativo',
            'total_muy_neg': 0,
            'total_neg': 9,
            'total_neu': 2,
            'total_pos': 2,
            'total_muy_pos': 0,
            'total_observaciones': 13
        }]}

    )


if __name__ == '__main__':
    app.run(debug=True)
