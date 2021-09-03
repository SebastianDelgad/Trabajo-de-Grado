import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PagLogin from "./PagLogin";
import logo_imagen from "../Assets/Images/logo-univalle.png";


const NavbarLogin = () => {
  return (
    <Fragment>
        <Router>
        <Switch>
          <Route path="/Login" exact>
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
              </div>
            </div>
            </Route>
        </Switch>
      </Router>
      <PagLogin />
    </Fragment>
  );
};

export default NavbarLogin;
