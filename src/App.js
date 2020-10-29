import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect,useHistory  } from "react-router-dom"
import Appbar from './components/Appbar/Appbar'
import Dashboard from './components/Dashboard/Dashboard';
import CurrentEvent from './components/Event/CurrentEvent';
import Addevent from './components/Event/Addevent';
import ViewEvent from './components/Event/ViewEvent';
import EditEvent from './components/Event/Editevent';
import AddTransaction from './components/Event/AddTransaction';
import ViewProfile from './components/Profile/ViewProfile';
import Budget from './components/Budget/Budget';
import Predict from './components/Budget/Predict';
import Table from './components/Dashboard/Table'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import CusSignup from './components/CusAuth/Signup'
import CusLogin from './components/CusAuth/Login'
import Logout from './components/Auth/Logout'
import CusLogout from './components/CusAuth/Logout'
import CusEvents from './components/Customer/ViewEvent'
import SendMail from './components/SendMail/SendMail'
import jwt_decode from "jwt-decode";
// import { Redirect } from 'react-router'
// import Chart from './components/Dashboard/Chart'
// import Budget from './components/Dashboard/Budget'
function App() {
  const history = useHistory();
  // console.log(history);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isCusLoggedIn, setCusLoggedIn] = useState(false);
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
  const setIsCusLoggedInTrue = ()=>{
    setCusLoggedIn(true)
  }
  const setIsCusLoggedInFalse = ()=>{
    setCusLoggedIn(false)
  }
  const manageRoutes=()=>{
    if(isLoggedIn){
      return (
      <Appbar title="Convention Planner">
          
      <Route path="/home" exact component={Dashboard} />
      {/* <CurrentEvent /> */}
      <Route path="/events" exact component={CurrentEvent} />
      {/* <Addevent /> */}
      <Route path="/event/new" exact component={Addevent} />
      {/* <ViewEvent /> */}
      <Route path="/event/:id/view" exact component={ViewEvent} />
      <Route path="/event/:id/transaction/new" exact component={AddTransaction} />
      <Route path="/event/:id/edit" exact component={EditEvent} />
      <Route path="/profile" exact component={ViewProfile} />
      <Route path="/budget" exact component={Budget} />
      <Route path="/budget/predict" exact component={Predict} />
      <Route path="/sendmail" exact component={SendMail} />

      <Route path="/logout" exact component={()=><Logout setlogfalse={setIsLoggedInFalse}/>}  />

      </Appbar >)
    } else if(isCusLoggedIn){
      return (
        <div>
          
        <Route path="/cus/home" exact component={CusEvents} />
       
        <Route path="/logout" exact component={()=><Logout setlogfalse={setIsCusLoggedInFalse}/>}  />

        </div >
      )
    } else{
      return <Redirect to="/login" />
    }
  }
  return (
    <div className="App">
        {/* {localStorage.getItem("token")?verifyToken(localStorage.getItem("token")):<></>} */}

        <Router>
         <Switch>
        {/* <Dashboard />  */}
          
          {  console.log(isLoggedIn)}
          <Route path="/login" exact component={() => <Login loginStatus={isLoggedIn} setlog={setIsLoggedInTrue} />} />
          <Route path="/signup" exact component={() => <Signup/>} />
          <Route path="/cus/signup" exact component={() => <CusSignup/>} />
          <Route path="/cus/login" exact component={() => <CusLogin loginStatus={isCusLoggedIn} setlog={setIsCusLoggedInTrue} />} />
          {console.log(isCusLoggedIn)}
         {manageRoutes()}
          
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
