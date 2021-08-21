#Extrae información del archivo TXT desde donde comienzan observaciones a los docentes

TObservaciones = []
with open('PDF/2017- ll.pdf.txt', "r", encoding='utf8') as archivo:
    for word in archivo:
        if word.strip() == 'Observaciones':
            while (True):
                linea = archivo.readline()
                # TObservaciones.append(linea)
                print(linea)
                if not linea:
                    break
    archivo.close()

# print(TObservaciones)es)