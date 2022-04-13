import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import StudentPlan from "./StudentPlan";
import AlumniFeedback from "./AlumniFeedback";
import Status from "./Status";

export default function PlanStructure () {
    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <StudentPlan>
                    </StudentPlan>
                </TableCell>
                <TableCell>
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