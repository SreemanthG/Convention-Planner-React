import React, { useState,useEffect  } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from '../../axios'
import TextField from '@material-ui/core/TextField';

import Table from '../Dashboard/Table'
const useStyles = makeStyles((theme) => ({
  card:{
      padding:30,
  },
  root: {
    flexGrow: 1,
  },
  paper: {

    textAlign: 'right',
  },
  mt:{
      padding:30,
      marginTop:20,
      marginBottom:20
  }
}));

function ViewEvent(props) {
    const classes = useStyles();
    const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData(str) {
      // console.log(localStorage.getItem("token"));
    const data = await axios.get(str, {
        headers: {
           Authorization: localStorage.getItem("token")// 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzYzMTY4NSwiZXhwIjoxNjAzNjM1Mjg1fQ.MJSd5bwpTFfwCkArZao3Td-thXXuA6xabMgp9Ek0s3c" //the token is a variable which holds the token
        }
      })
    setUser({user:data.data.data})
    console.log(user);
    }

    fetchData(`/profile`);
  });
    // console.log(props.location.state);
    // console.log(event1.event1);
    const handleChange = (event, newValue) => {
      setUser(newValue);
    };

    const changeDateFormat = (date) =>{
      var d =new Date(date)
      // console.log(d.toLocaleString());
      return d.toLocaleString()
    }
   
    return (
        <div className="ViewEvent">
             <Container maxWidth="xl">
             
                <Paper className={classes.card} elevation={3}>
                <Grid container spacing={3}>

                <Grid item xs={6}>
                <TextField
                id="outlined-full-width"
                label="Name"
                style={{ margin: 8 }}
                value={user.user?user.user.user.name:''}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                disabled 
              />
                </Grid>

                <Grid item xs={6}>
                <TextField
                id="outlined-full-width"
                label="Email"
                style={{ margin: 8 }}
                value={user.user?user.user.user.email:''}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                disabled 
              />
                </Grid>
                <Grid item xs={6}>
                <TextField
                id="outlined-full-width"
                label="organization"
                style={{ margin: 8 }}
                value={user.user?user.user.user.organization:''}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                disabled 
              />
                </Grid>
                <Grid item xs={6}>
                <TextField
                id="outlined-full-width"
                label="Number"
                style={{ margin: 8 }}
                value={user.user?user.user.user.number:''}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                disabled 
              />
                </Grid>
                </Grid>

                </Paper>
                <Paper className={classes.mt}   elevation={3}>
                <Grid item xs={12}>
                <TextField
                id="outlined-full-width"
                label="Events"
                style={{ margin: 8 }}
                value={user.user?user.user.user.events.length:''}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                disabled 
              />
                </Grid>
                
                <Grid item xs={12}>
                <TextField
                id="outlined-full-width"
                label="Budget"
                style={{ margin: 8 }}
                value={user.user?user.user.user.budget:''}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                disabled 
              />
                </Grid>
                
                </Paper>
            
            </Container>
            
        </div>
    )
}

export default ViewEvent
