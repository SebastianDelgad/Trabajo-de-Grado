import React, { Fragment, useEffect, useState } from "react";
import { NavbarLogin } from "./NavbarLogin";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { PagMain } from "./PagMain";

export const PagEvaluaciones = () => {
  
  const [user, setUser] = useState();

  let history = useHistory();

  function handleClickGenerar() {
    history.push("/classifierAlfabetico");
  }
  

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  

 

  if (user) {
    return (
      <Fragment>
        <NavbarLogin />
        <div className="container mt-3 bg-light">
          <div className="row">
            <div className="col">
              <h3>Resultado de la evaluación docente. </h3>
              <p>
                Selececcione el documento que desea visualizar
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-3 bg-light">
          
          <div className="row mt-3">
            <div className="col"></div>
            <div className="col">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickGenerar}
              >
                <span> Ver resultado </span>
              </button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <PagMain />;
};