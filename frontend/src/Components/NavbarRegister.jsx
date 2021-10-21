import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { useHistory } from "react-router-dom";

export const NavbarRegister = () => {
  let history = useHistory();

  function handleClickRegresar() {
    history.push("/classifier");
  }
  return (
    <Fragment>
      <div className="container mt-3 bg-light">
        <div className="row">
          <div className="mt-3 mb-4 col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <img src={logo_imagen} alt="logoLogin" className="img-fluid" />
          </div>
          <div className="mt-4 mb-4 col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
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
    </Fragment>
  );
};
