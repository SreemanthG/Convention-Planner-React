import React, { useState,useEffect}  from 'react';
import {useHistory,Redirect} from "react-router-dom"

export default function Logout(props) {
  localStorage.clear();
  props.setlogfalse();
  return  <Redirect to="/login" />

}