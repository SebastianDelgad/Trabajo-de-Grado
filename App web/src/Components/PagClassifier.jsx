import React, { Fragment } from "react";
import Upload from "./Upload"

const PagClassifier = () => {
  return (
    <Fragment>
      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="col">
            <h3>Califique las observaciones de la evaluación docente. </h3>
            <p>
              Asegúrese de que el documento este en formato PDF, una vez cargue
              el documento seleccione un formato para hacer las calificaciones
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Archivos a evaluar</h4>
          </div>
          <div className="col">
            <Upload />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <button className="btn btn-outline-danger">
              <span> Alfabéticamente </span>
            </button>
          </div>
          <div className="col">
            <button className="btn btn-outline-danger">
              <span> Mejor promedio de calificaciones </span>
            </button>
          </div>
          <div className="col">
            <button className="btn btn-outline-danger">
              <span> Peor promedio de calificaciones </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PagClassifier;