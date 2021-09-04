import React, { Fragment } from "react";
import logo_imagen from "../Assets/Images/logo-univalle.png";

export const NavbarRegister = () => {
  return (
    <Fragment>
      <div className="container mt-2 bg-light">
        <div className="row">
          <div className="col-sm-10">
            <img src={logo_imagen} alt="logoLogin" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};