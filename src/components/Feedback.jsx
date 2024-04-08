// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Feedback = () => {
//     const [FeedbackItems, setFeedbackItems] = useState([]);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchFeedbackItems = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/feedback');
//                 console.log(response.data);
//                 setFeedbackItems(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch feedback items', error);
//             }
//         };

//         fetchFeedbackItems();
//     }, []);

//     const handleBackClick = () => {
//         navigate('/admin');
//     };

//     return (
//         <div>
//             <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell style={{ fontSize: '20px' }}>Customer name</TableCell>
//                             <TableCell style={{ fontSize: '20px' }}>Email</TableCell>
//                             <TableCell style={{ fontSize: '20px' }}>Comments</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {FeedbackItems.map((item, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{item.name}</TableCell>
//                                 <TableCell>{item.email}</TableCell>
//                                 <TableCell>{item.feedback}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
//                 <Button variant="contained" onClick={handleBackClick}>
//                     Back
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default Feedback;

import React,{useState} from 'react'
import { Grid,TextField,Typography,Button } from '@mui/material'
import axios from 'axios';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
      };


      const handleFeedback = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/feedback', formData);
            console.log(formData)  
            console.log("Feedback successfully added");
            alert("Your feedback has been submitted!");
        } catch (error) {
            console.error("Feedback submission failed", error);
        }
    };
  return (
    <div>
        <section className="feedback-section">
  <Grid container spacing={4} alignItems="center" justifyContent="space-between" style={{ margin: '5px' }}>
    
    <Grid item xs={12} md={6}>
      <Typography variant="h4" component="h2" gutterBottom style={{ textAlign: 'center' }}>
         feedback
      </Typography>
      <form noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleFeedback}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />

          </Grid>
          <br /><br />
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              required
              id="feedback"
              name="feedback"
              label="Your comments"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={10} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type='submit' variant="contained" color="primary">
              Submit
            </Button> 
          </Grid>
        </Grid>
      </form>
    </Grid>
    </Grid>
    </section>
    </div>
  )
}

export default Feedback