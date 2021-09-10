import React, { useEffect, useState, Fragment } from "react";
import img_muy_negativa from "../Assets/Images/muy_negativa.png";
import img_negativa from "../Assets/Images/negativa.png";
import img_neutral from "../Assets/Images/neutral.png";
import img_positivo from "../Assets/Images/positivo.png";
import img_muy_positivo from "../Assets/Images/muy_positivo.png";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { useHistory } from "react-router-dom";

export const ClassifierAlfabéticamente = () => {
  let history = useHistory();

  function handleClickRegresar() {
    history.push("/classifier");
  }
  const [equipos, setEquipo] = useState([]);

  useEffect(() => {
    //console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://127.0.0.1:5000/get");
    const info = await data.json();
    info.data.map((element) => {
    });
    setEquipo(info.data);
  };

  return (
    <Fragment>
      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <img src={logo_imagen} alt="logoLogin" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <div className="btn-toolbar">
              <button
                className="btn btn-outline-danger"
                onClick={handleClickRegresar}
              >
                <span> Regresar </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 bg-light">
        <h2 className="text-center mt-2">
          Evaluaciones ordenadas por el mejor promedio de calificacion de las
          observaciones
        </h2>
        <h5 className="mt-2"> Clasificación de las observaciones: </h5>
        <div className="row mt-3">
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
        <div className="row">
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

      {equipos.map((item) => (
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
                    src={img_muy_negativa}
                    className="img-fluid"
                    alt="negativo"
                  />
                )}
              </div>
            </div>

            <div className="row mt-3">
              <h4> &nbsp; Calificación observaciones </h4>
            </div>
            <div className="row mt-2">
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
            <div className="row mt-1">
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
              <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
