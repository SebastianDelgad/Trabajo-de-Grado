from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return jsonify(
        {"data": [{
			"asignatura": "ALGEBRA LINEAL 111048M 50",
			"calificación": "Neutral",
			"docente": "GERARDO HUMBERTO PERILLA CALVO"
		},
		{
			"asignatura": "FISICA I 106011M 50",
			"calificación": "Negativo",
			"docente": "SANDRA ISABEL GARCIA MONTAÑO"
		},
		
		{
			"asignatura": "CALCULO I 111050M 50",
			"calificación": "Neutral",
			"docente": "JUAN SEBASTIAN CORREA FERNANDEZ"
		},
		{
			"asignatura": "CALCULO II 111051M 50",
			"calificación": "Positivo",
			"docente": "JUAN SEBASTIAN CORREA FERNANDEZ"
		},
		{
			"asignatura": "CALCULO II 111051M 51",
			"calificación": "Positivo",
			"docente": "HECTOR GARCIA"
		},
		{
			"asignatura": "MATEMATICAS ESPECIALES PARA TECNOLOGIA 111060M 50",
			"calificación": "Positivo",
			"docente": "HECTOR GARCIA"
		},
		{
			"asignatura": "ESPAÑOL 204001M 50",
			"calificación": "Neutral",
			"docente": "NATHALIA RIOS LOPEZ"
		},
		{
			"asignatura": "CONTROL ELECTRONICO DE POTENCIA (E) 710104M 50",
			"calificación": "Positivo",
			"docente": "RAMIRO ANTONIO VICTORIA ALVAREZ"
		},
		{
			"asignatura": "ELECTRICIDAD PARA ELECTRONICA 710196M 50",
			"calificación": "Neutral",
			"docente": "HECTOR GARCIA"
		},
		{
			"asignatura": "MATEMATICAS FINANCIERAS 802078M 50",
			"calificación": "Positivo",
			"docente": "RODRIGO BECERRA TROCHEZ"
		}
	]}

    )

if __name__ == '__main__':
    app.run(debug = True)
