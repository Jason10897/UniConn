import React from 'react';
import { Typography } from '@mui/material';
import { Link } from '@reach/router';

export default function RoadMapLink() {
  return (
      <>
    <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                Roadmap
            </Typography>
            <Typography variant="body1" gutterBottom component="div" sx={{ textAlign: 'left' }}>
            <Link to='/roadmap'>Click here</Link> to view roadmap.
        </Typography>
        </>
  )
}
