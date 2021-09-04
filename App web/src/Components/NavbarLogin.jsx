import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";

export const NavbarLogin = () => {
  return (
    <Fragment>
      <div className="container mt-2 bg-light">
        <div className="row">
          <div className="col-sm-10">
            <img src={logo_imagen} width="500" height="62.46" alt="logoLogin" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
