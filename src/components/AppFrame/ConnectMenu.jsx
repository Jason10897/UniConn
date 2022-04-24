import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {navigate} from '@reach/router'


export default function ConnectMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color='inherit'
        onClick={handleClick}
      >
        Connect
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate("/search?filter=All")}>All</MenuItem>
        <MenuItem onClick={() => navigate("/search?filter=Alumni")}>Alumni</MenuItem>
        <MenuItem onClick={() => navigate("/search?filter=Student")}>Student</MenuItem>
      </Menu>
    </div>
  );
}
