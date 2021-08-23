import leerObservaciones
import preprocesado


#datos = ['El mejor profesor de la universidad']

txt = leerObservaciones.observaciones()

#p = [txt[1]]
#print(p)
#rating = preprocesado.dataset(p)

nombres = leerObservaciones.almacenarNombres(txt)

#print(rating[0])

#print("'"+txt[1]+"'")

print(nombres)

clasificacionInicial = []
clasificacionFinal = []

for observaciones in txt:
    if observaciones[0].isnumeric():
        evaluar = [observaciones]
        rating = preprocesado.dataset(evaluar)
        clasificacionInicial.append(rating[0])

    for nombreDoc in nombres:
        if observaciones == nombreDoc:
            clasificacionInicial.append(observaciones)
            break
        #print(observaciones[0])

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