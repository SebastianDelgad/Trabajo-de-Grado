import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Register = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/Register" exact>
            <h2>Register</h2>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};
