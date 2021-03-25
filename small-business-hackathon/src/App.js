<<<<<<< HEAD
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations/reservations';
=======
import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Dashboard from './Components/Dashboard';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import Account from './Components/Account';
import Navigate from './Components/Navbar';
>>>>>>> 7c251b8ec047a57ee0c19f72b047268a47fc5f53

function App() {
  return (
    <div className="App">
        <Navigate />
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/menu' exact component={Menu} />
            <Route path='/reservations' exact component={Reservations} />
            <Route path='/account' exact component={Account} />
        </Switch>
    </div>
  );
}

export default App;
