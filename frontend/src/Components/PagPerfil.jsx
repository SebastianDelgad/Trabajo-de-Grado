import React, { Fragment, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { NavbarClassifier } from "./NavbarClassifier";
import { PagMain } from "./PagMain";
import { Helmet } from "react-helmet";

export const PagPerfil = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [User, setUser] = useState(false);
  const [uid, setUid] = useState("");

  let history = useHistory();

  const [success, setSuccess] = useState(null);

  function handleClickRegresar() {
    history.push("/evaluaciones");
  }

  const cambiarPass = () => {
    auth.sendPasswordResetEmail(email);

    setSuccess(
      "Se ha enviado un email para la recuperación por favor verifica el correo..."
    );
  };

  const listUsers = async () => {
    var p = auth.currentUser;
    db.collectionGroup("usuarios").onSnapshot((querySnapshot) => {
      const perfiles = [];
      querySnapshot.forEach((doc) => {
        perfiles.push({ ...doc.data() });
      });
      for (let i = 0; i < perfiles.length; i++) {
        if (p.email === perfiles[i].email) {
          setEmail(perfiles[i].email);
          setName(perfiles[i].displayName);
        }
      }
    });
  };

  const actualizarDatos = async () => {
    db.collection("usuarios").doc(uid).update({
      displayName: name,
    });
    setSuccess("Se ha actualizado el nombre del usuario");
  };

  useEffect(() => {
    const ac = new AbortController();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        setUid(user.uid);
        listUsers();
      } else {
        setUser(null);
      }
    });
    return () => ac.abort();
  }, []);

  if (User) {
    return (
      <Fragment>
        <NavbarClassifier />
        <Helmet>
          <title>Perfil - SISCOD</title>
        </Helmet>
        <div className="container mt-3 bg-light rounded-6">
          <div className="row justify-content-center">
            <div className="mt-4 mb-2 col">
              <h3 className="text-center"> Datos del usuario </h3>
            </div>
          </div>
          <div className="row mt-2 justify-content-center">
            {success ? (
              <div className="alert alert-success col-7">{success}</div>
            ) : null}
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
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
                    value={name}
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
                <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <p className="text-responsive">{email}</p>
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
                <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <span className="text-danger" onClick={cambiarPass}>
                    <u> Actualizar contraseña vía email </u>{" "}
                  </span>
                </div>
              </div>
              <div className="row mt-4 mb-3 justify-content-center">
                <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <span className="material-icons md-36">&#xe923;</span>
                </div>

                <div className=" col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <span className="text-danger" onClick={actualizarDatos}>
                    <u> Actualizar datos </u>{" "}
                  </span>
                </div>
              </div>

              <div className="row mt-4 mb-3 justify-content-center">
                <div className=" col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <span className="material-icons md-36">&#xe5c4;</span>
                </div>
                <div className=" col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <span className="text-danger" onClick={handleClickRegresar}>
                    <u> Regresar </u>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <PagMain />;
};