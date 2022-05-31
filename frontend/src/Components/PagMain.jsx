import React, { Fragment } from "react";
import { NavbarMain } from "./NavbarMain";
import miner_imagen from "../Assets/Images/clipart4755686.png";
import machine_imagen from "../Assets/Images/Chip iconos vectoriales gratuitos diseñados por Freepik.png";
import sentiment_imagen from "../Assets/Images/ambalina-sentiment-analysis-header.png";
import { Helmet } from "react-helmet";

export const PagMain = () => {
  return (
    <Fragment>
      <NavbarMain />
      <Helmet>
        <title>SISCOD</title>
      </Helmet>
      <div className="container mt-3 mb-4 bg-light rounded-6">
        <div className="row"></div>
        <h2 className="mt-4 mb-4 text-center text-responsive text-danger">
          Sistema de clasificación de las observaciones docentes{" "}
        </h2>
        <div className="row justify-content-md-center">
          <div className="col">
            <p className="justify text-responsive h5 mt-3">
              Esta web proporciona un documento con las observaciones docente
              del periodo académico clasificadas, donde se puede ordenar el
              documento en 4 formatos
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <div className="card-body">
              <div className="mt-2 mb-2">
                <span className="material-icons md-100">
                  &#xe053;
                </span>
              </div>
              <p className="justify text-responsive h5">
                Documento ordenado alfabéticamente por el nombre de los docentes
                y sus cursos
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <div className="mt-2 mb-2">
                <span className="material-icons md-100   icon-home">
                  &#xe815;
                </span>
              </div>
              <p className="justify text-responsive h5">
                Documento con los cursos que en promedio obtuvieron una
                clasificacion más alta a la más baja.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <div className="mt-2 mb-2">
                <span className="material-icons md-100  justify-content ">
                  &#xe811;
                </span>
              </div>
              <p className="justify text-responsive h5">
                Documento con los cursos que en promedio obtuvieron una
                clasificacion más baja a la más alta
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <div className="mt-2 mb-2">
                <span className="material-icons md-100  justify-content ">
                  &#xe8b6;
                </span>
              </div>
              <p className="justify text-responsive h5">
                Documento con los cursos de un docente en un periodo académico u
                ordenado por curso por ejemplo, todas las observaciones de
                calculo 1
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3 bg-light rounded-6">
        <div className="row justify-content-md-center mt-3">
          <div className="col">
            <h2 className="mt-4 mb-4 text-center text-danger">
              Tecnologías usadas en el desarrollo de esta web
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card-body">
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
                La minería de textos es el proceso de analizar texto con el
                objeto de capturar los temas, conceptos clave, sin necesidad de
                conocer las palabras o los términos exactos que los autores han
                utilizado para expresar dichos conceptos.
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
          </div>
          <div className="col">
            <div className="card-body">
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
                extracción de información útil del texto de manera que las ideas
                o los conceptos clave que contiene el texto pueden agruparse en
                una serie de categorías apropiadas.
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
          </div>

          <div className="col">
            <div className="card-body">
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
      </div>

      {/* <div className="container mt-3 bg-light rounded-6">
        <div className="row">
          <div className="mt-4 mb-4">
            <h3 className="text-center">
              Tipos de formato de las observaciones clasificadas
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
      </div> */}

      <div className="container mt-3 mb-4 bg-light rounded-6">
        <div className="col  mb-3">
          <br />
          <p className=" text-center text-responsive">
            Trabajo de grado realiazo por: Sebastián Delgado Alegrías
          </p>
          <p className=" text-center text-responsive"> Código: 1667482</p>
          <p className=" text-center text-responsive">
            Ingeniería de sistemas{" "}
          </p>
          <p className=" text-center text-responsive">
            Tuluá - Valle del Cauca
          </p>
          <p className=" text-center text-responsive mb-3">Año 2022</p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};
