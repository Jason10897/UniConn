import React, { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import StudentPlan from "./StudentPlan";
import AlumniFeedback from "./AlumniFeedback";
import Status from "./Status";

export default function PlanStructure() {
  const [stepText, setStepText] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

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
        "I recollect taking this course, and it definitely helped me find a job. All the best.",
      src:'/images/profilePhoto1.png'
      },
    { id: 2, name: "Claudia Alves", feedback: "Seems like a great idea!", src:'/images/profilePhoto2.png' },
    { id: 3, name: "Jane Rodriguez", feedback: "You could study this course better by first taking its prerequisite",src:'/images/profilePhoto5.png' },
  ]);

  const [openPrompts, handlePrompts] = useState(false);

  const displayPrompts = () => {
    handlePrompts(true);
  }

  const hidePrompts = () => {
    handlePrompts(false);
  }

  const [feedbackField, handleFeedback] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const [status, setStatus] = useState(false);

  const editStepText = (event) => {
    setStepText(event.target.value);
    handleStep(event.target.value);
  };

  const clearStep = () => {
    handleStep("");
  };

  const addStep = () => {
    if (stepText !== "") {
      setStep([...plan, { id: plan.slice(-1)[0].id + 1, text: stepText }]);
      setStepText("");
      clearStep();
    }
  };

  const editFeedbackText = (event) => {
    setFeedbackText(event.target.value);;
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
          name: "Alumni",
          feedback: feedbackText,
          src:'/images/profilePhoto4.png'
        },
      ]);
      setFeedbackText("");
      clearFeedback();
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelection = () => {
    setAnchorEl(null);
    setStatus(!status);
  }

  const addPrompts = (topic, organization, type, start_value, end_value, enable_date, details) => {
    let str = "";
    switch (type) {
      case 'Other':
        str += "New Update";
        str += "\n";
        break;
      default:
        str += type;
        str += " Update";
        str += "\n";
    }

    str += topic;
    str += " ";

    str += "(" + organization + ")";
    str += "\n";

    if(start_value!=null){
      let startDateString="";
      startDateString+=String(start_value).slice(4,10);
      startDateString+=', ';
      startDateString+=String(start_value).slice(11,15);
      if(!enable_date){
        str+=startDateString+" - Present"
      }
      else if(end_value!=null){
        str+=startDateString+' - '+String(end_value).slice(4,10)+', '+String(end_value).slice(11,15);
      }
    }
    if(details!=null){
      str+="\n"+details;
    }


    setFeedback([
      ...alumni,
      {
        id: alumni.slice(-1)[0].id + 1,
        name: "Student",
        feedback: str,
        src:'/images/profilePhoto3.png'
      },
    ]);
    hidePrompts();
  }

  return (
    <React.Fragment>
      <TableRow>
        <TableCell sx={{ maxWidth: 300, verticalAlign: "top" }}>
          <StudentPlan
            plan={plan}
            value={stepField}
            edit={editStepText}
            add={addStep}
            openPrompts={openPrompts}
            displayPrompts={displayPrompts}
            hidePrompts={hidePrompts}
            addPrompts={addPrompts}
          ></StudentPlan>
        </TableCell>
        <TableCell sx={{ maxWidth: 300, verticalAlign: "top" }}>
          <AlumniFeedback
            alumni={alumni}
            value={feedbackField}
            edit={editFeedbackText}
            add={addFeedback}
          ></AlumniFeedback>
        </TableCell>
        <TableCell sx={{ minWidth: 220, maxWidth: 300, textAlign: "center" }}>
          <Status
            open={open}
            anchorEl={anchorEl}
            status={status}
            click={handleClick}
            close={handleClose}
            select={handleSelection}
          ></Status>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
