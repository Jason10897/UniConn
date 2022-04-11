import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AlumniCard from "./AlumniCard";
import MiniDetails from "./MiniDetails";


export default function CardGrid({ style }){
    
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [drawerDetails, setDrawerDetails] = useState({})

    

    const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }

    const onCardImageClick = (details) =>{
        setDrawerDetails(details)
        setDrawerOpen(true)
    }

    const cards = Array(20).fill(<AlumniCard onClick={onCardImageClick}/>)


    return(
        <Box display="flex" flexWrap="wrap" style={{width:'100%', ...style}}>
            {cards.map(card => card)}
            <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={toggleDrawer}
          >
            {<MiniDetails/>}
          </Drawer>
        </Box>
    )


}