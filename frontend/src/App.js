import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PagMain } from "./Components/PagMain";
import { PagLogin } from "./Components/PagLogin";
import { PagClassifier } from "./Components/PagClassifier";
import { PagRegister } from "./Components/PagRegister";
import { PagChangePass } from "./Components/PagChangePass";
import { PagEvaluaciones } from "./Components/PagEvaluaciones";
import { ClassifierHistoryMejor } from "./Components/ClassifierHistoryMejor";
import { ClassifierHistoryPeor } from "./Components/ClassifierHistoryPeor";
import { ClassifierHistoryOrdenado } from "./Components/ClassifierHistoryOrdenado";
import { PagFileInvalid } from "./Components/PagFileInvalid";
import { PagClassifierCustom } from "./Components/PagClassifierCustom";
import { PagClassifierCustomCourse } from "./Components/PagClassifierCustomCourse";
import { PagPerfil } from "./Components/PagPerfil";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={PagLogin} />
      <Route exact path="/" component={PagMain} />
      <Route exact path="/classifier" component={PagClassifier} />
      <Route exact path="/register" component={PagRegister} />
      <Route exact path="/changepass" component={PagChangePass} />
      <Route exact path="/evaluaciones" component={PagEvaluaciones} />
      <Route exact path="/evaluacion/promedio-alto" component={ClassifierHistoryMejor} />
      <Route exact path="/evaluacion/promedio-bajo" component={ClassifierHistoryPeor} />
      <Route exact path="/evaluacion/ordenado" component={ClassifierHistoryOrdenado} />
      <Route exact path="/classifier/error" component={PagFileInvalid} />
      <Route exact path="/evaluacion/custom/nombre" component={PagClassifierCustom} />
      <Route exact path="/evaluacion/custom/curso" component={PagClassifierCustomCourse} />
      <Route exact path="/perfil" component={PagPerfil} />
    </BrowserRouter>
  );
};
