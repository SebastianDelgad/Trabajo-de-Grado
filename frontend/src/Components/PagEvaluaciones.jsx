import React, { Fragment, useEffect, useState } from "react";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth, storage } from "../firebase";
import { useHistory } from "react-router-dom";
import { PagMain } from "./PagMain";

export const PagEvaluaciones = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState([]);

  let history = useHistory();

  function handleClickGenerar() {
    history.push("/classifierAlfabetico");
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
      listItem();
    });
  }, []);

  // List All Files
  const listItem = () => {
    storage
      .ref()
      .child("")
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          setData((arr) => [...arr, item.name]);
          console.log(item.fullPath);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  if (user) {
    return (
      <Fragment>
        <NavbarClassifier />
        <div className="container mt-3 bg-light">
          <div className="row">
            <div className="col">
              <h3>Resultado de la evaluación docente. </h3>
              <p>Selececcione el documento que desea visualizar</p>
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

        <div className="container mt-3 bg-light">
          <div className="row mt-3"></div>
          {data.map((val) => (
            <h2>
            <a href = {`https://storage.googleapis.com/teacher-qualifier.appspot.com/${val}`} >
              {val} </a> </h2>
          ))}
        </div>
      </Fragment>
    );
  }
  return <PagMain />;
};
