import React, { Fragment, useEffect, useState } from "react";
import { NavbarClassifier } from "./NavbarClassifier";
import { auth, storage, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { PagMain } from "./PagMain";

export const PagEvaluaciones = () => {
  const [user, setUser] = useState();
  const [docs, setDocs] = useState([]);
  const [admin, setAdmin] = useState();
  const [users, setUsers] = useState();

  let history = useHistory();

  function handleClickGenerar() {
    history.push("/evaluacion/alfabetica");
  }

  function handleClickEvaluar() {
    history.push("/classifier");
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        listItem();
        listUsersAdmins();
        listUsers();
      } else {
        setUser(null);
      }
    });
  }, []);

  const listUsersAdmins = async () => {
    db.collectionGroup("usuarios")
      .where("IsAdmin", "==", "admin")
      .onSnapshot((querySnapshot) => {
        const perfiles = [];
        querySnapshot.forEach((doc) => {
          perfiles.push({ ...doc.data() });
        });
        setAdmin(perfiles);
      });
  };

  const listUsers = async () => {
    db.collectionGroup("usuarios").onSnapshot((querySnapshot) => {
      const perfiles = [];
      querySnapshot.forEach((doc) => {
        perfiles.push({ ...doc.data() });
      });
      setUsers(perfiles);
    });
  };

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

  const verificarAdmin = () => {
    admin.map((item) => {
      if (user === item.email) {
        console.log(user)
      console.log(item.email)
        return true;
      }else {return false;}
    });
  };

  const verificarLog = () => {
    users.map((item) => {
      
      
      if (user === item.email) {
        console.log(user)
      console.log(item.email)
        return true;
      }else {return false;}
    });
  };

  if (verificarAdmin) {
    return (
      <Fragment>
        <NavbarClassifier />
        <div className="container mt-3 bg-light rounded-6">
          <div className="row">
            <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
              <h3>Resultado de la evaluación docente. </h3>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              {" "}
            </div>
            <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickGenerar}
              >
                <span> Ver último resultado </span>
              </button>
            </div>
            <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <button
                className="btn btn-outline-danger btn-block"
                onClick={handleClickEvaluar}
              >
                <span> Evaluar un documento </span>
              </button>
            </div>
          </div>
          <br />
        </div>

        <div className="container mt-3 bg-light rounded-6">
          <div className="row mt-3"></div>
          <div className="col-8 col-sm-8 col-xs-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <h2>Selececcione el documento que desea visualizar</h2>
          </div>
          <form
            action="http://127.0.0.1:5000/historial"
            method="POST"
            encType="multipart/form-data"
          >
            {docs.map((val) => (
              <div className="row mt-3">
                <div className="col-1 col-sm-1 col-xs-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                  <span className="material-icons md-48">&#xe415;</span>
                </div>
                <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <input
                    name="link"
                    value={val}
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
  }

  if  (verificarLog) {
    return (
      <Fragment>
        <NavbarClassifier />
        <div className="container mt-3 bg-light rounded rounded-6">
          <div className="row mt-3">
            <div className="col-5 col-sm-5 col-xs-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
              <h3>Resultados de las evaluaciones docente. </h3>
              <br />
            </div>
          </div>

          <div className="col-8 col-sm-8 col-xs-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <h4>Selececcione el documento que desea visualizar</h4>
            <br />
          </div>
          <form
            action="http://127.0.0.1:5000/historial"
            method="POST"
            encType="multipart/form-data"
          >
            {docs.map((val) => (
              <div className="row mt-3">
                <div className="col-1 col-sm-1 col-xs-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                  <span className="material-icons md-48">&#xe415;</span>
                </div>
                <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <input
                    name="link"
                    value={val}
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
