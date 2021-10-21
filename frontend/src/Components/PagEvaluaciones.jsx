import React, { Fragment, useEffect, useState } from "react";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth, storage } from "../firebase";
import { useHistory } from "react-router-dom";
import { PagMain } from "./PagMain";

export const PagEvaluaciones = () => {
  const [user, setUser] = useState();
  const [docs, setDocs] = useState([]);

  let history = useHistory();

  function handleClickEvaluar() {
    history.push("/classifier");
  }

  useEffect(() => {
    const ac = new AbortController();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        listItem();
      } else {
        setUser(null);
        return () => ac.abort();
      }
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
          setDocs((arr) => [...arr, item.name]);
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
        <div className="container mt-3 bg-light rounded-6">
          <div className="row mt-3">
            <div className="mt-4 col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
              <h3>Resultado de la evaluación docente. </h3>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-5"> </div>
            <div className="mb-4 col-3">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickEvaluar}
              >
                <span> Evaluar un documento </span>
              </button>
            </div>
            <div className="col-4"> </div>
          </div>
        </div>

        <div className="container mt-3 bg-light rounded-6">
          <div className="row mt-3"></div>
          <div className="mt-3 col-8 col-sm-8 col-xs-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <h2>Selececcione el documento que desea visualizar</h2>
          </div>
          <form
            action="http://127.0.0.1:5000/historial"
            method="POST"
            encType="multipart/form-data"
          >
            {docs.map((val) => (
              <div className="row mt-3">
                <div className="mt-2 col-1 col-sm-1 col-xs-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                  <span className="material-icons md-48">&#xe415;</span>
                </div>
                <div className="mt-2 mb-2 col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <input
                    name="link"
                    value={val.replace(".pdf.txt", "")}
                    type="submit"
                    className="btn btn-outline-danger btn-block"
                  ></input>
                </div>
              </div>
            ))}
          </form>
        </div>
      </Fragment>
    );
  } else return <PagMain />;
};
