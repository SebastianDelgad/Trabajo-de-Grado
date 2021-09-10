import React, { Fragment, useEffect, useState } from "react";
import { Upload } from "./Upload";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export const PagClassifier = () => {
  const [user, setUser] = useState();

  let history = useHistory();

  function handleClickGenerar() {
    history.push("/classifierAlfabetico");
  }

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
          <div className="row mt-3">
            <div className="col"></div>
            <div className="col">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickGenerar}
              >
                <span> Generar </span>
              </button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <div> Cargando... </div>;
};
