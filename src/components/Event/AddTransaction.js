import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from '../../axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useHistory,Redirect} from "react-router-dom"
export default function AddressForm(props) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDesc] = useState('');
  const [time, setTime] = useState('');
  const history = useHistory(); 

  const handleSubmission = async (e)=>{
   const postData= {
      name: name,
      amount: amount,
      description:description,
      timestamp:time,
    }
    // console.log(postData);
    const data = await axios.post(`/event/${props.match.params.id}/transaction`,postData,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
      }
    })
      console.log(data);    
    history.push(`/event/${props.match.params.id}/view`)
    // loginCheck(data.data.data.token);
}

  return (
    <Container maxWidth="sm">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Transaction
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Event Name"
            fullWidth
            autoComplete=""
            onChange={e => setName(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amount"
            name="amount"
            label="Amount"
            fullWidth
            autoComplete=""
            type="number"
            onChange={e => setAmount(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete=""
            onChange={e => setDesc(e.target.value)} 
          />
        </Grid>
    
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="time"
            name="time"
            fullWidth
            autoComplete="shipping address-level2"
            type="datetime-local"
            onChange={e => setTime(e.target.value)} 
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
       
        <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={handleSubmission}>
          Add
        </Button>
        </Grid>

      </Grid>
    </React.Fragment>
    </Container>
  );
}