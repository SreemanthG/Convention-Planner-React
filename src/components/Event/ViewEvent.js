import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

function ViewEvent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="ViewEvent">
             <Container maxWidth="xl">
             
                <Paper className={classes.card} elevation={3}>
                <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                        h3. Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Siam Vit
                </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.paper} variant="h6" gutterBottom>
                        26th April, 2020
                    </Typography>
                    <Typography className={classes.paper} variant="h6" gutterBottom>
                        150 /-
                    </Typography>
                </Grid>
                <Grid item xs={12}>

                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                </Grid>

                <Grid item xs={1}>
                <Button variant="contained" color="secondary">
                    Delete
                </Button>
                </Grid>

                <Grid item xs={1}>
                <Button variant="contained" color="primary">
                    Edit
                </Button>
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
                    <Table />

                </Grid>
                </Grid>
                </Paper>
            
            </Container>
            
        </div>
    )
}

export default ViewEvent
