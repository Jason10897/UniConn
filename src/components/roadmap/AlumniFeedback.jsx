import React from "react";
import {
  Box,
  List,
  Avatar,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const SendButton = styled(Button)(({ theme }) => ({
  minWidth: "10px",
  maxWidth: "40px",
  marginRight: -3,
}));

export default function AlumniFeedback(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List sx={{ minHeight: 200, maxHeight: 200, overflow: "auto" }}>
        {props.alumni.map((item) => {
          return (
            <Card key={item.id} variant="outlined" sx={{ marginBottom: "5px" }}>
              <CardContent sx={{ display: "flex", flexDirection: "row" }}>
                <Avatar></Avatar>
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ maxWidth: 1, textAlign: "justify" }}
                    variant="body2"
                  >
                    {item.feedback}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </List>
      <TextField
        id="outlined-basic"
        label="Feedback"
        variant="outlined"
        onChange={props.edit}
        sx={{ marginTop: "5px", width: "1" }}
        InputProps={{
          endAdornment: (
            <SendButton
              size="small"
              variant="contained"
              onClick={props.add}
              endIcon={<SendIcon sx={{ marginLeft: "-10px" }} />}
            ></SendButton>
          ),
        }}
      />
    </Box>
  );
}
