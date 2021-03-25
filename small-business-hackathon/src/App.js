import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Dashboard from './Components/Dashboard';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import Account from './Components/Account';
import Navigate from './Components/Navbar';

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
