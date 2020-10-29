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
export default function AddressForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmission = async (e)=>{
   const postData= {
      name: name,
      price: price,
  
    }
    console.log(postData);
    const data = await axios.post("/sendMail/",postData,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
      }
    })
      console.log(data);
    // loginCheck(data.data.data.token);
}

  return (
    <Container maxWidth="sm">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Send Mail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Heading"
            name="name"
            label="Heading"
            fullWidth
            autoComplete=""
            onChange={e => setName(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Description"
            fullWidth
            autoComplete=""
            type="number"
            onChange={e => setPrice(e.target.value)} 
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
          Send
        </Button>
        </Grid>

      </Grid>
    </React.Fragment>
    </Container>
  );
}