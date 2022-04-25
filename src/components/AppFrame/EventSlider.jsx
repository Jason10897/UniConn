import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Technical Event",
    imgPath:
      "https://skins.webservices.illinois.edu/files/30212/wizard_header.jpg?iIndex=1102T132206",
    redirect: "https://emails.uofi.uic.edu/newsletter/190706.html",
  },
  {
    label: "UIC Flames",
    imgPath:
      "https://involvement.uic.edu/wp-content/uploads/sites/263/2021/10/UICTailgate-1090x595.png",
    redirect: "https://uicflames.com/calendar",
  },
  {
    label: "Alumni Events",
    imgPath:
      "https://socialwork.uic.edu/wp-content/uploads/sites/79/2021/02/P2100777_JACSW_Alumni_emailheader-w-caret-1090x364.jpg",
    redirect: "https://socialwork.uic.edu/alumni-friends/alumni-events/",
  },
  {
    label: "Music Concert",
    imgPath:
      "https://cdn-az.allevents.in/events5/banners/8b573707ec66d7ab8ade05f844dc6f11cff7090c22371d69e912c4b6264287cf-rimg-w1200-h527-gmir.jpg?v=1649349208",
    redirect: "https://allevents.in/chicago/uic",
  },
  {
    label: "Virtual Involvement Fair",
    imgPath:
      "https://involvement.uic.edu/wp-content/uploads/sites/263/2020/08/P2100171_CSI_Fall-Involvement-Fair-2020-FB-COVER-851x315-01-2-e1598412189526-970x595.jpg",
    redirect: "https://involvement.uic.edu/programs-events/",
  },
];

export default function EventSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "60%", flexGrow: 1, marginLeft: "20%" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        alignContent="center"
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Link
                href={step.redirect}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Box
                  component="img"
                  sx={{
                    height: "400px",
                    display: "block",
                    width: "100%",
                    overflow: "hidden",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                ></Box>
              </Link>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
