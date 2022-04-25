import Typography from '@mui/material/Typography';
import * as React from 'react';
import EventSlider from './EventSlider';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { navigate } from '@reach/router';



export default function HomePage(){
  const viewSearchPage = () =>{
    navigate("/search?filter=All")
}

  return (
        <React.Fragment>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          UniConn
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Get the world's most loved alumni engagement platform and build a thriving alumni community online to engage your alumni digitally. 
        </Typography>

        <Box sx={{textAlign: "center", marginTop: 3, marginBottom: 3}}>
        <Button variant="contained" onClick={viewSearchPage} sx={{
          marginBottom:2,
          backgroundColor:"green"
        }}>Search and Connect with Alumni/Students</Button>
        </Box>
        <EventSlider/>
        </React.Fragment>
    )
}