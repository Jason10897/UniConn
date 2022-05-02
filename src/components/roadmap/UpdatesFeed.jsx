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
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Prompt from "./Prompt";

const PromptButton = styled(Button)(({ theme }) => ({
    minWidth: "10px",
    maxWidth: "400px",
    margin: 5,
  }));

export default function UpdatesFeed(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List sx={{ minHeight: 200, maxHeight: 200, overflow: "auto" }}>
        {[...props.update].reverse().map((item) => {
          return (
            <Card key={item.id} variant="outlined" sx={{ marginBottom: "5px" }}>
              <CardContent sx={{ display: "flex", flexDirection: "row" }}>
                <Avatar src={item.src}></Avatar>
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ maxWidth: 1, textAlign: "justify", whiteSpace:"pre-line" }}
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
      <PromptButton
                  size="small"
                  variant="contained"
                  onClick={props.displayPrompts}
                  sx={{ fontSize: "10px", lineHeight: "10px", padding: 1}}
                >
                  Post an update
                </PromptButton>
                <Prompt
                  openPrompts={props.openPrompts}
                  hidePrompts={props.hidePrompts}
                  addPrompts={props.addPrompts}
                ></Prompt>
    </Box>
  )
}
