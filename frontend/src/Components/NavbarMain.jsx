import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { auth } from "../firebase";

export const NavbarMain = () => {
  let history = useHistory();

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  function handleClickIniciarsesion() {
    firebaseUser ? history.push("/evaluaciones") : history.push("/login");
  }

  return (
    <Fragment>
      <div className="container mt-3 bg-light rounded-6">
        <br />
        <div className="row">
          <div className="col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <img src={logo_imagen} alt="logoLogin" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <div className="btn-toolbar">
              <button
                className="btn btn-outline-danger"
                onClick={handleClickIniciarsesion}
              >
                {firebaseUser !== null ? "Evaluaciones" : "Iniciar Sesión"}
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </Fragment>
  );
};
