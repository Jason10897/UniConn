import React, { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import StudentPlan from "./StudentPlan";
import AlumniFeedback from "./AlumniFeedback";
import Status from "./Status";

let stepText = "";
let feedbackText = "";

export default function PlanStructure() {
  const [plan, setStep] = useState([
    { id: 1, text: "Step 1" },
    { id: 2, text: "Step 2" },
    { id: 3, text: "Step 3" },
    { id: 4, text: "Step 4" },
    { id: 5, text: "Step 5" },
  ]);

  const [stepField, handleStep] = useState("");

  const [alumni, setFeedback] = useState([
    {
      id: 1,
      name: "John Doe",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    { id: 2, name: "Claudia Alves", feedback: "Feedback 2" },
    { id: 3, name: "Jane Rodriguez", feedback: "Feedback 3" },
  ]);

  const [feedbackField, handleFeedback] = useState("");

  const editStepText = (event) => {
    stepText = event.target.value;
    handleStep(event.target.value);
  };

  const clearStep = () => {
    handleStep("");
  };

  const addStep = () => {
    if (stepText !== "") {
      setStep([...plan, { id: plan.slice(-1)[0].id + 1, text: stepText }]);
      stepText = "";
      clearStep();
    }
  };

  const editFeedbackText = (event) => {
    feedbackText = event.target.value;
    handleFeedback(event.target.value);
  };

  const clearFeedback = () => {
    handleFeedback("");
  };

  const addFeedback = () => {
    if (feedbackText !== "") {
      setFeedback([
        ...alumni,
        {
          id: alumni.slice(-1)[0].id + 1,
          name: "Jason Dsouza",
          feedback: feedbackText,
        },
      ]);
      feedbackText = "";
      clearFeedback();
    }
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell sx={{ maxWidth: 300, verticalAlign: "top" }}>
          <StudentPlan
            plan={plan}
            value={stepField}
            edit={editStepText}
            add={addStep}
          ></StudentPlan>
        </TableCell>
        <TableCell sx={{ maxWidth: 300 }}>
          <AlumniFeedback
            alumni={alumni}
            value={feedbackField}
            edit={editFeedbackText}
            add={addFeedback}
          ></AlumniFeedback>
        </TableCell>
        <TableCell>
          <Status></Status>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
