import React from 'react';
import logo from './logo.svg';
import './App.css';
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
       <Appbar title="Convention Planner">
        <Dashboard /> 
        {/* <CurrentEvent />
       <Addevent />
       <ViewEvent /> */}

       {/* <Table /> 
       <Chart /> 
       <Budget />  */}
      </Appbar >
    </div>
  );
}

export default App;
