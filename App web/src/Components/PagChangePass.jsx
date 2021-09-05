import React, { Fragment, useState } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export const PagChangePass = () => {
  let history = useHistory();

  function handleClickRegresar() {
    history.push("/login");
  }

  const [email, setEmail] = useState("");

  const forgotPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Por favor verifica el correo...");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

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
        <div className="row mt-3 justify-content-center">
          <h4> Por favor ingrese el correo para recuperar la contaseña </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-7">
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese el correo"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <button
            className="btn btn-outline-danger"
            onClick={() => forgotPassword(email)}
          >
            <span> Enviar </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
