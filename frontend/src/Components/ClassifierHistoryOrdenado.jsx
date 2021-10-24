import React, { useEffect, useState, Fragment, useRef } from "react";
import img_muy_negativa from "../Assets/Images/muy_negativa.png";
import img_negativa from "../Assets/Images/negativa.png";
import img_neutral from "../Assets/Images/neutral.png";
import img_positivo from "../Assets/Images/positivo.png";
import img_muy_positivo from "../Assets/Images/muy_positivo.png";
import icon_account from "../Assets/Images/outline_perm_identity_black_48dp.png";
import icon_book from "../Assets/Images/outline_menu_book_black_48dp.png";
import { NavbarEvaluaciones } from "./NavbarEvaluaciones";
import { PagMain } from "./PagMain";
import { auth } from "../firebase";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useHistory } from "react-router-dom";

export const ClassifierHistoryOrdenado = () => {
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

  function handleClickCustom() {
    history.push("/evaluacion/custom/nombre");
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
        obtenerDatos();
      } else {
        setUser(null);
      }
    });
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://127.0.0.1:5000/historial-ordenado");
    const info = await data.json();
    info.data.map((element) => {});
    setObservacion(info.data);
  };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  if (User) {
    return (
      <Fragment>
        <NavbarEvaluaciones />
        <div className="container mt-3 bg-light rounded">
          <div className="row">
            <div className="mt-3 mb-4 col">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-tabs">
                  <button
                    className="btn btn-outline-danger active"
                    aria-current="page"
                    onClick={handleClickAlfabeticamente}
                  >
                    Alfabéticamente
                  </button>
                </li>
                <li className="nav-tabs">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleClickMejorProm}
                  >
                    Promedio más alto
                  </button>
                </li>
                <li className="nav-tabs">
                  <button
                    className="btn btn-outline-danger "
                    onClick={handleClickPeorProm}
                  >
                    Promedio más bajo
                  </button>
                </li>
                <li className="nav-tabs">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleClickCustom}
                  >
                    Personalizado
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={exportPDFWithComponent}
                  >
                    Descargar en PDF
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <PDFExport
          scale={0.6}
          paperSize="Legal"
          margin="2cm"
          fileName="Orden alfabético"
          ref={pdfExportComponent}
        >
          <div className="container mt-3 bg-light rounded">
            <div className="row">
              <div className=" mt-3 mb-2 col">
                <h2 className="text-center mt-2 text-responsive">
                  Evaluaciones ordenadas alfabéticamente por el nombre del
                  profesor
                </h2>
              </div>
            </div>
            <div className="row">
              <div className=" mb-2 col">
                <h5 className="mt-2 text-responsive">
                  {" "}
                  Clasificación de las observaciones:{" "}
                </h5>
              </div>
            </div>
            <div className="row justify-content-md-center mt-3">
              <div className="mb-1 col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img
                  src={img_muy_negativa}
                  className="img-fluid"
                  alt="muy_negativo"
                />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img src={img_negativa} className="img-fluid" alt="negativo" />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img src={img_neutral} className="img-fluid" alt="neutral" />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img src={img_positivo} className="img-fluid" alt="positivo" />
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <img
                  src={img_muy_positivo}
                  className="img-fluid"
                  alt="muy_positivo"
                />
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="mb-2 col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <p className="text-responsive"> Muy negativa</p>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <p className="text-responsive"> Negativa</p>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <p className="text-responsive"> Neutral</p>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <p className="text-responsive"> Positivo </p>
              </div>
              <div className="col-2 col-sm-2 col-xs-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <p className="text-responsive"> Muy positivo</p>
              </div>
            </div>
          </div>

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
                      &nbsp; Calificación observaciones{" "}
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
                    <h4 className="text-responsive mt-1"> &nbsp; Promedio: </h4>
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
        </PDFExport>
      </Fragment>
    );
  }
  return <PagMain />;
};
