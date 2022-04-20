import { Box, Button, Typography } from '@mui/material';
import { navigate } from '@reach/router';
import React from 'react';

export default function MiniDetails({data}){


    const viewFullProfile = () =>{
        navigate("/profile")
    }

    return (
        <Box sx={{marginTop: '75px',  minWidth: '20em', padding: '15px'}}>
            <Typography variant="h6">
                Details
            </Typography>
            <Typography variant="body2">
                Name: {`${data?.firstName} ${data?.lastName}`}
            </Typography>
            <Typography variant="body2">
                Status: {data?.type}
            </Typography>
            <Typography variant="body2">
                Branch: {data?.domain}
            </Typography>
            <Typography variant="body2">
                Last Activity: 2 days ago
            </Typography>

            <Box display='flex' flexDirection='column' sx={{padding: '20px'}}>
                <Button variant="contained" sx={{margin:'5px'}} disabled={data?.isConnected}>{data?.isConnected?'Connected':'Connect'}</Button>
                <Button variant="contained" sx={{margin:'5px'}} onClick={viewFullProfile}>View full Profile</Button>
            </Box>
            
        </Box>
    )
}