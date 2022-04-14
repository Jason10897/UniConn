import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from "@mui/material/styles";
import { textAlign } from "@mui/system";

const StyledListPad = styled(ListItemIcon)(({ theme }) => ({
    minWidth: "25px"
  }));
  
const Bullet = styled(CircleIcon)(({ theme }) => ({
    fontSize: "10px",
    color: "black"
  }));

const SendButton = styled(Button)(({ theme }) => ({
    minWidth: "10px",
    maxWidth: "40px",
  }));

const plan = [{id: 1, text: "Step 1"}, {id: 2, text: "Step 2"}, {id: 3, text: "Step 3"}];

export default function StudentPlan () {
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                <List>
                {plan.map(item => 
                    {return <ListItem disablePadding key={item.id}>
                                <StyledListPad>
                                    <Bullet />
                                </StyledListPad>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItem>})}
                </List>
                <TextField id="outlined-basic" label="Next Step" variant="outlined" 
                InputProps={{endAdornment:  <SendButton size="small" variant="contained" 
                                                endIcon={<SendIcon sx = {{marginLeft: "-10px"}}/>}>
                                            </SendButton>}}/>
            </Box>
    );
}