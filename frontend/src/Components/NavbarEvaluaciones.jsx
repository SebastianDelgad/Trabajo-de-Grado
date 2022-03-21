import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/icon-univalle.png";
import { useHistory } from "react-router-dom";

export const NavbarEvaluaciones = () => {
  let history = useHistory();

  function handleClickRegresar() {
    history.push("/evaluaciones");
  }

  function handleClickMain() {
    history.push("/");
  }

  return (
    <Fragment>
      <div className="container mt-3 bg-light rounded-6">
        <div className="row">
        <div className="mt-3 mb-4 col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
          <div className="row">
          <div className="col-3 col-sm-3 col-xs-2 col-md-2 col-lg-2 col-xl-1 col-xxl-1">
            <img src={logo_imagen} alt="logoLogin" onClick={handleClickMain} />
            </div>
            <div className="mt-3 col-5">
              <strong className="text-danger" onClick={handleClickMain}>SISCOD</strong>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4 col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <div className="btn-toolbar">
              <u className="nav-link" onClick={handleClickRegresar}>
                <div className="row">
                  <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <span className="material-icons md-36">&#xe5c4;</span>
                  </div>
                  <div className="col-9 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <span> Regresar </span>
                  </div>
                </div>
              </u>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
