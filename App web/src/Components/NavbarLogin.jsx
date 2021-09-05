import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { useHistory } from "react-router-dom";

export const NavbarLogin = () => {
  let history = useHistory();

  function handleClickRegresar() {
    history.push("/");
  }

  return (
    <Fragment>
      <div className="container mt-2 bg-light">
        <div className="row">
          <div className="col-sm-10">
            <img src={logo_imagen} alt="logoLogin" />
          </div>
          <div className="col-sm-2 mt-3">
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
