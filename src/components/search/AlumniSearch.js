import React, { useEffect, useReducer, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Divider } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import CardGrid from './CardGrid';
import Filters from './filters/Filters';
import FilterReducer from './reducer/FilterReducer';
import { AlumniUsers, defaultFilterState, userTypes } from '../data/userData';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '0 !important',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  }));

export  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export const ChipContainer = styled('div')(({theme}) => ({
      display: 'flex',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center'
  }))

export default function Alumnisearch(){

    const [filterState, dispatch] = useReducer(FilterReducer,defaultFilterState)

    const [userData, setUserData] = useState([])

    const location = useLocation()
    const {filter} = parse(location.search)

    useEffect(() => {
      dispatch({type:'filter',payload: filter})
    }, [dispatch, filter]);

    useEffect(()=>{
      console.log(filterState)
      const data = AlumniUsers
      const filtered = data.filter(user =>{
        return (!filterState.domain.length?true:(filterState.domain.indexOf(user.domain) > -1)) &&
        (!filterState.company?true:user.company === filterState.company) &&
        (!filterState.location?true:user.location === filterState.location) &&
        ((filterState.search == '')?true:`${user.firstName} ${user.lastName}`.toLowerCase().startsWith(filterState.search.toLowerCase())) &&
        ((filterState.filter == 'All')?true:(filterState.filter == 'Student' && user.type == userTypes.STUDENT) || (filterState.filter == 'Alumni' && user.type == userTypes.ALUMNI))
      })
      setUserData(filtered)
    },[filterState])

    const onSearchTypechange = (value) =>{
      dispatch({type:'filter', payload: value})
    }

    const onSearchchange = (e) =>{
      dispatch({type:'search', payload: e.target.value})
    }

    const filters = ['All', 'Alumni', 'Student']

    return (
        <Box display={"flex"} alignItems="center" flexDirection="column">
            <Search>
            <StyledInputBase
              sx={{width: '100%'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearchchange}
              value={filterState.search}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <ChipContainer >
            {
              filters.map(filter => <Chip sx={{padding:'0 5px', margin:'5px 10px'}} label={filter} variant={(filterState.filter === filter)?'filled':'outlined'} color='primary' 
              onClick={(v)=>onSearchTypechange(filter)}/>)
            }
          </ChipContainer>
          <Divider/>
          <Box display='flex' flexDirection='row' sx={{width: '100%'}}>
              <Filters style={{flex: 1}} dispatch={dispatch} filterState={filterState}/>
              <CardGrid style={{flex: 4}} data={userData}/>  
          </Box>
        </Box>
    )
}