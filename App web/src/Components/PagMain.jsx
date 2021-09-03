import React, { Fragment } from "react";
import graficos_imagen from "../Assets/Images/pexels-lukas-590037.jpg";
import alfabeticamente_imagen from "../Assets/Images/pexels-pixabay-434337.jpg";
import ok_imagen from "../Assets/Images/pexels-andrea-piacquadio-3767418.jpg";
import bad_imagen from "../Assets/Images/pexels-cottonbro-46296261.jpg";
import miner_imagen from "../Assets/Images/clipart4755686.png";
import machine_imagen from "../Assets/Images/Chip iconos vectoriales gratuitos diseñados por Freepik.png";
import sentiment_imagen from "../Assets/Images/ambalina-sentiment-analysis-header.jpg";

const PagMain = () => {
  return (
    <Fragment>
      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col">
            <h3>
              Califica las observaciones de los docentes en el periodo académico{" "}
            </h3>
            <p>
              Esta web proporciona un documento con las observaciones docente
              calificadas, donde se puede elegir ordenar el documento en 3
              formatos{" "}
            </p>
          </div>
          <div className="col">
            <img src={graficos_imagen} width="500" height="331" alt="grafico" />
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light">
        <div className="row justify-content-center">
          <h3>Tecnologías usadas en el desarrollo de esta web</h3>
        </div>
      </div>

      <div className="container mt-3 bg-light">
        <div className="row d-flex justify-content-around">
          <div className="col">
            <h3>Minería de texto</h3>
            <img src={miner_imagen} width="209" height="159" alt="miner" />
            <p>
              La minería de textos es el proceso de analizar texto con el objeto
              de capturar los temas, conceptos clave, sin necesidad de conocer
              las palabras o los términos exactos que los autores han utilizado
              para expresar dichos conceptos.
            </p>
            <p>Fuente: www.ibm.com</p>
          </div>
          <div className="col">
            <h3>Análisis de sentimiento</h3>
            <img
              src={sentiment_imagen}
              width="239"
              height="159"
              alt="sentiment"
            />
            <p>
              El análisis de texto, un tipo de análisis cualitativo, es la
              extracción de información útil del texto de manera que las ideas o
              los conceptos clave que contiene el texto pueden agruparse en una
              serie de categorías apropiadas.
            </p>
            <p>Fuente: www.ibm.com</p>
          </div>
          <div className="col">
            <h3>Machine learning</h3>
            <img src={machine_imagen} width="239" height="159" alt="machine" />
            <p>
              Machine learning es una forma de la IA que permite a un sistema
              aprender de los datos en lugar de aprender mediante la
              programación explícita.
            </p>
            <p>Fuente: www.ibm.com</p>
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light">
        <div className="row justify-content-center">
          <h3>Tipos de formato de las observaciones calificadas</h3>
        </div>
      </div>
      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col">
            <img
              src={alfabeticamente_imagen}
              width="500"
              height="331"
              alt="alfabeticamente"
            />
          </div>
          <div className="col">
            <h3>
              Documento ordenado alfabéticamente por el nombre de los docentes y
              sus cursos
            </h3>
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col">
            <h3>
              Documento con los cursos que en promedio fueron mejor calificados
              a peor calificados
            </h3>
          </div>
          <div className="col">
            <img src={ok_imagen} width="500" height="330" alt="ok_imagen" />
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col">
            <img src={bad_imagen} width="500" height="300" alt="bad" />
          </div>
          <div className="col">
            <h3>
              Documento con los cursos que en promedio fueron peor calificados a
              mejor calificados
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PagMain;
