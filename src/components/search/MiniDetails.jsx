import { Box, Button, Typography } from "@mui/material";
import { navigate } from "@reach/router";
import React from "react";

export default function MiniDetails(){


    const viewFullProfile = () =>{
        navigate("/profile")
    }

    return (
        <Box sx={{marginTop: '75px',  minWidth: '20em', padding: '15px'}}>
            <Typography variant="h6">
                Details
            </Typography>
            <Typography variant="body2">
                Name: User Name
            </Typography>
            <Typography variant="body2">
                Status: Student
            </Typography>
            <Typography variant="body2">
                Branch: Computer Science
            </Typography>
            <Typography variant="body2">
                Last Activity: 2 days ago
            </Typography>

            <Box display='flex' flexDirection='column' sx={{padding: '20px'}}>
                <Button variant="contained" sx={{margin:'5px'}}>Connect</Button>
                <Button variant="contained" sx={{margin:'5px'}} onClick={viewFullProfile}>View full Profile</Button>
            </Box>
            
        </Box>
    )
}