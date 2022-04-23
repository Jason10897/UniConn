import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { AlumniUsers } from '../data/userData';
import AlumniCard from './AlumniCard';
import MiniDetails from './MiniDetails';


export default function CardGrid({ style, isSelectable, drawerenabled=true, data=[] }){
    
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
        <Box display="flex" flexWrap="wrap" style={{width:'100%', ...style}}>
            {cards.map(card => card)}
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