import React, {useState} from "react";
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

let stepText = "";

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

const editStepText = (event) => {
  stepText = event.target.value;
};

export default function StudentPlan() {
  const [plan, setStep] = useState([
    { id: 1, text: "Step 1" },
    { id: 2, text: "Step 2" },
    { id: 3, text: "Step 3" },
    { id: 4, text: "Step 4" },
    { id: 5, text: "Step 5" },
  ]);

  const addStep = () => {
    setStep([...plan, {id: plan.slice(-1)[0].id + 1, text: stepText}]);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List sx={{ minHeight: 200, maxHeight: 200, overflow: "auto" }}>
        <h3>Goal</h3>
        {plan.map((item) => {
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
        onChange={editStepText}
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
                  onClick={addStep}
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
