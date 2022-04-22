import Typography from '@mui/material/Typography';
import * as React from 'react';
import EventSlider from './EventSlider';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { navigate } from '@reach/router';



export default function HomePage(){
  const viewSearchPage = () =>{
    navigate("/search")
}

  return (
        <React.Fragment>
        <Typography
          component="h1"
          variant="h2"
          align="left"
          color="text.primary"
          gutterBottom
        >
          UniConn
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          align="left"
          color="text.primary"
          width={800}
          gutterBottom
        >
          Get the world's most loved alumni engagement platform and build a thriving alumni community online to engage your alumni digitally. 
        </Typography>
        
        {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
        Add University Events Slider Here
        </Typography> */}

        <Box textAlign={'left'}>
        <Button variant="contained" onClick={viewSearchPage} sx={{
          marginBottom:2,
          backgroundColor:"green"
        }}>Search and Connect with Alumni/Students</Button>
        </Box>

        <EventSlider/>
        </React.Fragment>
    )
}