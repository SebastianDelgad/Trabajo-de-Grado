import React, { Fragment, useEffect, useState } from "react";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { UploadPDF } from "./UploadPDF";
import { PagMain } from "./PagMain";

export const PagFileInvalid = () => {
  const [user, setUser] = useState();

  let history = useHistory();

  function handleClickClassifier() {
    history.push("/classifier");
  }

  function handleClickEvaluaciones() {
    history.push("/evaluaciones");
  }

  function handleClickRegistrarse() {
    history.push("/register");
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user) {
    return (
      <Fragment>
        <NavbarClassifier />
        <div className="container mt-3 bg-light rounded-6">
          <div className="row mt-3">
            <ul className="mt-3 mb-3 nav nav-pills nav-justified">
              <li className="nav-tabs">
                <button
                  className="btn btn-outline-danger btn-block active"
                  onClick={handleClickClassifier}
                >
                  <span> Evaluar un documento </span>
                </button>
              </li>
              <li className="nav-tabs">
                <button
                  className="btn btn-outline-danger btn-block"
                  onClick={handleClickEvaluaciones}
                >
                  <span> Ver evaluaciones </span>
                </button>
              </li>
              <li className="nav-tabs">
                <button
                  className="btn btn-outline-danger btn-block"
                  onClick={handleClickRegistrarse}
                >
                  <span> Registrar usuario </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-3 bg-light rounded-6">
          <div className="row">
            <div className="mt-4 col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <h3>Califique las observaciones de la evaluación docente. </h3>
              <p>
                Asegúrese de que el documento este en formato PDF, una vez
                cargue el documento seleccione un formato para hacer las
                calificaciones.
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-3 bg-light rounded-6">
        <div className="row">
            <div className="col-">
              <div className="alert alert-danger">
                Por favor ingrese un archivo válido
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mt-4 mb-5 col-6 col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h4>Archivo a evaluar</h4>
            </div>
            <div className="col-6 col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <UploadPDF />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-9 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <h4>Tiempo estimado de procesamiento de datos: 1 minuto.</h4>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <PagMain />;
};
