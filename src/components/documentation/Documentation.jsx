import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

export default function Documentation() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>Individual Contributions</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div>
            <Typography variant='subtitle1'>Ajay Sagar Nandimandalam</Typography>
            <p>
                <ol>
                    <li>Initial project setup.</li>
                    <li>Connect page UI to search for alumni and students.</li>
                    <li>Search and filtering functionality.</li>
                    <li>UI to Recommend another alumni to students.</li>
                </ol>
            </p>
            </div>
            <div>
            <Typography variant='subtitle1'>Jason</Typography>
            <p>
                <ol>
                    <li>Roadmap.</li>
                    
                </ol>
            </p>
            </div>
            <div>
            <Typography variant='subtitle1'>Harsh</Typography>
            <p>
                <ol>
                    <li>Profile Page</li>
                    <li>Home Page</li>
                </ol>
            </p>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6'>User Requirements</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div>
            <Typography variant='subtitle2'><b>Students and alumni can connect to each other:</b></Typography>
            <p>
                <ol>
                <li>Students must be able to check all existing alumni</li>   
                <li>Students must be able to search for alumni in a specific field/domain</li>     
                <li>Students must be able to select existing alumni and request to connect with them</li>
                <li>Alumni should be able to communicate and interact with other alumni and students of the university</li>
                <li>Alumni must be able to view all the current students of the university</li>
                <li>Alumni must be able to view all the other alumni of the university</li>
                </ol>
            </p>
        </div>
        <div>
            <Typography variant='subtitle1'><b>Alumni can recommend more relevant alumni to a student:</b></Typography>
            <p>
                <ol>
                <li>Alumni if he/she sees fit, should be able to recommend other alumni to any student</li>
                </ol>
            </p>
        </div>
        <div>
            <Typography variant='subtitle1'><b>Students can use prompts to notify alumni about their progress:</b></Typography>
            <p>
                <ol>
                <li>Students should be able to send updates to the alumni by using system prompts</li>   
                </ol>
            </p>
        </div>
        <div>
            <Typography variant='subtitle1'><b>Students can create a career roadmap for alumni feedback:</b></Typography>
            <p>
                <ol>
                <li>Students should be able to post their current completed courses and future course plan and request mentor's advice</li>   
                <li>Students should be able to view any comments or suggestions made by the alumni on the course plan chosen by the student</li>     
                <li>Alumni should be able to view the completed and current course plan of students they are mentoring</li>
                <li>Alumni should be able to make comments and suggestions on the course plan to their mentees</li>
                </ol>
            </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant='h6'>Sketches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant='h6'>Low Fidelity Prototypes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}