import React, { Fragment, useState, useEffect, useCallback } from "react";
import { db, auth } from "../firebase";
import { NavbarRegister } from "./NavbarRegister";
import "../Assets/Styles/Styles.css";
import { PagClassifier } from "./PagClassifier";

export const PagRegister = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [User, setUser] = useState(false);
  const [admin, setAdmin] = useState("");
  const [uadmin, setUadmin] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        listUsersAdmins();
      } else {
        setUser(null);
      }
    });
  }, []);

  const listUsersAdmins = async () => {
    var p = auth.currentUser;
    db.collectionGroup("usuarios")
      .where("IsAdmin", "==", "admin")
      .onSnapshot((querySnapshot) => {
        const perfiles = [];
        querySnapshot.forEach((doc) => {
          perfiles.push({ ...doc.data() });
        });
        for (let i = 0; i < perfiles.length; i++) {
          //console.log(perfiles[i].email);
          //console.log(user)
          if (p.email === perfiles[i].email) {
            setUadmin(true);
          }
        }
      });
  };

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

  const registrar = useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(res.user);
      await db.collection("usuarios").doc(res.user.uid).set({
        fechaCreacion: Date.now(),
        displayName: name,
        photoURL: res.user.photoURL,
        email: res.user.email,
        uid: res.user.uid,
        IsAdmin: admin,
      });
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/evaluaciones");
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
  }, [email, pass, admin, props.history]);

  if (uadmin && User) {
    return (
      <Fragment>
        <NavbarRegister />
        <div className="container mt-3 bg-light rounded-6">
          <div className="row justify-content-center">
            <div className="mt-4 mb-2 col">
              <h3 className="text-center"> Registro de usuarios </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
              <form onSubmit={procesarDatos}>
                {error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : null}
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h4> Nombre </h4>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <span className="material-icons md-36">&#xea67;</span>
                  </div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Ingrese el nombre y apellido"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h4>Correo </h4>
                  </div>
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
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h4>Contraseña </h4>
                  </div>
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
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <h4>¿Usuario administrador?</h4>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-2">
                    <span className="material-icons md-36">&#xef3d;</span>
                  </div>
                  <div className="col">
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        value="admin"
                        onChange={(e) => setAdmin(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Selecciona si el usuario será admin
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="mb-4 col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <button
                      className="btn btn-outline-danger btn-block"
                      type="submit"
                      onClick={registrar}
                    >
                      Registrar
                    </button>
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
