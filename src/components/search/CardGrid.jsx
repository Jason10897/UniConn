import { Box } from "@mui/system";
import React from "react";
import AlumniCard from "./AlumniCard";


export default function CardGrid(){
    const cards = Array(20).fill(<AlumniCard/>)
    return(
        <Box display="flex" flexWrap="wrap" style={{width:'100%'}}>
            {cards.map(card => card)}
        </Box>
    )


}