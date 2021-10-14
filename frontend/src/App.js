import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PagMain } from "./Components/PagMain";
import { PagLogin } from "./Components/PagLogin";
import { PagClassifier } from "./Components/PagClassifier";
import { PagRegister } from "./Components/PagRegister";
import { PagChangePass } from "./Components/PagChangePass";
import { ClassifierAlfabéticamente } from "./Components/ClassifierAlfabéticamente";
import { ClassifierMejorProm } from "./Components/ClassifierMejorProm";
import { ClassifierPeorProm } from "./Components/ClassifierPeorProm";
import { PagEvaluaciones } from "./Components/PagEvaluaciones";
import { ClassifierHistoryMejor } from "./Components/ClassifierHistoryMejor";
import { ClassifierHistoryPeor } from "./Components/ClassifierHistoryPeor";
import { ClassifierHistoryOrdenado } from "./Components/ClassifierHistoryOrdenado";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={PagLogin} />
      <Route exact path="/" component={PagMain} />
      <Route exact path="/classifier" component={PagClassifier} />
      <Route exact path="/register" component={PagRegister} />
      <Route exact path="/changepass" component={PagChangePass} />
      <Route exact path="/classifierAlfabetico" component={ClassifierAlfabéticamente} />
      <Route exact path="/classifierMejorProm" component={ClassifierMejorProm} />
      <Route exact path="/classifierPeorProm" component={ClassifierPeorProm} />
      <Route exact path="/evaluaciones" component={PagEvaluaciones} />
      <Route exact path="/mejor-prom" component={ClassifierHistoryMejor} />
      <Route exact path="/peor-prom" component={ClassifierHistoryPeor} />
      <Route exact path="/ordenado" component={ClassifierHistoryOrdenado} />
    </BrowserRouter>
  );
};
