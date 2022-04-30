import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, {useState} from "react";
import { Alert, Checkbox, Chip, Snackbar, Tooltip } from '@mui/material';
import ChatIcon from "@mui/icons-material/Chat";
import { userTypes } from '../data/userData';
import ConnectButton from './ConnectButton';


export default function AlumniCard({data, onClick, isSelectable}){

    // const ConnectIcon = (data?.isConnected)?<ChatIcon/>:<AddBoxIcon/>
    const [requestSent, setRequestSent] = useState(!!data?.requestSent);

    const [snackbarOpen, setOpen] = useState(false)

    const handleSnackClose = () =>{
        setOpen(false)
    }

    const showsnackBar = () =>{
        setRequestSent(true)
        setOpen(true)
    }

    return (
        <Card sx={{ width: '210px', margin: '15px', maxHeight: '330px', position:'relative', borderRadius: 3 }}>
          {
            isSelectable?
            <div style={{position:'absolute'}}>
            <Checkbox/>
            </div>:
            <div style={{position:'absolute'}}>
            {data?.type===userTypes.STUDENT?
              <Chip variant='outlined' label="Student" color='success' size='small' sx={{borderRadius: 3}}/>
              :<Chip variant='outlined' label="Alumni" color='secondary' size='small' sx={{borderRadius: 3}}/>
            }
          </div>
          }

          <CardMedia
            component="img"
            height="220px"
            src={data?.profilePh} 
            alt="User icon"
            onClick={()=>onClick({...data,requestSent})}
          />
          <CardContent sx={{display: 'flex', 'flexDirection':'column', padding: '3px !important'}}>
            <div style={{display:'flex', flexDirection: 'column', flex: 1, alignItems:'center'}}>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{margin:'0'}}>
                {`${data?.firstName} ${data?.lastName}`}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                {(data?.type === userTypes.STUDENT)?data?.domain:`${data?.company}, ${data?.location}`}
                </Typography>
            </div>
            <CardActions sx={{padding:'0px'}}>
            {
              !isSelectable && 
              <div style={{marginBottom:2, padding:0, display:'flex', width:'100%', flexDirection:'row'}}>
                {
                  (data?.isConnected || requestSent)?
                  <Button size="small" variant='contained' disabled sx={{marginRight:1, flex:1, fontSize: 12, borderRadius: 2, whiteSpace:'nowrap'}}>{requestSent?'Request Sent':'Connected'}</Button>
                  :
                  <Button onClick={showsnackBar} size="small" variant='contained' startIcon={<AddBoxIcon /> } style={{marginRight:1, flex:1, fontSize: 12, borderRadius: 5}}>Connect</Button>
                }
                <Button size="small" variant='contained' endIcon={<ChatIcon/>} color='secondary' sx={{ margin:0, flex:1, fontSize: 12, borderRadius: 2}}>Message</Button>
                <Snackbar open={snackbarOpen} anchorOrigin={{ vertical:"bottom", horizontal: "center"}}
                    autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                        Connection request sent successfully!
                    </Alert>
                </Snackbar>  
              </div>
            }           
            </CardActions>
          </CardContent>

        </Card>
      );
}