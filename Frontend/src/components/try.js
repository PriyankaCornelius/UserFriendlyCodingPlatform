import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgressWithLabel from '@mui/material/CircularProgressWithLabel';
import { Typography } from '@mui/material';
import { Button } from 'react-bootstrap';


const Try = () => {
  const items = ['a', 'b'];
//   const {classes} = this.props
  
const [loading, setLoading] = useState(true);
const [feedback, setFeedback] = useState([]);

var data1= {
  "userId": "1",
  "Title": "Two Sum",
  "dataStructure": "Array",
}

useEffect(() => {
  const fetchData = async () =>{
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/get_feedback', data1);
      console.log("********** feedback :", response.data.Frequency);
      setFeedback(response.data)
    } catch (error) {
      console.error("***********",error.message);
    }
    setLoading(false);
  }
  fetchData();
}, []);
  
  return (     
    <div style={{ maxWidth: "100%" }}>
      <Typography component="h1" variant="h5"> FEEDBACK </Typography>
      <br></br><br></br>
      <Typography> Your latest question had the following difficulty criteria ::::: </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Acceptance</TableCell>
              <TableCell align="left">Difficulty</TableCell>
              <TableCell align="left">Frequency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow key={feedback.Acceptance}
                >
                <TableCell>{feedback.Acceptance}</TableCell>
                <TableCell>{feedback.Difficulty}</TableCell>
                <TableCell>{feedback.Frequency}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>
      <button className="btn btn-lg btn-success center modal-button">Get Next Question!</button>
      <br>
      </br>
      <Typography component="h1" variant="h5"> Calculated User Score : </Typography>
      <Typography component="h1" variant="h5">{feedback["User Score"]}</Typography>
      <CircularProgressWithLabel value={feedback["User Score"]} />
    </div>
  )
}

// export default withStyles(styles)(Try)
export default Try