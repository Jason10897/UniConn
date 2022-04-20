import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Status(props) {
    const statusText = props.status ? "Completed" : "In Progress";
    const changeStatus = props.status ? "In Progress": "Completed";

  return (
    <React.Fragment>
      <Button
        id="basic-button"
        aria-controls={props.open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={props.open ? "true" : undefined}
        onClick={props.click}
        sx={props.status ? {color: "green", fontWeight: "bold"} : {color: "orange", fontWeight: "bold"}}
      >
        {statusText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.close}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={props.select}>Change Status to {changeStatus}</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
