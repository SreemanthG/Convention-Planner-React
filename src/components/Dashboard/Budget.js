import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../axios'
import Typography from '@material-ui/core/Typography';
// import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const [budget, setBudget] = useState("")
  useEffect(() => {
    async function fetchData(str) {
      // console.log(localStorage.getItem("token"));
    const data = await axios.get(str, {
        headers: {
           Authorization: localStorage.getItem("token")// 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzYzMTY4NSwiZXhwIjoxNjAzNjM1Mjg1fQ.MJSd5bwpTFfwCkArZao3Td-thXXuA6xabMgp9Ek0s3c" //the token is a variable which holds the token
        }
      })
    setBudget(data.data.data.user.budget)
    console.log(data);
    }

    fetchData(`/profile`);
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Recent Deposits</Title> */}
      <Typography component="p" variant="h4">
        ${budget}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" to="/budget">
          View Budget
        </Link>
      </div>
    </React.Fragment>
  );
}