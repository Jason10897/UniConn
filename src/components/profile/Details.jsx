import React from 'react'
import Typography from "@mui/material/Typography";

export default function Details(params) {
  return (
      <>
    
      <Typography variant="h5" gutterBottom component="div" sx={{textAlign:'left'}}>
        {params.title}
      </Typography>

      <Typography variant="body1" gutterBottom component="div" sx={{textAlign:'left'}}>
        {titleDetails(params.title)}
      </Typography>
      
    </>
  )
}
function titleDetails(title){
    switch(title){
        case 'About':
            return "About info"
            break;
            case 'Work Experience':
            return "Work Ex info"
            break;
            case 'Education':
            return "Education info"
            break;
            case 'Projects':
            return "Projects info"
            break;
            case 'Roadmap':
            return "Roadmap info"
            break;
    
    }
}

