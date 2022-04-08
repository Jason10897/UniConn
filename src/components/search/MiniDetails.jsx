import { Button, Typography } from "@mui/material";
import { navigate } from "@reach/router";
import React from "react";

export default function MiniDetails(){


    const viewFullProfile = () =>{
        navigate("/profile")
    }

    return (
        <div>
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

            <Button>Connect</Button>
            <Button onClick={viewFullProfile}>View full Profile</Button>
        </div>
    )
}