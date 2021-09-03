import React, { Fragment } from "react";
import '../Assets/Styles/icons.css'

const PagLogin = () => {
  return (
    <Fragment>
      <div className="container mt-3 bg-light">
          <div className='row justify-content-center'>
              <div className='col'>
               <h4> Acceder al sistema </h4>
              </div>
              </div>
        
        <span className="material-icons md-36">&#xe853;</span>

        <span className="material-icons md-36" >&#xe897;</span>
      </div>
    </Fragment>
  );
};

export default PagLogin;
