import ChatIcon from '@mui/icons-material/Chat';
import { Alert, Avatar, Box, Button, Divider, Snackbar, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from '@reach/router';
import React, { useState } from 'react';
import { AlumniUsers, userTypes } from '../data/userData';
import RecommendButton from '../recommend/RecommendButton';
import ConnectButton from '../search/ConnectButton';
import Details from './Details';
import RoadMapLink from './RoadMapLink';

export default function UserProfile({setActive}) {
  React.useEffect(() => {
    setActive('profile')
    window.scrollTo(0, 0)
  }, [setActive])

  const {id} = useParams()
  const userData = AlumniUsers.find(user => user?.id == id);

  const [state, setState] = useState(userData)

  const [requestSent, setRequestSent] = useState(!!userData?.requestSent);
    const [snackbarOpen, setOpen] = useState(false)

    const handleSnackClose = () =>{
        setOpen(false)
    }

    const showsnackBar = () =>{
        setRequestSent(true)
        setOpen(true)
    }

  return (
    <Box sx={{margin: 3}}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar sx={{height: "150px", width: "150px"}} src={state?.profilePh}></Avatar>
      </Box>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{
          marginBottom: 0,
        }}
      >
        {`${state?.firstName} ${state?.lastName}`}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {
          (state?.type === userTypes.ALUMNI)?
          `${state?.company}, ${state?.location}`:`Bachelors in ${state?.domain}`

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
          (state?.isConnected || requestSent)?<Button variant="contained" disabled>{(requestSent)?'Request Sent':'Connected'}</Button>:
          <Button variant="contained" onClick={showsnackBar}>Connect</Button>
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
          (state?.isConnected && state?.type === userTypes.STUDENT)?<RoadMapLink/>:<></>
      }
      <Snackbar open={snackbarOpen} anchorOrigin={{ vertical:"bottom", horizontal: "center"}}
      autoHideDuration={6000} onClose={handleSnackClose}>
      <Alert onClose={handleSnackClose} variant="filled" severity="success" sx={{ width: '100%' }}>
          Connection request sent successfully!
      </Alert>
      </Snackbar> 
    </Box>
  );
}
