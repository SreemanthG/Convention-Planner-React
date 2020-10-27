import React, { useState,useEffect  } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from '../../axios'
import { set } from 'mongoose';
import Skeleton from '@material-ui/lab/Skeleton';
// import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

// const rows = [
//   createData(0, '16 August, 2020', 'Statathon20', 'Vellore, TN', 200, 312.44),
//   createData(1, '16 August, 2020', 'Mathathon20', 'VIT, AP', 542, 866.99),
//   createData(2, '16 August, 2020', 'Statathon19', 'Hyderabad, TL', 700, 100.81),
//   createData(3, '16 August, 2020', 'Mathathon19', 'Mumbai, MH', 123, 654.39),
//   createData(4, '15 August, 2020', 'Statathon18', 'Long Branch, NJ', 430 , 212.79),
// ];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

// async function getEventDetails(str){
//   await axios
//             .get(str, {
//               headers: {
//                 Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzI5Mjg4NSwiZXhwIjoxNjAzMjk2NDg1fQ.Y_qRag5J9r8Fhn14IzmPYUHztJvlxxBsyWkPS_V_mpo" //the token is a variable which holds the token
//               }
//             })
//             .then(res => {
//                 const data = res.data
//                 console.log(data.data)
//                 return data.data
// })
//             .catch((error) => {
//                 console.log(error)
//             })
// }
export default function Orders() {
  const classes = useStyles();
  const [events, setEvents] = useState({});
  useEffect(() => {
    async function fetchData(str) {
    const data = await axios.get(str, {
        headers: {
          Authorization: localStorage.getItem("token")// 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzYzMTY4NSwiZXhwIjoxNjAzNjM1Mjg1fQ.MJSd5bwpTFfwCkArZao3Td-thXXuA6xabMgp9Ek0s3c" //the token is a variable which holds the token
        }
      })
    console.log(data);
      setEvents({events:data.data.data})
      // data.then(res => {
      //     console.log("ee4t")
      //     setEvents({events:res.data.data})
      // })
      // .catch((error) => {
      //     console.log(error)
      // })
    }

    fetchData("transactions/5f8dd0d9a32f520ed4245414?offset=2");
  });
  // console.log(events);
  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell>S.no</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Transactions Name</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { events.events? events.events.map((row,i) => (
            <TableRow key={row._id}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{row.timestamp}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          )):  <><TableRow>
          <TableCell><Skeleton variant="rect"/></TableCell>
          <TableCell><Skeleton variant="rect" /></TableCell>
          <TableCell><Skeleton variant="rect" /></TableCell>
          {/* <TableCell><Skeleton variant="rect" /></TableCell> */}
          <TableCell align="right"><Skeleton variant="rect" /></TableCell>
        </TableRow> 
        <TableRow>
          <TableCell><Skeleton variant="rect"/></TableCell>
          <TableCell><Skeleton variant="rect" /></TableCell>
          <TableCell><Skeleton variant="rect" /></TableCell>
          {/* <TableCell><Skeleton variant="rect" /></TableCell> */}
          <TableCell align="right"><Skeleton variant="rect" /></TableCell>
        </TableRow> 
        <TableRow>
          <TableCell><Skeleton variant="rect"/></TableCell>
          <TableCell><Skeleton variant="rect" /></TableCell>
          <TableCell><Skeleton variant="rect" /></TableCell>
          {/* <TableCell><Skeleton variant="rect" /></TableCell> */}
          <TableCell align="right"><Skeleton variant="rect" /></TableCell>
        </TableRow> 
        </>
        }
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}