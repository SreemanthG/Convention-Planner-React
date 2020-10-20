import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Appbar from './components/Appbar/Appbar'
import Dashboard from './components/Dashboard/Dashboard';
import CurrentEvent from './components/Event/CurrentEvent';
import Addevent from './components/Event/Addevent';
import ViewEvent from './components/Event/ViewEvent';
// import Table from './components/Dashboard/Table'
// import Chart from './components/Dashboard/Chart'
// import Budget from './components/Dashboard/Budget'
function App() {

  return (
    <div className="App">

        <Router>
       <Appbar title="Convention Planner">
         <Switch>

        {/* <Dashboard />  */}
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" exact component={Dashboard} />
        {/* <CurrentEvent /> */}
        <Route path="/events" exact component={CurrentEvent} />
        {/* <Addevent /> */}
        <Route path="/events/new" exact component={Addevent} />

        {/* <ViewEvent /> */}
        <Route path="/event/view" exact component={ViewEvent} />
        </Switch>

        </Appbar >

        </Router>
       
       {/* <Table /> 
       <Chart /> 
       <Budget />  */}
    </div>
  );
}

export default App;
