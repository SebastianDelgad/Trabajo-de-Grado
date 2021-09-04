import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import logo_imagen from "../Assets/Images/logo-univalle.png";

export const NavbarClassifier = () => {
  let history = useHistory();

  function handleClickCerrarsesion() {
    history.push("/");
  }
  return (
    <Fragment>
      <div className="container mt-2 bg-light">
        <div className="row">
          <div className="col-sm-10">
            <img
              src={logo_imagen}
              width="500"
              height="62.46"
              alt="logoClassifier"
            />
          </div>
          <div className="col-sm-2 mt-3">
            <div className="btn-toolbar">
              <button
                className="btn btn-outline-danger"
                onClick={handleClickCerrarsesion}
              >
                <span> Cerrar sesión </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
