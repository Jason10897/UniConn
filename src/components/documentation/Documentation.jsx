import React, {useEffect} from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from '@mui/material';

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

export default function Documentation({setActive}) {
    
    useEffect(()=>{
        setActive('documentation')
    },[setActive])


  return (
    <div style={{textAlign:'left'}}>
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
            <Typography variant='subtitle1'><b>Students and alumni can connect to each other:</b></Typography>
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
          <Typography variant='h6'>Design Sketches</Typography>
        </AccordionSummary>
        <AccordionDetails style={{marginTop: -15}}>
          <div>
          <Typography variant='subtitle1'><b>Challenge 1: (Students and alumni) Connect to each other</b></Typography>
            <Typography sx={{textAlign: "justify"}}>
              One of the core design challenges of our solution is to facilitate students to easily have access to view all the alumni of the university and be able to connect with them and request advice or mentorship. It should also be easy to find relevant alumni within a specific area of interest or domain.There should be a simple way for alumni to be able to view current students as well as other alumni of the university. Once connected, students and alumni can interact with each other.
            </Typography>
            <Box display='flex' flexWrap='wrap'>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch1/sk1.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch1/sk2.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch1/sk3.jpg' alt='no-sketch'/>
                </Box>

            </Box> 
          </div>
          <div>
          <Typography variant='subtitle1' style={{marginTop: 10}}><b>Challenge 2: (Alumni) Recommend more relevant alumni to a student</b></Typography>
            <Typography sx={{textAlign: "justify"}}>
            Another major challenge is tackling a situation where there is a possibility of connecting to more relevant alumni. To achieve this, an alumni can recommend more relevant alumni to the students. There should be an easy and simplified way for alumni to recommend other alumni in such cases. The recommended alumni should have the freedom of choice to approve or decline to mentor the student. If and when approved, the student should be notified about the new alumni who will mentor him/her.
            </Typography>
            <Box display='flex' flexWrap='wrap'>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch2/sk1.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch2/sk2.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch2/sk3.jpg' alt='no-sketch'/>
                </Box>

            </Box> 
          </div>
          <div>
          <Typography variant='subtitle1' style={{marginTop: 10}}><b>Challenge 3: (Students) Use prompts to notify alumni about their progress</b></Typography>
          <Typography sx={{textAlign: "justify"}}>
          The challenge of keeping the conversation between students and alumni frequent and reducing larger gaps in conversations was needed to be tackled. To tackle this challenge, the design will prompt the students to send updates to the alumni regarding their progress and strengthen their bonds and network. This will ensure that the student does not feel awkward or uncomfortable while interacting with a mentor. This will also ensure that the mentor is updated with the student's progress. <b>Note:</b> This challenge was later modified to be a part of the Roadmap page instead of a chat box.
          </Typography>
          <Box display='flex' flexWrap='wrap'>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch3/sk1.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch3/sk2.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch3/sk3.jpg' alt='no-sketch'/>
                </Box>

            </Box> 
          </div>
          <div>
          <Typography variant='subtitle1' style={{marginTop: 10}}><b>Challenge 4: (Students) Create a career roadmap for alumni feedback</b></Typography>
            <Typography sx={{textAlign: "justify"}}>
            An effective design was needed through which a student can clearly express their goals, plans, or future roadmap to mentors and get the reviews for the same. The students can add details of their future goals and their roadmap for achieving those goals in the form of the courses they are planning to take, personal projects they would like to make, internships, etc. The mentors should be able to review each and every part of the plan individually and also provide them with their suggestions. The students should also be able to add details of their past courses, projects or any other details which will help the alumni to get a proper understanding of the student's past progress. <b>Note:</b> The roadmap section can be accessed only from a <b>connected student's</b> profile page or <Link href='/roadmap'>here</Link>.
            </Typography>
            <Box display='flex' flexWrap='wrap'>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch4/sk1.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch4/sk2.jpg' alt='no-sketch'/>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' style={{maxWidth:'40%', padding: '10px'}}>
                    <img style={{maxWidth: '100%'}} src='/images/sketches/ch4/sk3.jpg' alt='no-sketch'/>
                </Box>
            </Box> 
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant='h6'>Low Fidelity Prototypes and Formative Evaluation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{marginTop: -15}}>
            <Link target="_blank" href="https://raw.githubusercontent.com/ajaysagarn/UniConn/main/src/static/prototypes.pdf">
                Click here to view
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>Individual Contributions</Typography>
        </AccordionSummary>
        <AccordionDetails style={{marginTop: -15}}>
            <div>
            <Typography variant='subtitle1'><b>Ajay Sagar Nandimandalam</b></Typography>
            <p style={{marginTop: -15}}>
                <ol>
                    <li>Initial project setup</li>
                    <li>Connect page UI to search for alumni and students</li>
                    <li>Search and filtering functionality</li>
                    <li>UI to Recommend another alumni to students</li>
                    <li>Mock data generation</li>
                    <li>Web hosting</li>
                </ol>
            </p>
            </div>
            <div>
            <Typography variant='subtitle1'><b>Jason James Dsouza</b></Typography>
            <p style={{marginTop: -15}}>
                <ol>
                    <li>Homepage - Events Carousel</li>
                    <li>Roadmap - Student Plan, Alumni Feedback</li>
                    <li>Prompts - Dialog box with form design</li>
                    <li>Mock data generation</li>
                    <li>Testing and debugging</li>
                    <li>Final styling improvements</li>
                </ol>
            </p>
            </div>
            <div>
            <Typography variant='subtitle1'><b>Harsh Jethwani</b></Typography>
            <p style={{marginTop: -15}}>
                <ol>
                    <li>Home Page - Layout</li>
                    <li>Profile Page</li>
                    <li>Roadmap - Progress Updates, Status</li>
                    <li>Prompts - Data validation and processing</li>
                    <li>Mock data generation</li>
                    <li>Testing and debugging</li>
                </ol>
            </p>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}