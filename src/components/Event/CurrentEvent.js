import React, { useState,useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabnav from './Tabnav';
import Eventcard from './Eventcard';
import axios from '../../axios'
import Add from '../Floatingbtn/Add'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [events, setEvents] = useState({});
  useEffect(() => {
    async function fetchData(str) {
    const data = await axios.get(str, {
        headers: {
          Authorization: localStorage.getItem("token")//the token is a variable which holds the token
        }
      })
    // console.log(data);
      setEvents({events:data.data.data})
    }

    fetchData("/events/");
  });
  return (
    <div className={classes.root}>
        <Link to="event/new"><Add/> </Link>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
            <Tabnav />
        </Grid> */}
        { events.events? events.events.map((row) => (
            <Grid item xs={12}>
            <Eventcard name={row.name} description={row.description} price={row.price} id={row._id}/>
          </Grid>
          )): <div></div>}
        {/*
          <Grid item xs={12}>
            <Eventcard name="" description="" price="" />
          </Grid>
      */}
        
      </Grid>
    </div>
  );
}