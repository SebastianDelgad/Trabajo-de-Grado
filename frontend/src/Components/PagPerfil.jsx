import React, { Fragment, useState, useEffect} from "react";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { NavbarClassifier } from "./NavbarClassifier";
import { PagMain } from "./PagMain";

export const PagPerfil = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [User, setUser] = useState(false);

  let history = useHistory();

  function handleClickRegresar() {
    history.push("/evaluaciones");
  }

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

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user.email);
      listUsers();
    });
  }, []);

  if (User) {
    return (
      <Fragment>
        <NavbarClassifier />

        <div className="container mt-3 bg-light rounded-6">
          <div className="row justify-content-center">
            <div className="mt-4 mb-2 col">
              <h3 className="text-center"> Datos del usuario </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
              <form>
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
                    <p className=" bg-white">{name} </p>
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
                    <p className=" bg-white text-responsive">{email}</p>
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
                    <button
                      className="btn btn-outline-danger"
                      onClick={cambiarPass}
                    >
                      Actualizar contraseña
                    </button>
                  </div>
                </div>

                <div className="row mt-4 justify-content-center">
                  <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="mb-4 col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleClickRegresar}
                    >
                      Regresar
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
  return <PagMain />;
};