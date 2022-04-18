import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React from "react";
import { Checkbox, Tooltip } from '@mui/material';
import ChatIcon from "@mui/icons-material/Chat";


export default function AlumniCard({data, onClick, isSelectable}){

    // const ConnectIcon = (data?.isConnected)?<ChatIcon/>:<AddBoxIcon/>

    return (
        <Card sx={{ width: '22%',margin: '10px' }}>
          <CardMedia
            component="img"
            height="200"
            image="https://cdn4.iconfinder.com/data/icons/for-your-interface-part-3/128/User-512.png"
            alt="User icon"
            onClick={()=>onClick(data)}
          />
          <CardContent sx={{display: 'flex', padding: '3px !important'}}>
            <div style={{display:'flex', flexDirection: 'column', flex: 1, alignItems:'left'}}>
                <Typography gutterBottom variant="h6" component="div">
                {`${data?.firstName} ${data?.lastName}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {data?.domain}
                </Typography>
            </div>
            <CardActions>
            <Tooltip title={isSelectable ? 'Select' : (data?.isConnected)?'Message':'Connect'}>
              {isSelectable ? <Checkbox/> : (data?.isConnected)?<ChatIcon/>:<AddBoxIcon/>}
            </Tooltip>
            </CardActions>
          </CardContent>
        </Card>
      );
}