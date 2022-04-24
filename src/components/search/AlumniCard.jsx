import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React from "react";
import { Checkbox, Chip, Tooltip } from '@mui/material';
import ChatIcon from "@mui/icons-material/Chat";
import { userTypes } from '../data/userData';


export default function AlumniCard({data, onClick, isSelectable}){

    // const ConnectIcon = (data?.isConnected)?<ChatIcon/>:<AddBoxIcon/>

    return (
        <Card sx={{ width: '22%',margin: '10px', maxHeight: '302px', position:'relative' }}>
          {
            isSelectable?
            <div style={{position:'absolute'}}>
            <Checkbox/>
            </div>:
            <div style={{position:'absolute'}}>
            {data?.type===userTypes.STUDENT?
              <Chip variant='outlined' label="Student" color='success' size='small' sx={{borderRadius:0}}/>
              :<Chip variant='outlined' label="Alumni" color='secondary' size='small' sx={{borderRadius:0}}/>
            }
          </div>
          }

          <CardMedia
            component="img"
            height="200"
            src={data?.profilePh} 
            alt="User icon"
            onClick={()=>onClick(data)}
          />
          <CardContent sx={{display: 'flex', 'flexDirection':'column', padding: '3px !important'}}>
            <div style={{display:'flex', flexDirection: 'column', flex: 1, alignItems:'left'}}>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{margin:'0'}}>
                {`${data?.firstName} ${data?.lastName}`}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                {data?.domain}
                </Typography>
            </div>
            <CardActions sx={{padding:'0px'}}>
            {
              !isSelectable && 
              <div style={{margin:0, padding:0, display:'flex', width:'100%', flexDirection:'row'}}>
                {
                  (data?.isConnected)?
                  <Button size="small" variant='contained' disabled sx={{margin:0, flex:1, borderRadius: 0}}>Connected</Button>
                  :<Button size="small" variant='contained' startIcon={<AddBoxIcon />} sx={{margin:0, flex:1, borderRadius: 0}}>Connect</Button>
                }
                <Button size="small" variant='contained' endIcon={<ChatIcon/>} color='secondary' sx={{ margin:0, flex:1, borderRadius: 0}}>Message</Button>
              </div>
            }

            
            </CardActions>
          </CardContent>
        </Card>
      );
}