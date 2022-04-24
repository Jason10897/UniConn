import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Companies, departments, Locations } from '../../data/userData';

export default function Filters({style, dispatch, filterState}){
    const domains = Object.values(departments)
    const companies = Object.values(Companies)
    const locations = Object.values(Locations)

    const onDomainChange = (e) =>{
        const value = e.target.value;

        if(filterState.domain.indexOf(value) > -1){    
            const currDomain = filterState.domain;
            currDomain.splice(currDomain.indexOf(value),1)
            dispatch({type:'domain',payload:currDomain})
        }else{
            dispatch({type:'domain',payload:[...filterState.domain, value]})
        }
    }

    const onLocationChange = (e) =>{
        dispatch({type:'location', payload: e?.target?.value || ''})
    }

    const onCompanyChange = (e) =>{
        dispatch({type:'company', payload: e?.target?.value || ''})
    }

    return (
        <Box display='flex' flexDirection='column' style={style}>
            <div style={{textAlign:'left'}}>
            <FormLabel component="legend"><b>Domain</b></FormLabel>
            <FormGroup>
                {
                    domains.map(domain =>(
                        <FormControlLabel
                            sx={{margin:0}}
                            control={
                            <Checkbox onChange={onDomainChange} 
                            sx={{padding:'5px'}}
                            value={domain} 
                            name={domain} 
                            checked={filterState?.domain.indexOf(domain) > -1} />
                            }
                            label={domain}
                        />
                    ))
                }                
            </FormGroup>
        </div>
            <FormControl fullWidth size='small' style={{padding: '5px'}}>
                <InputLabel id="comp-simple-select-label">Company</InputLabel>
                <Select
                    labelId="comp-simple-select-label"
                    id="comp-simple-select"
                    label="Company"
                    value={filterState?.company}
                    onChange={onCompanyChange}
                >
                    <MenuItem sx={{padding:'15px'}}  value={''} selected={'' === filterState?.company}></MenuItem>
                    {companies.map((company)=><MenuItem value={company}>{company}</MenuItem>)}
                </Select>
            </FormControl>
                <FormControl fullWidth size='small' style={{padding: '5px'}}>
                <InputLabel id="loc-simple-select-label">Location</InputLabel>
                <Select
                    labelId="loc-simple-select-label"
                    id="loc-simple-select"
                    label="Location"
                    value={filterState?.location}
                    onChange={onLocationChange}
                >
                    <MenuItem sx={{padding:'15px'}}  value={''} selected={'' === filterState?.location}></MenuItem>
                    {locations.map((location)=><MenuItem value={location}>{location}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
}