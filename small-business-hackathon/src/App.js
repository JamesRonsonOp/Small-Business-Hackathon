import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router';
import Dashboard from './Components/Dashboard';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import Account from './Components/Account';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/menu' component={Menu} />
            <Route path='/reservations' component={Reservations} />
            <Route path='/account' component={Account} />
        </Switch>
    </div>
  )
};

export default App;
