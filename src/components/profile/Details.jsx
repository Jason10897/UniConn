import React from 'react'
import Typography from "@mui/material/Typography";

export default function Details(params) {
  return (
      <>
    
      <Typography variant="h5" gutterBottom component="div" sx={{textAlign:'left'}}>
        {params.title}
      </Typography>

      <Typography variant="body1" gutterBottom component="div" sx={{textAlign:'left'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at officiis debitis asperiores aliquam cum voluptates maiores repellat ipsam impedit dolorem et est tempore molestiae animi incidunt rerum, laudantium, magni maxime! Voluptatum iste dolorem voluptate magni, eius nesciunt eum cum?
      </Typography>
      
    </>
  )
}


