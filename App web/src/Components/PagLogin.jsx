import React, { Fragment } from "react";
import "../Assets/Styles/icons.css";
import { useHistory } from "react-router-dom";
import { NavbarLogin } from "./NavbarLogin";

export const PagLogin = () => {
  let history = useHistory();

  function handleClickIngresar() {
    history.push("/classifier");
  }

  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-3 bg-light">
        <div className="row justify-content-center">
          <h4> Acceder al sistema </h4>
        </div>
        <div className="row mt-3 justify-content-center">
          <h4> Usuario </h4>
        </div>
        <div className="row justify-content-center">
          <span className="material-icons md-36">&#xe853;</span>
          <form>
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese el usuario"
            />
          </form>
        </div>
        <div className="row mt-3 justify-content-center">
          <h4> Constraseña </h4>
        </div>
        <div className="row justify-content-center">
          <span className="material-icons md-36">&#xe897;</span>
          <form>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese la contraseña"
            />
          </form>
        </div>
        <div className="row mt-3 justify-content-center">
          <button
            className="btn btn-outline-danger"
            onClick={handleClickIngresar}
          >
            <span> Ingresar </span>
          </button>
        </div>
        <div className="row mt-3 justify-content-center">
          <button className="btn btn-outline-danger">
            <span> Registrarse </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
