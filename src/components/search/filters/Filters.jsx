import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Filters({style}){
    const domains = [
        'Computer Science', 'Business', 'Engineering',
        'Medicine', 'Law', 'Others'
    ]
    return (
        <Box display='flex' flexDirection='column' style={style}>
            <div>
            <FormLabel component="legend">Domain</FormLabel>
            <FormGroup>
                {
                    domains.map(domain =>(
                        <FormControlLabel
                            control={
                            <Checkbox name={domain} />
                            }
                            label={domain}
                        />
                    ))
                }                
            </FormGroup>
        </div>
            <FormControl fullWidth size='small' style={{padding: '5px'}}>
                <InputLabel id="demo-simple-select-label">Company</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>Google</MenuItem>
                    <MenuItem value={20}>Microsoft</MenuItem>
                    <MenuItem value={30}>Amazon</MenuItem>
                </Select>
            </FormControl>
                <FormControl fullWidth size='small' style={{padding: '5px'}}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>Chicago</MenuItem>
                    <MenuItem value={20}>Seattle</MenuItem>
                    <MenuItem value={30}>Mountain View</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}