import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import StudentPlan from './StudentPlan';
import AlumniFeedback from './AlumniFeedback';
import Status from './Status';

export default function PlanStructure () {
    return (
        <React.Fragment>
            <TableRow>
                <TableCell sx={{maxWidth:300, verticalAlign: "top"}}>
                    <StudentPlan>
                    </StudentPlan>
                </TableCell>
                <TableCell sx={{maxWidth:300}}>
                    <AlumniFeedback>
                    </AlumniFeedback>
                </TableCell>
                <TableCell>
                    <Status>
                    </Status>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}