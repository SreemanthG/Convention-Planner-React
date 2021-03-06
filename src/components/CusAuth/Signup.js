import React, { useState,useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from '../../axios'
import qs from 'qs'
import {useHistory,Redirect} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex', height:'100vh',flexDirection:'column',justifyContent:'center',alignItems:'center'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop:'3vw',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const history = useHistory(); 
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [number, setNumber] = useState('');

  const loginCheck = () =>{

    history.push('/cus/login')
}  


  const handleLogin = async (e)=>{
        const data = await axios.post("/cus/signup",{user:{
          name:name,
          email: email,
          password: pass,
          organization:org,
          number:number
        }},{
            headers: {
              'Content-Type': 'application/json'
          }
        })
      
        loginCheck();
    }


  return (
    <div className={classes.root} style={{}}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
           
            <Grid item  xs={12} spacing={3}>
                <Typography variant="h4" gutterBottom style={{ marginTop: 15,marginBottom: 15,textAlign:'center' }}>
                    Customer Sign Up
                </Typography>
            </Grid>
            <Grid item  xs={6} spacing={5}  style={{ marginTop: 15 }}>
            <TextField id="standard-basic1"  onChange={e => setEmail(e.target.value)} label="Email" fullWidth  variant="outlined"/>
            </Grid>
            <br/>
            <Grid item  xs={6} spacing={5}  style={{ marginTop: 15 }}>
            <TextField id="standard-basic1"  onChange={e => setName(e.target.value)} label="Username" fullWidth  variant="outlined"/>
            </Grid>
            <br/>
            <Grid item  xs={6} spacing={5}  style={{ marginTop: 15 }}>
            <TextField id="standard-basic1"  onChange={e => setOrg(e.target.value)} label="Orginazation Name" fullWidth  variant="outlined"/>
            </Grid>
            <br/>
            <Grid item  xs={6} spacing={5}  style={{ marginTop: 15 }}>
            <TextField id="standard-basic1" type="number" onChange={e => setNumber(e.target.value)} label="Number" fullWidth  variant="outlined"/>
            </Grid>
            <br/>
            <Grid item  xs={12} spacing={5} style={{ marginTop: 15 }}>
            <TextField id="standard-basic2"  onChange={e => setPass(e.target.value)} label="Password" fullWidth type="password" variant="outlined"/>
            </Grid>
            <Grid item  xs={12} spacing={5} style={{ marginTop: 15,display:'flex',justifyContent:'center' }}>
                <Button onClick={handleLogin} style={{width:'10vw'}} variant="contained" color="primary">
                    Register
                </Button>
            </Grid>
            <Grid item  xs={12} spacing={5} style={{ marginTop: 15,marginBottom: 15,textAlign:'center' }}>
            <Typography variant="subtitle2" gutterBottom>
                Already have an account? Login
            </Typography>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}