import React, { Fragment } from "react";
import { NavbarMain } from "./NavbarMain";
import graficos_imagen from "../Assets/Images/pexels-lukas-590037.png";
import alfabeticamente_imagen from "../Assets/Images/pexels-pixabay-434337.png";
import ok_imagen from "../Assets/Images/pexels-andrea-piacquadio-3767418.png";
import bad_imagen from "../Assets/Images/pexels-cottonbro-46296261.png";
import miner_imagen from "../Assets/Images/clipart4755686.png";
import machine_imagen from "../Assets/Images/Chip iconos vectoriales gratuitos diseñados por Freepik.png";
import sentiment_imagen from "../Assets/Images/ambalina-sentiment-analysis-header.png";

export const PagMain = () => {
  return (
    <Fragment>
      <NavbarMain />
      <div className="container mt-3 bg-light rounded-6">
        <br />
        <h3 className="text-center text-responsive">
          Califica las observaciones de los docentes en el periodo académico{" "}
        </h3>
        <br />
        <div className="row justify-content-md-center">
          <div className="col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <p className="text-responsive">
              Esta web proporciona un documento con las observaciones docente
              calificadas, donde se puede elegir ordenar el documento en 3
              formatos
            </p>
          </div>
          <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={graficos_imagen}
              className="img-fluid rounded"
              alt="grafico"
            />
          </div>
        </div>
        <br />
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <br />
        <h3 className="text-center">
          Tecnologías usadas en el desarrollo de esta web
        </h3>
        <br />
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <div className="row justify-content-md-center mt-3">
          <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <br />
            <h4 className="text-center text-responsive">Minería de texto</h4>
            <br />
            <img src={miner_imagen} className="img-fluid rounded" alt="miner" />
            <br />
            <br />
            <p className="text-justify">
              La minería de textos es el proceso de analizar texto con el objeto
              de capturar los temas, conceptos clave, sin necesidad de conocer
              las palabras o los términos exactos que los autores han utilizado
              para expresar dichos conceptos.
            </p>
            <br />
            <a
              className="text-black"
              href="https://www.ibm.com/docs/es/spss-modeler/18.1.1?topic=analytics-about-text-mining"
            >
              {" "}
              <u> Fuente: www.ibm.com</u>{" "}
            </a>
            <br />
            <br />
          </div>
          <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <br />
            <h4 className="text-center text-responsive">
              Análisis de sentimiento
            </h4>
            <br />
            <img
              src={sentiment_imagen}
              className="img-fluid rounded"
              alt="sentiment"
            />
            <p className="text-justify">
              <br />
              El análisis de texto, un tipo de análisis cualitativo, es la
              extracción de información útil del texto de manera que las ideas o
              los conceptos clave que contiene el texto pueden agruparse en una
              serie de categorías apropiadas.
            </p>
            <br />
            <a
              className="text-black"
              href="https://www.ibm.com/docs/es/spss-modeler/18.1.1?topic=analytics-about-text-mining"
            >
              {" "}
              <u> Fuente: www.ibm.com</u>{" "}
            </a>
          </div>
          <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <br />
            <h4 className="text-center">Machine learning</h4>
            <br />
            <img
              src={machine_imagen}
              className="img-fluid rounded"
              alt="machine"
            />
            <br />
            <br />
            <p className="text-justify">
              Machine learning es una forma de la IA que permite a un sistema
              aprender de los datos en lugar de aprender mediante la
              programación explícita.
            </p>
            <br />
            <br />
            <br />
            <a
              className="text-black"
              href="https://www.ibm.com/co-es/analytics/machine-learning"
            >
              {" "}
              <u> Fuente: www.ibm.com</u>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <br />
        <h3 className="text-center">
          Tipos de formato de las observaciones calificadas
        </h3>
        <br />
        <div className="row">
          <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={alfabeticamente_imagen}
              className="img-fluid rounded"
              alt="alfabeticamente"
            />
          </div>

          <div className="col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h4 className="text-justify">
              Documento ordenado alfabéticamente por el nombre de los docentes y
              sus cursos
            </h4>
          </div>
        </div>
        <br />
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <br />
        <div className="row">
          <div className="col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h4 className="text-justify">
              Documento con los cursos que en promedio fueron mejor calificados
              a peor calificados
            </h4>
          </div>
          <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={ok_imagen}
              className="img-fluid rounded"
              alt="ok_imagen"
            />
          </div>
        </div>
        <br />
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <br />
        <div className="row">
          <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img src={bad_imagen} className="img-fluid rounded" alt="bad" />
          </div>
          <div className="col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h4 className="text-justify">
              Documento con los cursos que en promedio fueron peor calificados a
              mejor calificados
            </h4>
          </div>
        </div>
        <br />
      </div>
    </Fragment>
  );
};
