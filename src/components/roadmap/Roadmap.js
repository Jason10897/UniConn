import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PlanStructure from './PlanStructure';

export default function BasicTable() {
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" border="1px">
          <TableHead>
            <TableRow>
              <TableCell align="center">Student Plan</TableCell>
              <TableCell align="center">Alumni Feedback</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <PlanStructure>
              </PlanStructure>
          </TableBody>
        </Table>
      </TableContainer>
  );
}