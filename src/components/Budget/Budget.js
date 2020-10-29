import React,{ useState,useEffect  }  from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from '../../axios'
import {Link} from 'react-router-dom'
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
 
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  button:{
    marginBottom:20
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [events, setEvents] = useState({});
  useEffect(() => {
    async function fetchData(str) {
    const data = await axios.get(str, {
        headers: {
          Authorization: localStorage.getItem("token")// 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGRkMGQ5YTMyZjUyMGVkNDI0NTQxNCIsImlhdCI6MTYwMzY0MzIzMywiZXhwIjoxNjAzNjQ2ODMzfQ.viwysV992ikkJE2NV9AGy1aJqH9CkbpmBa8nbhIjXjI" //the token is a variable which holds the token
        }
      })
    // console.log(data.data.data);
      setEvents({events:data.data.data})
    }

    fetchData("/events/");
  });
  const countBudget = (x)=>{
    var count = 0;
    x.forEach(function(trans){
        count+=trans.amount;
    })
    return count
  }
  return (
    <>
    <Link to ="/budget/predict">
    
     <Button variant="contained" className={classes.button} color="primary"> 
                    Predict Budget
      </Button>
    </Link>
<br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S. No</StyledTableCell>
            <StyledTableCell>Event Name</StyledTableCell>
            <StyledTableCell>Time Stamp</StyledTableCell>
            <StyledTableCell align="right">Budget</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         { events.events? events.events.map((row,i) => (
            
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {i+1}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.time}</StyledTableCell>
            
              <StyledTableCell align="right">{countBudget(row.transactions)}</StyledTableCell>
            </StyledTableRow>
         )):<></>}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}