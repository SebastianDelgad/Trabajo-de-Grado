import React, { useEffect, useState, Fragment } from "react";
import img_muy_negativa from "../Assets/Images/muy_negativa.png";
import img_negativa from "../Assets/Images/negativa.png";
import img_neutral from "../Assets/Images/neutral.png";
import img_positivo from "../Assets/Images/positivo.png";
import img_muy_positivo from "../Assets/Images/muy_positivo.png";
import { NavbarCalifications } from "./NavbarCalifications";

export const ClassifierAlfabéticamente = () => {
  const [observaciones, setObservacion] = useState([]);

  useEffect(() => {
    //console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://127.0.0.1:5000/alfabeticamente");
    const info = await data.json();
    info.data.map((element) => {});
    setObservacion(info.data);
  };

  return (
    <Fragment>
      <NavbarCalifications />
      <div className="container mt-3 bg-light">
        <h2 className="text-center mt-2">
          Evaluaciones ordenadas alfabeticamente por el nombre del profesor
        </h2>
        <h5 className="mt-2"> Clasificación de las observaciones: </h5>
        <div className="row justify-content-md-center mt-3">
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <img
              src={img_muy_negativa}
              className="img-fluid"
              alt="muy_negativo"
            />
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <img src={img_negativa} className="img-fluid" alt="negativo" />
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <img src={img_neutral} className="img-fluid" alt="neutral" />
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <img src={img_positivo} className="img-fluid" alt="positivo" />
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <img
              src={img_muy_positivo}
              className="img-fluid"
              alt="muy_positivo"
            />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <p> Muy negativa</p>
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <p> Negativa</p>
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <p> Neutral</p>
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <p> Positivo </p>
          </div>
          <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <p> Muy postivo</p>
          </div>
        </div>
      </div>

      {observaciones.map((item) => (
        <div className="container mt-4 bg-light">
          <li key={item.id}>
            <div className="row">
              <div className="col-1 col-sm-1 col-xs-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                <span className="material-icons md-48">&#xe8a6;</span>
              </div>
              <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <h4> Nombre: </h4> {item.docente}
              </div>
              <div className="col-1 col-sm-1 col-xs-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                <span className="material-icons md-48">&#xea19;</span>
              </div>
              <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <h4> Asignatura: </h4> {item.asignatura}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h4> Promedio: </h4>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                {item.promedio_calificación === "Muy negativo" && (
                  <img
                    src={img_muy_negativa}
                    className="img-fluid"
                    alt="muy_negativo"
                  />
                )}

                {item.promedio_calificación === "Neutral" && (
                  <img src={img_neutral} className="img-fluid" alt="neutral" />
                )}

                {item.promedio_calificación === "Positivo" && (
                  <img
                    src={img_positivo}
                    className="img-fluid"
                    alt="positivo"
                  />
                )}

                {item.promedio_calificación === "Muy positivo" && (
                  <img
                    src={img_muy_positivo}
                    className="img-fluid"
                    alt="muy_positivo"
                  />
                )}

                {item.promedio_calificación === "Negativo" && (
                  <img
                    src={img_negativa}
                    className="img-fluid"
                    alt="negativo"
                  />
                )}
              </div>
            </div>

            <div className="row mt-3">
              <h4> &nbsp; Calificación observaciones </h4>
            </div>
            <div className="row justify-content-md-center mt-2">
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img
                  src={img_muy_negativa}
                  className="img-fluid"
                  alt="muy_negativo"
                />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img src={img_negativa} className="img-fluid" alt="negativo" />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img src={img_neutral} className="img-fluid" alt="neutral" />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img src={img_positivo} className="img-fluid" alt="positivo" />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img
                  src={img_muy_positivo}
                  className="img-fluid"
                  alt="muy_positivo"
                />
              </div>
            </div>
            <div className="row justify-content-md-center mt-1">
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h5> &nbsp;&nbsp;&nbsp; {item.total_muy_neg} </h5>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h5> &nbsp;&nbsp;&nbsp; {item.total_neg} </h5>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h5> &nbsp;&nbsp;&nbsp; {item.total_neu} </h5>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h5> &nbsp;&nbsp;&nbsp; {item.total_pos} </h5>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h5> &nbsp;&nbsp;&nbsp; {item.total_muy_pos} </h5>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <h4> Total observaciones: </h4>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <h4> {item.total_observaciones} </h4>
              </div>
            </div>
          </li>
        </div>
      ))}
    </Fragment>
  );
};
