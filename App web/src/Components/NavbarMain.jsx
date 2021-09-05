import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo_imagen from "../Assets/Images/logo-univalle.png";
import { auth } from "../firebase";

export const NavbarMain = () => {
  let history = useHistory();

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  function handleClickIniciarsesion() {
    firebaseUser ? history.push("/classifier") : history.push("/login");
  }

  return (
    <Fragment>
      <div className="container mt-2 bg-light">
        <div className="row">
          <div className="col-sm-10">
            <img src={logo_imagen} alt="logo" />
          </div>
          <div className="col-sm-2 mt-3">
            <div className="btn-toolbar">
              <button
                className="btn btn-outline-danger"
                onClick={handleClickIniciarsesion}
              >
                {firebaseUser !== null ? "Clasificador" : "Iniciar Sesión"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
