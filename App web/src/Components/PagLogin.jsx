import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Register";
import "../Assets/Styles/icons.css";
import NavbarClassifier from "./NavbarClassifier";

const PagLogin = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/Login" exact>
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
                <Link to="/Classifier">
                  <button className="btn btn-outline-danger">
                    <span> Ingresar </span>
                  </button>
                </Link>
              </div>
              <div className="row mt-3 justify-content-center">
                <Link to="/Register">
                  <button className="btn btn-outline-danger">
                    <span> Registrarse </span>
                  </button>
                </Link>
              </div>
            </div>
          </Route>
          <Route path="/Classifier" exact>
            <NavbarClassifier />
          </Route>
          <Route path="/Register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default PagLogin;
