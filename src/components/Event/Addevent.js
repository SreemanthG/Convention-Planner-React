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
  const [description, setDesc] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [time, setTime] = useState('');
  const [state, setState] = useState('');
  const handleSubmission = async (e)=>{
   const postData= {
      name: name,
      price: price,
      description:description,
      address:address,
      city:city,
      pincode:pincode,
      country:country,
      time:time,
      state:state
    }
    console.log(postData);
    const data = await axios.post("/event/",postData,{
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
        Add Event
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
            id="price"
            name="price"
            label="Price"
            fullWidth
            autoComplete=""
            type="number"
            onChange={e => setPrice(e.target.value)} 
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
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={e => setAddress(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={e => setCity(e.target.value)} 
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth onChange={e => setState(e.target.value)}   autoComplete="shipping state"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={e => setPincode(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={e => setCountry(e.target.value)} 
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
          Submit
        </Button>
        </Grid>

      </Grid>
    </React.Fragment>
    </Container>
  );
}