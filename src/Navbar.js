import React from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";


const Navbar =()=> {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/Shop">Shop Now </Link>
      </div>
    );
  };

  export default Navbar;