import React, { Fragment } from "react";
import { db, auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { NavbarRegister } from "./NavbarRegister";
import "../Assets/Styles/icons.css";

export const PagRegister = (props) => {
  let history = useHistory();

  function handleClickYaTieneCuenta() {
    history.push("/login");
  }

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

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
    if (pass.length < 6) {
      console.log("6 o más carácteres");
      setError("6 o más carácteres en pass");
      return;
    }
    console.log("correcto...");
    setError(null);
  };

  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(res.user);
      await db.collection("usuarios").doc(res.user.uid).set({
        fechaCreacion: Date.now(),
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        email: res.user.email,
        uid: res.user.uid,
      });
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/classifier");
    } catch (error) {
      console.log(error);
      // setError(error.message)
      if (error.code === "auth/email-already-in-use") {
        setError("Usuario ya registrado...");
        return;
      }
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
        return;
      }
    }
  }, [email, pass, props.history]);

  return (
    <Fragment>
      <NavbarRegister />
      <div className="container mt-3 bg-light">
        <h3 className="text-center">Registro de usuarios</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={procesarDatos}>
              {error ? <div className="alert alert-danger">{error}</div> : null}
              <div className="row mt-3 justify-content-center">
                <h4> Usuario </h4>
              </div>
              <div className="row justify-content-center">
                <div className="col-2">
                  <span className="material-icons md-36">&#xe853;</span>
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Ingrese Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <h4> Constraseña </h4>
              </div>
              <div className="row justify-content-center">
                <div className="col-2">
                  <span className="material-icons md-36">&#xe897;</span>
                </div>
                <div className="col">
                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Ingrese Contraseña"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={registrar}
                >
                  Registrarse
                </button>
              </div>
              <div className="row mt-3 justify-content-center">
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={handleClickYaTieneCuenta}
                >
                  ¿Ya tienes cuenta?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
