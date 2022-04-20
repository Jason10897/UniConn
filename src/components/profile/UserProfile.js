import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, Box, Button, Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import RecommendButton from '../recommend/RecommendButton';
import Details from './Details';
import RoadMapLink from './RoadMapLink';

const styleProfileIcon = {
  width: "96vw",
  height: "20vh",
  marginBottom: -12,
};

export default function UserProfile() {
  return (
    <Box sx={{margin: 3}}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar sx={{height: "150px", width: "150px"}}></Avatar> {/* <AccountCircleIcon style={styleProfileIcon} /> */}
      </Box>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          marginBottom: -1,
        }}
      >
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

        <RecommendButton/>

        <ChatIcon />
      </Stack>
      <Divider
        sx={{
          marginTop: 2,
          marginBottom:1
        }}
      />
      <Details title="About" />
      <Details title="Work Experience" />
      <Details title="Education" />
      <Details title="Projects" />
      <RoadMapLink/>
    </Box>
  );
}
