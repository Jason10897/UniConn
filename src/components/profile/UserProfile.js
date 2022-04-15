import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { alpha, styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from '@mui/material';
import Details from "./Details";

const styleProfileIcon = {
  width: "96vw",
  height: "20vh",
  marginBottom:-12,
};

export default function UserProfile() {
  return (
    <>
      <AccountCircleIcon style={styleProfileIcon} /> {/* Profile Icon */}
      
      <Typography variant="h4" gutterBottom component="div" sx={{
          marginBottom:-1,
      }}>
        Name
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom component="div">
        Bachelors in Computer Science
      </Typography>
      
      {/* Buttons */}
      <Stack
        spacing={2}
        direction="row"
        sx={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained">Connect</Button>

        <Button variant="contained" color="success">
          Recommend
        </Button>

        <ChatIcon />

      </Stack>

      <Divider sx={{
          marginTop:2
      }} />
      
      <Details/>
    </>
  );
}
