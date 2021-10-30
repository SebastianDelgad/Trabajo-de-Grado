import React, { Fragment, useState, useEffect } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";

export const NavbarClassifier = (props) => {
  const [name, setName] = useState();
  let history = useHistory();

  const cerrarSesion = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  function handleClickPerfil() {
    history.push("/perfil");
  }

  const listUsers = async () => {
    var p = auth.currentUser;
    db.collectionGroup("usuarios").onSnapshot((querySnapshot) => {
      const perfiles = [];
      querySnapshot.forEach((doc) => {
        perfiles.push({ ...doc.data() });
      });
      for (let i = 0; i < perfiles.length; i++) {
        if (p.email === perfiles[i].email) {
          setName(perfiles[i].displayName);
        }
      }
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      listUsers();
    });
  }, []);

  return (
    <Fragment>
      <div className="container mt-3 bg-light rounded-6">
        <div className="row">
          <div className="mt-3 mb-4 col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <img src={logo_imagen} alt="logoLogin" className="img-fluid" />
          </div>
          <div className="mt-4 mb-4 col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-outline-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="inside"
                aria-expanded="false"
              >
                {name}
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <u className="dropdown-item" onClick={handleClickPerfil}>
                    Configuraciones
                  </u>
                </li>
                <li>
                  <u className="dropdown-item" onClick={cerrarSesion}>
                    Cerrar sesión
                  </u>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
