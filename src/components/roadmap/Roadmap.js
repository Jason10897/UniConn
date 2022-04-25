import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PlanStructure from './PlanStructure';

export default function Roadmap() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" border="1px">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{fontWeight: "bold"}}>Student Plan</TableCell>
              <TableCell align="center" sx={{fontWeight: "bold"}}>Alumni Feedback</TableCell>
              <TableCell align="center" sx={{fontWeight: "bold"}}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <PlanStructure/>
              <PlanStructure/>
              <PlanStructure/>
          </TableBody>
        </Table>
      </TableContainer>
  );
}