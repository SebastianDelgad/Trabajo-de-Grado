import React, { Fragment } from "react";
import "../Assets/Styles/icons.css";
import { useHistory } from "react-router-dom";
import { NavbarLogin } from "./NavbarLogin";
import { auth } from "../firebase";

export const PagLogin = (props) => {
  let history = useHistory();

  function handleClickRegistrarse() {
    history.push("/register");
  }

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const login = React.useCallback(async () => {
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

  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-3 bg-light">
        <div className="row justify-content-center">
          <h4> Acceder al sistema </h4>
        </div>
        <div className="row mt-3 justify-content-center">
          {error ? <div className="alert alert-danger">{error}</div> : null}
          <h4> Usuario </h4>
        </div>
        <div className="row justify-content-center">
          <span className="material-icons md-36">&#xe853;</span>
          <form>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese el email..."
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPass(e.target.value)}
            />
          </form>
        </div>
        <div className="row mt-3 justify-content-center">
          <button className="btn btn-outline-danger" onClick={login}>
            <span> Ingresar </span>
          </button>
        </div>
        <div className="row mt-3 justify-content-center">
          <button
            className="btn btn-outline-danger"
            onClick={handleClickRegistrarse}
          >
            <span> Registrarse </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
