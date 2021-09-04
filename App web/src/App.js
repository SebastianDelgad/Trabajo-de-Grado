import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PagMain } from "./Components/PagMain";
import { PagLogin } from "./Components/PagLogin";
import { PagClassifier } from "./Components/PagClassifier";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={PagLogin} />
      <Route exact path="/" component={PagMain} />
      <Route exact path="/classifier" component={PagClassifier} />
    </BrowserRouter>
  );
};
