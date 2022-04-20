import Typography from '@mui/material/Typography';
import * as React from 'react';
import EventSlider from './EventSlider';

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
        <EventSlider/>
        </React.Fragment>
    )
}