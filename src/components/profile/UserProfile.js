import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, Box, Button, Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from '@reach/router';
import React, { useState } from 'react';
import { AlumniUsers, userTypes } from '../data/userData';
import RecommendButton from '../recommend/RecommendButton';
import ConnectButton from '../search/ConnectButton';
import Details from './Details';
import RoadMapLink from './RoadMapLink';

const styleProfileIcon = {
  width: "96vw",
  height: "20vh",
  marginBottom: -12,
};

export default function UserProfile() {

  const {id} = useParams()
  const userData = AlumniUsers.find(user => user?.id == id);

  const [state, setState] = useState(userData)

  return (
    <Box sx={{margin: 3}}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar sx={{height: "150px", width: "150px"}} src={state?.profilePh}></Avatar> {/* <AccountCircleIcon style={styleProfileIcon} /> */}
      </Box>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          marginBottom: -1,
        }}
      >
        {`${state?.firstName} ${state?.lastName}`}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {
          (state?.type === userTypes.ALUMNI)?
          `${state?.domain}`:`Bachelors in ${state?.domain}`

        }
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

        {
          (state?.isConnected)?<Button variant="contained" disabled>Connected</Button>:
          <ConnectButton variant="contained"/>
        }

        

        {
          (state?.type === userTypes.STUDENT) && <RecommendButton/>

        }

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

      {/* Roadmap to only be displayed for students */}
      {
          (state?.type === userTypes.STUDENT)?<RoadMapLink/>:<></>
      }
      
    
    </Box>
  );
}
