import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export const NavbarClassifier = (props) => {
  let history = useHistory();

  const cerrarSesion = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

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
              props.firebaseUser !== null ? (
              <button className="btn btn-outline-danger" onClick={cerrarSesion}>
                <span> Cerrar sesión </span>
              </button>
              )
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
