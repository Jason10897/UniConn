import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const StyledListPad = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "25px",
}));

const Bullet = styled(CircleIcon)(({ theme }) => ({
  fontSize: "10px",
  color: "black",
}));

const SendButton = styled(Button)(({ theme }) => ({
  minWidth: "10px",
  maxWidth: "40px",
  marginRight: -10,
}));

const PromptButton = styled(Button)(({ theme }) => ({
  minWidth: "10px",
  maxWidth: "70px",
  margin: 5,
}));

export default function StudentPlan(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List sx={{ minHeight: 200, maxHeight: 200, overflow: "auto" }}>
        <h5>Goal</h5>
        {props.plan.map((item) => {
          return (
            <ListItem disablePadding key={item.id}>
              <StyledListPad>
                <Bullet />
              </StyledListPad>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          );
        })}
      </List>
      <TextField
        id="outlined-basic"
        label="Next Step"
        variant="outlined"
        value={props.value}
        onChange={props.edit}
        sx={{ marginTop: "6px", width: "1" }}
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position="start">
                <PromptButton
                  size="small"
                  variant="contained"
                  sx={{ fontSize: "10px", lineHeight: "10px", padding: 1 }}
                >
                  Prompts
                </PromptButton>
              </InputAdornment>
              <InputAdornment position="start">
                <SendButton
                  size="small"
                  variant="contained"
                  onClick={props.add}
                  endIcon={<SendIcon sx={{ marginLeft: "-10px" }} />}
                ></SendButton>
              </InputAdornment>
            </>
          ),
        }}
      />
    </Box>
  );
}
