import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Drawer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AlumniCard from './AlumniCard';
import MiniDetails from './MiniDetails';

export default function CardGrid({ style, isSelectable, drawerenabled=true, data=[] , emptyMessage }){
    
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [drawerDetails, setDrawerDetails] = useState({})


    const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }

    const onCardImageClick = (details) =>{
        setDrawerDetails(details)
        setDrawerOpen(true)
    }

    const cards = data.map((dt) => <AlumniCard data={dt} isSelectable={isSelectable} onClick={(drawerenabled)?onCardImageClick:null}/>)
    return(
        <Box display="flex" flexWrap="wrap" style={{width:'100%', height:'fit-content', ...style}}>
            {(cards?.length)?cards.map(card => card):
            <Box display='flex' justifyContent='center' alignItems='center' sx={{width:'100%', height:'10em'}}>
                <Typography variant='h5'><SearchOffIcon/>{emptyMessage || 'No results found'}&nbsp;</Typography>
            </Box>
            }

            <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={toggleDrawer}
          >
            {<MiniDetails data={drawerDetails}/>}
          </Drawer>
        </Box>
    )


}