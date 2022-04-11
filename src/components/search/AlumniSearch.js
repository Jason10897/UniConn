import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React from "react";
import Chip from '@mui/material/Chip';
import { width } from '@mui/system';
import CardGrid from './CardGrid';
import Filters from './filters/Filters';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const ChipContainer = styled('div')(({theme}) => ({
      display: 'flex',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center'
  }))

export default function Alumnisearch(){
    return (
        <Box display={"flex"} alignItems="center" flexDirection="column">
            <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <ChipContainer>
              <Chip label="All" variant="outlined"/>
              <Chip label="Alumni" variant="outlined"/>
              <Chip label="Student" variant="outlined"/>
          </ChipContainer>
          <Divider/>
          <Box display='flex' flexDirection='row'>
              <Filters style={{flex: 1}}/>
              <CardGrid style={{flex: 4}}/>  
          </Box>
        </Box>
    )
}