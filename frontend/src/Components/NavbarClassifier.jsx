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

  const cambiarPass = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        auth.sendPasswordResetEmail(user.email).then(function () {
          alert(
            "Se ha enviado un email para cambiar la contraseña, por favor verifica tu correo..."
          );
        });
      }
    });
  };

  return (
    <Fragment>
      <div className="container mt-3 bg-light rounded-6">
        <div className="row">
          <div className="mt-3 mb-4 col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <img src={logo_imagen} alt="logoLogin" className="img-fluid" />
          </div>
          <div className="mt-4 mb-4 col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-outline-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a class="dropdown-item" href="#" onClick={cambiarPass}>
                    Cambiar contraseña
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" onClick={cerrarSesion}>
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
