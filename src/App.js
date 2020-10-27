import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect,useHistory  } from "react-router-dom"
import Appbar from './components/Appbar/Appbar'
import Dashboard from './components/Dashboard/Dashboard';
import CurrentEvent from './components/Event/CurrentEvent';
import Addevent from './components/Event/Addevent';
import ViewEvent from './components/Event/ViewEvent';
import Table from './components/Dashboard/Table'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import jwt_decode from "jwt-decode";
// import { Redirect } from 'react-router'
// import Chart from './components/Dashboard/Chart'
// import Budget from './components/Dashboard/Budget'
function App() {
  const history = useHistory();
  // console.log(history);
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [pass, setPass] = useState('');
 
  const verifyToken = (token)=>{
    var decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.clear();
      setLoggedIn(false)
    } else{
      setLoggedIn(true)
    }
  }
  useEffect(() => {
    localStorage.getItem("token")?verifyToken(localStorage.getItem("token")):setLoggedIn(false)
  })
  const setIsLoggedInTrue = ()=>{
    setLoggedIn(true)
  }
  const setIsLoggedInFalse = ()=>{
    setLoggedIn(false)
  }
  
  return (
    <div className="App">
        {/* {localStorage.getItem("token")?verifyToken(localStorage.getItem("token")):<></>} */}

        <Router>
         <Switch>
        {/* <Dashboard />  */}
          
          {  console.log(isLoggedIn)}
          <Route path="/login" exact component={() => <Login loginStatus={isLoggedIn} setlog={setIsLoggedInTrue} />} />

          {isLoggedIn?
          <Appbar title="Convention Planner">
          
          <Route path="/home" exact component={Dashboard} />
          {/* <CurrentEvent /> */}
          <Route path="/events" exact component={CurrentEvent} />
          {/* <Addevent /> */}
          <Route path="/event/new" exact component={Addevent} />
          {/* <ViewEvent /> */}
          <Route path="/event/:id/view" exact component={ViewEvent} />

          <Route path="/logout" exact component={()=><Logout setlogfalse={setIsLoggedInFalse}/>}  />

          </Appbar >: <Redirect to="/login" />
          }
          
          {/* <Route path="/event/view/transactions" exact component={TransactionsTable} /> */}
         </Switch>


        </Router>
       
       {/* <Table /> 
       <Chart /> 
       <Budget />  */}
    </div>
  );
}

export default App;
