import { Alert, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'

export default function ConnectButton({style, variant, size, endIcon, startIcon, message}){

    const [snackbarOpen, setOpen] = useState(false)

    const handleSnackClose = () =>{
        setOpen(false)
    }

    const showsnackBar = () =>{
        setOpen(true)
    }

    return (
        <React.Fragment>
            <Button onClick={showsnackBar} variant={variant} size={size} endIcon={endIcon} startIcon={startIcon} sx={style}>Connect</Button>
            <Snackbar open={snackbarOpen} anchorOrigin={{ vertical:"bottom", horizontal: "center"}}
            autoHideDuration={6000} onClose={handleSnackClose}>
            <Alert onClose={handleSnackClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                {message || "Connection request sent successfully!"}
            </Alert>
            </Snackbar>
        </React.Fragment>

    )
}