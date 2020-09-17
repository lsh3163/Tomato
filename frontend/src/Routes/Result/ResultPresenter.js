import React, { useLayoutEffect } from 'react'
import { Container, Grid, CardMedia, Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
export default () => {
    const classes = useStyles();
    return (
        <Container maxwidth="sm">
          <Grid container spacing={5}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography className={classes.pos} color="textSecondary">
                  <audio autoplay="autoplay" id="end-of-time" src="https://kr.object.ncloudstorage.com/resume/iu.mp3"></audio>
                </Typography>
                <Typography component="legend">Your Pomodoro Score is </Typography>
                  <Rating name="size-large" value={5} size="large" readOnly />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
};