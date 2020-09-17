import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import "./Home.css";
import logo from "./assets/logo.PNG"
import logo2 from "./assets/logo2.PNG"
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Container maxwidth="sm">
            <div className="container">
                <div className="row">
                    <div className="column-66">
                    <h1 className="xlarge-font"><b>The App</b></h1>
                    <h1 className="large-font"><b>Why Focustudy?</b></h1>
                    <p><span>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="button">Start Application</button>
                    </div>
                    <div className="column-33">
                        <img src={logo} width="335" height="471"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column-33">
                        <img src={logo2} alt="App" width="335" height="471"/>
                    </div>
                    <div className="column-66">
                        <h1 className="xlarge-font"><b>Clarity</b></h1>
                        <h1 className="large-font"><b>Pixels, who?</b></h1>
                        <p><span>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="button">Read More</button>
                    </div>
                </div>
            </div>
            <h1 className="xlarge-font"><b>Process</b></h1>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        00:00
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Start Your Routine
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Do your best with our Timer
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        00:25
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Take a rest
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
            </Container>
        </React.Fragment>
        
        
      );
}

export default Home;