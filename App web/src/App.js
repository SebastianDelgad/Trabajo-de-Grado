import React, {Fragment} from 'react';
import NavbarMain from "./Components/Navbar-main";
import PagMain from './Components/PagMain';


function App() {
  return (
    <Fragment>
      <div className= "mb-2 bg-white">
        <NavbarMain />
        <PagMain />
      </div>
    </Fragment>
  );
}


export default App;
