import fitz    #Libreria PyMuPDF

#Transforma un archivo PDF a TXT sin perder la estructura del PDF

pdf_documento = 'PDF/2017- ll.pdf'
documento = fitz.open(pdf_documento)
salida = open(pdf_documento+ ".txt","wb")

for pagina in documento:
  texto =pagina.getText().encode("utf8")
  salida.write(texto)
  salida.write(b"\n----\n")
salida.close()




