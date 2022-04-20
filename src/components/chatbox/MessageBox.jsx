import React from 'react';
import { Paper, TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import { Box } from "@mui/system";
import { AlignHorizontalCenter } from "@mui/icons-material";

export default function MessageBox() {
  return (
    <div>
      <Box sx={{ border: 1, width:325, height:70}} >
        <IconButton
          aria-label="smiley"
          variant="contained"
          color="primary"
          style={{ height: 60 }}
        >
          <SentimentSatisfiedAltIcon />
        </IconButton>

        <TextField id="standard-basic" label="Standard" variant="standard" />

        <IconButton
          aria-label="attach"
          variant="contained"
          color="primary"
          style={{ height: 60 }}
        >
          <AttachFileIcon />
        </IconButton>
        <IconButton
          aria-label="send"
          variant="contained"
          color="primary"
          style={{ height: 60 }}
        >
          <SendIcon />
        </IconButton>
        </Box>
    </div>
  );
}
