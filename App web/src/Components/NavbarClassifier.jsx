import React, { Fragment } from "react";
import NavbarMain from "./NavbarMain"
import PagClassifier from "./PagClassifier"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo_imagen from "../Assets/Images/logo-univalle.png";


const NavbarClassifier = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/Classifier" exact>
            <div className="container mt-2 bg-light">
              <div className="row">
                <div className="col-sm-10">
                  <img
                    src={logo_imagen}
                    width="500"
                    height="62.46"
                    alt="logo"
                  />
                </div>
                <div className="col-sm-2 mt-3">
                  <div className="btn-toolbar">
                    <Link to="/">
                      <button className="btn btn-outline-danger">
                        <span> Cerrar sesión </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <PagClassifier/>
          </Route>
          <Route path="/" exact>
            <NavbarMain />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default NavbarClassifier;
