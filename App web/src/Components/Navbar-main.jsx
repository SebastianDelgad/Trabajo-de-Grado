import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import logo_imagen from "../images/logo-univalle.png";
import PagMain from "./PagMain";

const NavbarMain = () => {
  return (
    <Fragment>
      <Router>
      <Switch>
      <Route path="/" exact>
        <div className="container mt-2 bg-light">
          <div className="row">
            <div className="col-sm-10">
              <img src={logo_imagen} width="500" height="62.46" alt="logo" />
            </div>
            <div className="col-sm-2 mt-3">
              <div className="btn-toolbar">
                <Link to="/Login">
                  <button  className="btn btn-outline-danger"> 
                  <span> Iniciar sesión </span> 
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
          
  
              <PagMain />
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>
          </Switch>
      </Router>
    </Fragment>
  );
};
export default NavbarMain;
