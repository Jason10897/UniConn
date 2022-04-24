import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider, Select } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
        },
      },
    },
  },
});

export default function Prompt(props) {
  const [start_value, setStartValue] = React.useState(null);

  const [end_value, setEndValue] = React.useState(null);

  const [enable_date, setEnable] = React.useState(true);

  const handleCheck = () => {
    setEnable(!enable_date);
    setEndValue(null);
  };

  return (
    <Dialog
      onClose={props.hidePrompts}
      open={props.openPrompts}
      PaperProps={{ sx: { minWidth: "37%", borderRadius: "15px" } }}
    >
      <DialogTitle>Tell Your Mentor About</DialogTitle>
      <ThemeProvider theme={theme}>
        <List sx={{ marginLeft: 1 }}>
          <ListItem>
            <TextField
              required
              id="standard-required"
              label="Topic"
              variant="standard"
              sx={{ width: "85%", marginTop: -3 }}
            />
          </ListItem>
          <ListItem>
            <TextField
              required
              id="standard-required"
              label="Organization"
              variant="standard"
              helperText="If none, then enter 'Self'"
              sx={{ width: "85%" }}
            />
          </ListItem>
          <ListItem>
            <FormControl
              size="small"
              required
              sx={{ width: "163px", marginTop: 3, height: "45px" }}
            >
              <InputLabel id="demo-simple-select-required-label">
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                label="Type *"
              >
                <MenuItem value={1}>Project</MenuItem>
                <MenuItem value={2}>Job/Internship</MenuItem>
                <MenuItem value={3}>Achievement</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  value={start_value}
                  onChange={(newValue) => {
                    setStartValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{
                        width: "170px",
                        height: "45px",
                        marginRight: "50px",
                      }}
                      {...params}
                    />
                  )}
                ></DatePicker>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="End Date"
                  value={end_value}
                  disabled={!enable_date}
                  onChange={(newValue) => {
                    setEndValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      InputProps={{ readOnly: true }}
                      sx={{
                        width: "170px",
                        height: "45px",
                        marginRight: "50px",
                      }}
                      {...params}
                    />
                  )}
                ></DatePicker>
              </LocalizationProvider>
              <FormControlLabel
                control={<Checkbox onChange={handleCheck}></Checkbox>}
                label="In Progress"
              />
            </Box>
          </ListItem>
          <ListItem>
            <TextField
              id="filled-multiline-static"
              label="Details"
              multiline
              rows={4}
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={{ width: "85%", marginTop: 2 }}
            />
          </ListItem>
          <ListItem>
            <Typography sx={{ color: "red", fontSize: "12px", marginTop: -1 }}>
              *Required Fields
            </Typography>
          </ListItem>
          <ListItem>
            <Box
              sx={{
                display: "flex",
                minWidth: "100%",
                justifyContent: "right",
              }}
            >
              <Button
                variant="filled"
                onClick={props.hidePrompts}
                sx={{
                  backgroundColor: "#E5E4E2",
                  borderRadius: "35px",
                  width: "120px",
                  fontSize: "12px",
                  marginRight: 5,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="filled"
                sx={{
                  color: "white",
                  backgroundColor: "#7F00FF",
                  borderRadius: "35px",
                  width: "120px",
                  fontSize: "12px",
                  marginRight: 5,
                  ":hover": {
                    color: "black",
                  },
                }}
              >
                Send
              </Button>
            </Box>
          </ListItem>
        </List>
      </ThemeProvider>
    </Dialog>
  );
}
