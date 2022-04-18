import SearchIcon from '@mui/icons-material/Search';
import { Alert, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../search/AlumniSearch';
import CardGrid from '../search/CardGrid';

export default function RecommendButton() {
  const [open, setOpen] = React.useState(false);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRecommend = () => {
    setSnackbarOpen(true)
    setOpen(false)
  }

  const handleSnackClose = () => {
    setSnackbarOpen(false)
  }


  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
      Recommend
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Find Recommendation for Bob Miller</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <CardGrid isSelectable={true} drawerenabled={false}/>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleRecommend}>Recommend</Button>
        </DialogActions>
      </Dialog>
      
        <Snackbar open={snackbarOpen} anchorOrigin={{ vertical:"bottom", horizontal: "center"}}
         autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} variant="filled" severity="success" sx={{ width: '100%' }}>
            Recommendation sent successfully!
        </Alert>
        </Snackbar>
    </React.Fragment>
  );
}
