import React, { Fragment, useEffect, useState } from "react";
import { Upload } from "./Upload";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth } from "../firebase";

export const PagClassifier = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  if (user) {
    return (
      <Fragment>
        <NavbarClassifier />
        <div className="container mt-3 bg-light">
          <div className="row">
            <div className="col">
              <h3>Califique las observaciones de la evaluación docente. </h3>
              <p>
                Asegúrese de que el documento este en formato PDF, una vez
                cargue el documento seleccione un formato para hacer las
                calificaciones
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-3 bg-light">
          <div className="row">
            <div className="col">
              <h4>Archivo a evaluar</h4>
            </div>
            <div className="col">
              <Upload />
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <button className="btn btn-outline-danger btn-block">
                <span> Alfabéticamente </span>
              </button>
            </div>
            <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <button className="btn btn-outline-danger btn-block">
                <span> Mejor promedio de calificaciones </span>
              </button>
            </div>
            <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <button className="btn btn-outline-danger btn-block">
                <span> Peor promedio de calificaciones </span>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <div> Cargando... </div>;
};
