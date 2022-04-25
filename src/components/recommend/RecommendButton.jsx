import SearchIcon from '@mui/icons-material/Search';
import { Alert, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react'
import { AlumniUsers, userTypes } from '../data/userData';
import { Search, SearchIconWrapper, StyledInputBase } from '../search/AlumniSearch';
import CardGrid from '../search/CardGrid';
import { useParams } from '@reach/router';


export default function RecommendButton() {
  const [open, setOpen] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  const [searchRes, setSearchRes] = useState([]);

  const {id} = useParams();
  const userData = AlumniUsers.find(user => user?.id == id);

  const [state, setState] = useState(userData);

  useEffect(() => {
    const filtered = AlumniUsers.filter(user=>{
      const displayName = `${user.firstName} ${user.lastName}`.toLocaleLowerCase();

      return searchText && 
      ((displayName.startsWith(searchText.toLocaleLowerCase()) ||
       user.lastName.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())||
       user.firstName.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())) &&
       user.type==userTypes.ALUMNI)
    })

    setSearchRes(filtered)
  }, [searchText]);

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

  const onSearchChanged = (e) => {
    setSearchText(e?.target?.value||'')
  }

  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
      Recommend
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Find Recommendation for {state.firstName} {state.lastName}</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '100%',
            }}
          >
            <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchText}
              onChange={onSearchChanged}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <CardGrid isSelectable={true} drawerenabled={false} data={searchRes}/>
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
