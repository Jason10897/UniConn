import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, TextField, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

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

const plan = [{id: 1, text: "Step 1"}, {id: 2, text: "Step 2"}, {id: 3, text: "Step 3"},
                {id: 4, text: "Step 4"}, {id: 5, text: "Step 5"}, {id: 6, text: "Step 6"}, {id: 7, text: "Step 7"}];

export default function StudentPlan () {
    return (
        <Box sx={{ width: "100%", bgcolor: "background.paper"}}>
                <List sx={{ minHeight: 200, maxHeight: 200, overflow: "auto"}}>
                <h3>Goal</h3>
                {plan.map(item => 
                    {return <ListItem disablePadding key={item.id}>
                                <StyledListPad>
                                    <Bullet />
                                </StyledListPad>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItem>})}
                </List>
                <TextField id="outlined-basic" label="Next Step" variant="outlined" sx ={{marginTop: "6px", width: "1"}}
                InputProps={{endAdornment:  <SendButton size="small" variant="contained" 
                                                endIcon={<SendIcon sx = {{marginLeft: "-10px"}}/>}>
                                            </SendButton>}}/>
        </Box>
    );
}