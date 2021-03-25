import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard';
import Menu from './Components/Menu/menu';
import Reservations from './Components/Reservations/reservations';

function App() {
  return (
    
    <Router>
    <Switch>
    <Route path={"/dashboard"} component={Dashboard}/>
    <Route path={"/menu"} component={Menu}/>
    <Route path={"/reservations"} component={Reservations}/>
    </Switch>
    </Router>

  );
}

export default App;
