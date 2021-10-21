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
        <div className="row"></div>
        <h2 className="mt-4 mb-4 text-center text-responsive">
          Califica las observaciones de los docentes en el periodo académico{" "}
        </h2>
        <div className="row justify-content-md-center">
          <div className="col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <p className="justify text-responsive h5">
              Esta web proporciona un documento con las observaciones docente
              calificadas, donde se puede elegir ordenar el documento en 3
              formatos
            </p>
          </div>
          <div className="mb-4 col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={graficos_imagen}
              className="img-fluid rounded"
              alt="grafico"
            />
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <div className="row justify-content-md-center mt-3">
          <div className="col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h3 className="mt-4 mb-4 text-center">
              Tecnologías usadas en el desarrollo de esta web
            </h3>
          </div>
        </div>
        <div className="row justify-content-md-center mt-3">
          <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <h4 className="mt-4 text-center text-responsive">
              Minería de texto
            </h4>
            <div className="mt-4 text-center">
              <img
                src={miner_imagen}
                className="img-fluid rounded"
                alt="miner"
              />
            </div>
            <p className="mt-4 justify text-justify">
              La minería de textos es el proceso de analizar texto con el objeto
              de capturar los temas, conceptos clave, sin necesidad de conocer
              las palabras o los términos exactos que los autores han utilizado
              para expresar dichos conceptos.
            </p>
            <div className="mt-5 mb-3">
              <a
                className="text-black"
                href="https://www.ibm.com/docs/es/spss-modeler/18.1.1?topic=analytics-about-text-mining"
              >
                {" "}
                <u> Fuente: www.ibm.com</u>{" "}
              </a>
            </div>
          </div>
          <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <h4 className="mt-4 text-center text-responsive">
              Análisis de sentimiento
            </h4>
            <div className="mt-4 text-center">
              <img
                src={sentiment_imagen}
                className="img-fluid rounded"
                alt="sentiment"
              />
            </div>
            <p className="mt-4 justify text-justify">
              El análisis de texto, un tipo de análisis cualitativo, es la
              extracción de información útil del texto de manera que las ideas o
              los conceptos clave que contiene el texto pueden agruparse en una
              serie de categorías apropiadas.
            </p>
            <div className="mt-5 ">
              <a
                className="text-black"
                href="https://www.ibm.com/docs/es/spss-modeler/18.1.1?topic=analytics-about-text-mining"
              >
                {" "}
                <u> Fuente: www.ibm.com</u>{" "}
              </a>
            </div>
          </div>
          <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <h4 className="mt-4 text-center">Machine learning</h4>
            <div className="mt-4 text-center">
              <img
                src={machine_imagen}
                className="img-fluid rounded"
                alt="machine"
              />
            </div>
            <p className="mt-4 mb-5 justify text-justify">
              Machine learning es una forma de la IA que permite a un sistema
              aprender de los datos en lugar de aprender mediante la
              programación explícita.
            </p>
            <div className="mt-5 ">
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
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <div className="row">
          <div className="mt-4 mb-4">
            <h3 className="text-center">
              Tipos de formato de las observaciones calificadas
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="mt-4 mb-4 col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={alfabeticamente_imagen}
              className="img-fluid rounded"
              alt="alfabeticamente"
            />
          </div>

          <div className="mt-4 mb-4 col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h4 className="text-justify">
              Documento ordenado alfabéticamente por el nombre de los docentes y
              sus cursos
            </h4>
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <div className="row">
          <div className="mt-4 mb-4 col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h4 className="text-justify">
              Documento con los cursos que en promedio fueron mejor calificados
              a peor calificados
            </h4>
          </div>
          <div className="mt-4 mb-4 col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img
              src={ok_imagen}
              className="img-fluid rounded"
              alt="ok_imagen"
            />
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <div className="row ">
          <div className="mt-4 mb-4 col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <img src={bad_imagen} className="img-fluid rounded" alt="bad" />
          </div>
          <div className="mt-4 mb-4 col-7 col-sm-7 col-xs-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <h4 className="text-justify">
              Documento con los cursos que en promedio fueron peor calificados a
              mejor calificados
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
