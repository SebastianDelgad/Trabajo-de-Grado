import leerObservaciones
import preprocesado


txt = leerObservaciones.observaciones()
nombres = leerObservaciones.almacenarNombres(txt)

clasificacionInicial = []
clasificacionFinal = []
evaluar = []

for observaciones in txt:
    if observaciones[0].isnumeric():
        evaluar.append(observaciones)

    for nombreDoc in nombres:
        if observaciones == nombreDoc:
            if len(clasificacionInicial) > 0:
                vectorRating = preprocesado.dataset(evaluar)
                for rating in vectorRating:
                    clasificacionInicial.append(rating)
                evaluar = []
            clasificacionInicial.append(observaciones)

    if observaciones == txt[len(txt)-1]:
        vectorRating = preprocesado.dataset(evaluar)
        for rating in vectorRating:
            clasificacionInicial.append(rating)



print(clasificacionInicial)

for puntaje in clasificacionInicial:
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