import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { navigate } from '@reach/router';
import React, { useState } from 'react';
import ConnectButton from './ConnectButton';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function MiniDetails({data}){


    const viewFullProfile = () =>{
        navigate(`/profile/${data?.id}`)
    }

    const [requestSent, setRequestSent] = useState(!!data?.requestSent);
    const [snackbarOpen, setOpen] = useState(false)

    const handleSnackClose = () =>{
        setOpen(false)
    }

    const showsnackBar = () =>{
        setRequestSent(true)
        setOpen(true)
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
                {(data?.isConnected || requestSent)?
                <Button variant="contained" sx={{margin:'5px'}} disabled>{requestSent?'Request sent':'Connected'}</Button>
                :<Button onClick={showsnackBar} variant="contained" sx={{margin:'5px'}}>Connect</Button>
                }
                <Button variant="contained" sx={{margin:'5px'}} onClick={viewFullProfile}>View full Profile</Button>
            </Box>
            <Snackbar open={snackbarOpen} anchorOrigin={{ vertical:"bottom", horizontal: "center"}}
                    autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                        Connection request sent successfully!
                    </Alert>
                </Snackbar>  
        </Box>
    )
}