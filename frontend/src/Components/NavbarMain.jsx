import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo_imagen from "../Assets/Images/icon-univalle.png";
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
        <div className="row">
          <div className="mt-3 mb-4 col-8 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
          <div className="row">
          <div className="col-3 col-sm-3 col-xs-2 col-md-2 col-lg-2 col-xl-1 col-xxl-1">
            <img src={logo_imagen} alt="logoLogin"/>
            </div>
            <div className="mt-3 col-5">
              <strong className="text-danger ">SISCOD</strong>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4 col-4 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <button
              className="btn btn-outline-danger"
              onClick={handleClickIniciarsesion}
            >
              {firebaseUser !== null ? "Evaluaciones" : "Iniciar sesión"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
