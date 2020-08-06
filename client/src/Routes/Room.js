import React, { useLayoutEffect } from 'react';
import initConference from '../script/Conference';
import initTimer from '../script/Timer';
import initJavis from '../script/Report'
import { Container, Grid, Paper, Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'red',
      color: props => props.color,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
}));
const Room = () => {
    const classes = useStyles();
    useLayoutEffect(() => {
      initConference();
      initTimer();
      initJavis();
    }, []);
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Other Videos
                        </Typography>
                        <Typography className={classes.pos}>
                            <div id="otherVideos"></div>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Local Video
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <p>Your Pomodoro score is <div id="facenum"></div></p>
                        </Typography>
                        <Button size="small" variant="contained" color="primary"> 
                            <div id="enterBtn" href="#">ENTER</div>
                        </Button>
                        <Typography className={classes.pos}>
                            <video
                                id="myVideo"
                                className="remote-video center w-150 h-150"
                                autoPlay
                                muted
                                controls
                                playsInline
                            ></video>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Report
                        </Typography>
                        <canvas id="myChart"></canvas>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Room;