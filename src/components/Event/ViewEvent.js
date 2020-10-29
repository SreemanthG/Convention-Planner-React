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
import TransactionsTable from './TransactionsTable';
import ParticipantsTable from './ParticipantsTable';
import Table from '../Dashboard/Table'
import {Link,Redirect,useHistory} from "react-router-dom"
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
    const [value, setValue] = React.useState(0);
    const [event1, setEvent] = useState({});
    const history = useHistory()
  useEffect(() => {
    async function fetchData(str) {
      // console.log(localStorage.getItem("token"));
    const data = await axios.get(str, {
        headers: {
           Authorization: localStorage.getItem("token")// 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzYzMTY4NSwiZXhwIjoxNjAzNjM1Mjg1fQ.MJSd5bwpTFfwCkArZao3Td-thXXuA6xabMgp9Ek0s3c" //the token is a variable which holds the token
        }
      })
    // console.log(data);
      setEvent({event1:data.data.data})

    }

    fetchData(`event/${props.match.params.id}`);
  });
    // console.log(props.location.state);
    // console.log(event1.event1);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleDelete = async () =>{
      alert("Are you sure wanna delete?");
     
      
      const data = await axios.delete(`event/${props.match.params.id}`, {
          headers: {
             Authorization: localStorage.getItem("token")// 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzYzMTY4NSwiZXhwIjoxNjAzNjM1Mjg1fQ.MJSd5bwpTFfwCkArZao3Td-thXXuA6xabMgp9Ek0s3c" //the token is a variable which holds the token
          }
        })
      return history.push("/events")
    }
    const changeDateFormat = (date) =>{
      var d =new Date(date)
      // console.log(d.toLocaleString());
      return d.toLocaleString()
    }
    const showTables = () => {
      // console.log(value);
      if(value==2){
        return <TransactionsTable id={event1.event1? event1.event1._id:0}/>
      } else if(value ==1){
        return 1
      } else{
        return <ParticipantsTable id={event1.event1? event1.event1._id:0}/>
      }
    }
    return (
        <div className="ViewEvent">
             <Container maxWidth="xl">
             
                <Paper className={classes.card} elevation={3}>
                <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                        {event1.event1? event1.event1.name:<div></div>}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Siam Vit
                </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.paper} variant="h6" gutterBottom>
                {event1.event1? (changeDateFormat(event1.event1.time)):<div></div>}
                        
                    </Typography>
                    <Typography className={classes.paper} variant="h6" gutterBottom>
                    {event1.event1? event1.event1.price +"/-":<div></div>}
                    </Typography>
                </Grid>
                <Grid item xs={12}>

                <Typography variant="body1" gutterBottom>
                {event1.event1? event1.event1.description:<div></div>}

                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Button variant="contained" color="secondary" onClick={handleDelete}> 
                    Delete
                </Button>
                </Grid>

                <Grid item xs={12}>
                <Link to={`/event/${props.match.params.id}/edit`}>
                <Button variant="contained" color="primary">
                    Edit
                </Button>
                </Link>

                </Grid>
                </Grid>

                </Paper>
                <Paper className={classes.mt}   elevation={3}>

                <Grid container spacing={3}>
                
                <Grid item xs={12}>
               
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Participants" />
                        <Tab label="Todo" />
                        <Tab label="Transactions" />
                    </Tabs>
                
                </Grid>
                
                 
                <Grid item xs={12}>
                    {/* <Table /> */}
                   {/* {value==2?<TransactionsTable id={event1.event1? event1.event1._id:0}/>: value} */}
                   {/* {value==0?<ParticipantsTable id={event1.event1? event1.event1._id:0}/>: value} */}
                  {showTables()}
                </Grid>
                </Grid>
                </Paper>
            
            </Container>
            
        </div>
    )
}

export default ViewEvent
