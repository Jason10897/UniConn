import Typography from '@mui/material/Typography';
import * as React from 'react';
import EventSlider from './EventSlider';
import { Box } from '@mui/material';
import { Button } from '@mui/material';

export default function HomePage(){
    return (
        <React.Fragment>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          UniConn
        </Typography>
        {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
        Add University Events Slider Here
        </Typography> */}
        <Box>
        <Button variant="contained" sx={{
          marginBottom:2,
          maxWidth: "250px",
          maxHeight: "200px",
          minWidth: "150px",
          minHeight: "150px"
        }}>Search and Connect <br /> with <br /> Alumni/Students</Button>
        <EventSlider/>
        </Box>
        
        </React.Fragment>
    )
}