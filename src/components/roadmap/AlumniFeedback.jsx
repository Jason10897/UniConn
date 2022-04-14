import React from "react";
import { Box, List, Avatar, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { styled } from "@mui/material/styles";

const alumni = [{id: 1, name: 'John Doe', feedback: "Feedback 1"},
                {id: 2, name: 'Claudia Alves', feedback: "Feedback 2"},
                {id: 3, name: 'Jane Rodriguez', feedback: "Feedback 3"}]

const SendButton = styled(Button)(({ theme }) => ({
    minWidth: "10px",
    maxWidth: "40px",
    }));

export default function AlumniFeedback () {
    return (
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <List sx={{ maxHeight: 200, overflow: "auto"}}>
                {alumni.map(item => 
                    {return <Card variant="outlined" sx={{ marginBottom: "5px"}}>
                            <CardContent sx={{ display: "flex", flexDirection: "row" }}>
                            <Avatar></Avatar>
                            <Box sx={{ marginLeft: "15px" }}>
                                <Typography sx={{ fontWeight: "bold" }}>adjective</Typography>
                                <Typography variant="body2">well meaning and kindly</Typography>
                            </Box>
                            </CardContent>
                            </Card>})}
                </List>
                <TextField id="outlined-basic" label="Next Step" variant="outlined" sx ={{marginTop: "5px", width: "1"}}
                InputProps={{endAdornment:  <SendButton size="small" variant="contained" 
                                                endIcon={<SendIcon sx = {{marginLeft: "-10px"}}/>}>
                                            </SendButton>}}/>
            </Box>
    );
}