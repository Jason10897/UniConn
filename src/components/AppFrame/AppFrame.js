import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
//import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Copyright from './Copyright';
import ConnectMenu from './ConnectMenu';
import EventsMenu from './EventsMenu';
import {Link} from '@reach/router'



export default function AppFrame(props) {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, zIndex: (theme) => theme.zIndex.drawer + 1  }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flex: 0.5 }} style={{textAlign: 'left'}}>
            <Link to='/'>
            UniConn
            </Link>
            
          </Typography>
          <nav style={{flex: 4, display: 'flex', justifyContent: 'left'}}> 
            <ConnectMenu/>
            <EventsMenu/>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6, marginTop: 1 }}>
        {props.children}
      </Container>
      {/* End hero unit */}

      {/* Footer */}
      <Container
        maxWidth="lg"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
