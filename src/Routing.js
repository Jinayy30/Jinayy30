import React from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Navbar from './Navbar';



const Routing = () => {
  return (
    <main>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Shop" component={Shop} />
      <Route path="/navbar" component={Navbar}/>
      </Switch>
    </main>
  );
};

export default Routing;
