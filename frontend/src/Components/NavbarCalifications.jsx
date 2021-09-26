import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { useHistory } from "react-router-dom";

export const NavbarCalifications = () => {
  let history = useHistory();

  function handleClickRegresar() {
    history.push("/classifier");
  }

  function handleClickAlfabeticamente() {
    history.push("/classifierAlfabetico");
  }

  function handleClickMejorProm() {
    history.push("/classifierMejorProm");
  }

  function handleClickPeorProm() {
    history.push("/classifierPeorProm");
  }
  
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
          <div className="row justify-content-md-center">
            <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickAlfabeticamente}
              >
                <span> Alfabéticamente </span>
              </button>
            </div>
            <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickMejorProm}
              >
                <span> Mejor promedio </span>
              </button>
            </div>
            <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickPeorProm}
              >
                <span> Peor promedio </span>
              </button>
            </div>
          </div>
        </div>
    </Fragment>
  );
};
