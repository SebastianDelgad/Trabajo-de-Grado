import React, { useEffect, useState, Fragment, useRef, useCallback } from "react";
import img_muy_negativa from "../Assets/Images/muy_negativa.png";
import img_negativa from "../Assets/Images/negativa.png";
import img_neutral from "../Assets/Images/neutral.png";
import img_positivo from "../Assets/Images/positivo.png";
import img_muy_positivo from "../Assets/Images/muy_positivo.png";
import icon_account from "../Assets/Images/outline_perm_identity_black_48dp.png";
import icon_book from "../Assets/Images/outline_menu_book_black_48dp.png";
import { NavbarEvaluaciones } from "./NavbarEvaluaciones";
import { PagMain } from "./PagMain";
import { auth, db } from "../firebase";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useHistory } from "react-router-dom";
import { BackendUrl } from "./BackendUrl";
import { Helmet } from "react-helmet";

export const PagClassifierCustom = () => {
  const [nombres, setNombres] = useState([]);
  const [observaciones, setObservacion] = useState([]);
  const [User, setUser] = useState(false);
  const pdfExportComponent = useRef(null);
  let history = useHistory();

  function handleClickAlfabeticamente() {
    history.push("/evaluacion/ordenado");
  }

  function handleClickMejorProm() {
    history.push("/evaluacion/promedio-alto");
  }

  function handleClickPeorProm() {
    history.push("/evaluacion/promedio-bajo");
  }

  function handleClickCustomNombre() {
    history.push("/evaluacion/custom/nombre");
  }

  function handleClickCustomCourse() {
    history.push("/evaluacion/custom/curso");
  }

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  useEffect(() => {
    const ac = new AbortController();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        actualizarDatos();
      } else {
        setUser(null);
      }
    });
    return () => ac.abort();
  }, []);

  const obtenerNombres = async () => {
    const data = await fetch(BackendUrl+"nombres");
    const info = await data.json();
    setNombres(info.data);
  };

  const actualizarDatos = async () => {
    var p = auth.currentUser;
    await db.collection("tokens").doc("Token").update({
      token: p.uid,
    });
    obtenerDatos();
    obtenerNombres();
  };

  const obtenerDatos = async () => {
    const data = await fetch(BackendUrl+"busqueda-nombre");
    const info = await data.json();
    setObservacion(info.data);
  };

  if (User) {
    return (
      <Fragment>
        <NavbarEvaluaciones />
        <Helmet>
          <title>Busqueda por nombre - SISCOD</title>
        </Helmet>
        <div className="container mt-3 bg-light rounded">
          <div className="row mt-3">
            <div className="mt-3 mb-4 col">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-tabs">
                  <u className="nav-link" onClick={handleClickAlfabeticamente}>
                    <div className="row">
                      <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <span className="material-icons md-36">&#xef42;</span>
                      </div>
                      <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        <span>Alfabéticamente </span>
                      </div>
                    </div>
                  </u>
                </li>
                <li className="nav-tabs">
                  <u className="nav-link" onClick={handleClickMejorProm}>
                    <div className="row">
                      <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <span className="material-icons md-36">&#xe9f3;</span>
                      </div>
                      <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        Promedio más alto
                      </div>
                    </div>
                  </u>
                </li>
                <li className="nav-tabs">
                  <u className="nav-link" onClick={handleClickPeorProm}>
                    <div className="row">
                      <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <span className="material-icons md-36">&#xe9f2;</span>
                      </div>
                      <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        Promedio más bajo
                      </div>
                    </div>
                  </u>
                </li>
                <li className="nav-tabs">
                  <u className="nav-link-active" onClick={handleClickCustomNombre}>
                    <div className="row">
                      <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <span className="material-icons md-36">&#xe8b6;</span>
                      </div>
                      <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        Personalizado
                      </div>
                    </div>
                  </u>
                </li>
                <li className="nav-tabs">
                  <u className="nav-link" onClick={exportPDFWithComponent}>
                    <div className="row">
                      <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <span className="material-icons md-36">&#xf090;</span>
                      </div>
                      <div className="col-10 col-sm-10 col-xs-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        Descargar en PDF
                      </div>
                    </div>
                  </u>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-3 bg-light rounded-6">
          <div className="row ">
            <div className="mt-3 col">
              <h4 className="justify text-responsive">
                {" "}
                Busqueda de las calificaciones por el nombre del docente{" "}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="mt-3 mb-4 col">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-tabs">
                  <u
                    className="nav-link-active"
                    onClick={handleClickCustomNombre}
                  >
                    <div className="row">
                      <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <span className="material-icons md-36">&#xe8a6;</span>
                      </div>
                      <div className="col-9 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                        Nombre
                      </div>
                    </div>
                  </u>
                </li>
                <li className="nav-tabs">
                  <u className="nav-link" onClick={handleClickCustomCourse}>
                    <div className="row">
                      <div className="col-3 col-sm-3 col-xs-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <span className="material-icons md-36">&#xe666;</span>
                      </div>
                      <div className="col-9 col-sm-9 col-xs-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                        Asignatura
                      </div>
                    </div>
                  </u>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mt-3 bg-light rounded-6">
          <div className="row">
            <div className="mt-3 col">
              <h5 className="justify text-responsive">
                {" "}
                Seleccione el nombre del docente
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="mt-3 mb-3 col-4">
              <form
                action={BackendUrl+"evaluacion-nombre"}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    list="lista"
                    name="nombre"
                  />
                  <datalist id="lista">
                    {nombres.map((docente) => (
                      <option value={docente}>{docente}</option>
                    ))}
                  </datalist>
                  <button
                    className="btn btn-outline-danger btn-block"
                    type="submit"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <PDFExport
          scale={0.6}
          paperSize="Legal"
          margin="2cm"
          fileName="Clasificación orden personalizado por nombre"
          ref={pdfExportComponent}
        >
          <div className="container mt-3 bg-light rounded-6">
            {observaciones.map((item) => (
              <div className="container mt-4 bg-light rounded">
                <li key={item.id}>
                  <div className="row">
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img
                        src={icon_account}
                        className="img-fluid"
                        alt="account"
                      />
                    </div>
                    <div className="mt-2 col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <h4 className="text-responsive"> Nombre: </h4>{" "}
                      <p className="text-responsive">{item.docente}</p>
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img src={icon_book} className="img-fluid" alt="book" />
                    </div>
                    <div className="mt-2 col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <h4 className="text-responsive"> Asignatura: </h4>{" "}
                      <p className="text-responsive">{item.asignatura}</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col mb-3 mt-3">
                      <h4 className="text-responsive">
                        {" "}
                        &nbsp; Clasificación observaciones{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="row justify-content-md-center mt-2">
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img
                        src={img_muy_negativa}
                        className="img-fluid"
                        alt="muy_negativo"
                      />
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img
                        src={img_negativa}
                        className="img-fluid"
                        alt="negativo"
                      />
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img
                        src={img_neutral}
                        className="img-fluid"
                        alt="neutral"
                      />
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img
                        src={img_positivo}
                        className="img-fluid"
                        alt="positivo"
                      />
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <img
                        src={img_muy_positivo}
                        className="img-fluid"
                        alt="muy_positivo"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-md-center mt-1">
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <h5 className="text-responsive">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {item.total_muy_neg}{" "}
                      </h5>
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <h5 className="text-responsive">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {item.total_neg}{" "}
                      </h5>
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <h5 className="text-responsive">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {item.total_neu}{" "}
                      </h5>
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <h5 className="text-responsive">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {item.total_pos}{" "}
                      </h5>
                    </div>
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <h5 className="text-responsive">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {item.total_muy_pos}{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <h4 className="text-responsive mt-1">
                        {" "}
                        &nbsp; Promedio:{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="row justify-content-md-center mt-1">
                    <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      {item.promedio_calificacion === "Muy negativo" && (
                        <img
                          src={img_muy_negativa}
                          className="img-fluid"
                          alt="muy_negativo"
                        />
                      )}

                      {item.promedio_calificacion === "Neutral" && (
                        <img
                          src={img_neutral}
                          className="img-fluid"
                          alt="neutral"
                        />
                      )}

                      {item.promedio_calificacion === "Positivo" && (
                        <img
                          src={img_positivo}
                          className="img-fluid"
                          alt="positivo"
                        />
                      )}

                      {item.promedio_calificacion === "Muy positivo" && (
                        <img
                          src={img_muy_positivo}
                          className="img-fluid"
                          alt="muy_positivo"
                        />
                      )}

                      {item.promedio_calificacion === "Negativo" && (
                        <img
                          src={img_negativa}
                          className="img-fluid"
                          alt="negativo"
                        />
                      )}
                    </div>
                  </div>
                  <div className="row justify-content-md-center mt-1">
                    <div className="mb-2 col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      {item.promedio_calificacion === "Muy negativo" && (
                        <p className="text-responsive"> Muy negativo </p>
                      )}

                      {item.promedio_calificacion === "Neutral" && (
                        <p className="text-responsive"> Neutral </p>
                      )}

                      {item.promedio_calificacion === "Positivo" && (
                        <p className="text-responsive"> Positivo </p>
                      )}

                      {item.promedio_calificacion === "Muy positivo" && (
                        <p className="text-responsive"> Muy positivo </p>
                      )}

                      {item.promedio_calificacion === "Negativo" && (
                        <p className="text-responsive"> Negativo </p>
                      )}
                    </div>
                  </div>

                  <div className="row mt-1">
                    <div className="col mt-2 mb-3">
                      <h4 className="text-responsive">
                        {" "}
                        Total observaciones: {item.total_observaciones}{" "}
                      </h4>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </div>
        </PDFExport>
      </Fragment>
    );
  }
  return <PagMain />;
};
