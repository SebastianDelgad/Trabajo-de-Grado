import React, { Fragment, useEffect, useState } from "react";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { UploadPDF } from "./UploadPDF";
import { PagMain } from "./PagMain";

export const PagClassifier = () => {
  const [user, setUser] = useState();
  const [admin, setAdmin] = useState();

  let history = useHistory();

  function handleClickClassifier() {
    history.push("/classifier");
  }

  function handleClickEvaluaciones() {
    history.push("/evaluaciones");
  }

  function handleClickRegistrarse() {
    history.push("/register");
  }

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
          if (p.email === perfiles[i].email) {
            setAdmin(true);
          }
        }
      });
  };

  useEffect(() => {
    const ac = new AbortController();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        listUsersAdmins();
      } else {
        setUser(null);
      }
    });
    return () => ac.abort();
  }, []);

  if (admin && user) {
    return (
      <Fragment>
        <NavbarClassifier />
        <div className="container mt-3 bg-light rounded-6">
          <div className="row mt-3">
            <ul className="mt-3 mb-3 nav nav-pills ">
              <li className="nav-tabs">
                <u
                  className="nav-link-active"
                  onClick={handleClickClassifier}
                ><div className="row">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <span className="material-icons md-36">&#xe873;</span>
                    </div>
                    <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <span > Evaluar un documento </span>
                  </div>
                  </div>
                </u>
              </li>
              <li className="nav-tabs">
                <u
                  className="nav-link"
                  onClick={handleClickEvaluaciones}
                ><div className="row">
                <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                  <span className="material-icons md-36">&#xe8dd;</span>
                  </div>
                    <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <span> Ver evaluaciones </span>
                  </div>
                  </div>
                </u>
              </li>
              <li className="nav-tabs">
                <u
                  className="nav-link"
                  onClick={handleClickRegistrarse}
                ><div className="row">
                <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                 <span className="material-icons md-36">&#xf02e;</span> 
                 </div>
                    <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                  <span> Registrar usuario </span>
                  </div>
                  </div>
                </u>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-3 bg-light rounded-6">
          <div className="row">
            <div className="mt-4 col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <h3>Califique las observaciones de la evaluación docente. </h3>
              <p>
                Asegúrese de que el documento este en formato PDF, una vez
                cargue el documento seleccione un formato para hacer las
                calificaciones.
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-3 bg-light rounded-6">
          <div className="row">
            <div className="mt-4 mb-5 col-6 col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h4>Archivo a evaluar</h4>
            </div>
            <div className="col-6 col-sm-6 col-xs-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <UploadPDF />
            </div>
          </div>
          <div className="row mt-5">
            <div className="mb-3 col-9 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <h4>Tiempo estimado de procesamiento de datos: 1 minuto.</h4>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <PagMain />;
};
