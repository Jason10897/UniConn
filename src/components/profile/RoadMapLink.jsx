import React from 'react'
import { Typography } from '@mui/material'

export default function RoadMapLink() {
  return (
      <>
    <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                Roadmap
            </Typography>
            <Typography variant="body1" gutterBottom component="div" sx={{ textAlign: 'left' }}>
            <a href="./roadmap">Click here</a> to view roadmap.
        </Typography>
        </>
  )
}
