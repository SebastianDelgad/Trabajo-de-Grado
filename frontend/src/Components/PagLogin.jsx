import React, { Fragment, useState, useCallback, useEffect } from "react";
import "../Assets/Styles/icons.css";
import { useHistory } from "react-router-dom";
import { NavbarLogin } from "./NavbarLogin";
import { auth } from "../firebase";
import { PagClassifier } from "./PagClassifier";

export const PagLogin = (props) => {
  let history = useHistory();

  function handleClickRegistrarse() {
    history.push("/register");
  }

  function handleClickOlvidoContraseña() {
    history.push("/changepass");
  }

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [User, setUser] = useState(false);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log("Datos vacíos email!");
      setError("Datos vacíos email!");
      return;
    }
    if (!pass.trim()) {
      console.log("Datos vacíos pass!");
      setError("Datos vacíos pass!");
      return;
    }
    console.log("correcto...");
    setError(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const login = useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, pass);
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/classifier");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Usuario o contraseña incorrecta");
      }
      if (error.code === "auth/wrong-password") {
        setError("Usuario o contraseña incorrecta");
      }
      console.log(error.code);
      console.log(error.message);
    }
  }, [email, pass, props.history]);

  if (!User) {
    return (
      <Fragment>
        <NavbarLogin />
        <div className="container mt-3 bg-light">
          <h3 className="text-center"> Acceder al sistema </h3>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
              <form onSubmit={procesarDatos}>
                {error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : null}
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h4> Correo </h4>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <span className="material-icons md-36">&#xe853;</span>
                  </div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Ingrese el email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h4>Contraseña </h4>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <span className="material-icons md-36">&#xe897;</span>
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Ingrese la contraseña"
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <button
                      className="btn btn-outline-danger btn-block"
                      onClick={login}
                    >
                      <span> Ingresar </span>
                    </button>
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <button
                      className="btn btn-outline-danger btn-block"
                      onClick={handleClickRegistrarse}
                    >
                      <span> Registrarse </span>
                    </button>
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h6
                      className="outline-danger"
                      onClick={handleClickOlvidoContraseña}
                    >
                      <span className="text-danger">
                        <u> ¿Olvidó su contraseña?</u>{" "}
                      </span>
                    </h6>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <PagClassifier />;
};
