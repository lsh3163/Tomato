import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, TextField, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root:{
        
        maxWidth: 345,
        
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    card:{
        maxWidth: 500,
    }

}));

export default function SelectStudy() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Container maxwidth="sm">
            <Grid container spacing={5}>
                <Grid item xs>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" component="h2">
                            Create room
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Create your own room
                        </Typography>
                        <Typography variant="body2" component="p">                            
                            Stay Hungry, Stay Foolish
                        </Typography>
                        <Button size="small" component={Link} to={"/room"}>
                            START
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" component="h2">
                            Join Room
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Join your own Room
                        </Typography>
                        <Typography variant="body2" component="form">
                            <form noValidate autoComplete="off">
                                <TextField id="roomNumber" label="Room Number" variant="outlined"/>
                            </form>
                        </Typography>
                        <Button size="small" component={Link} to={"/room"}>
                            START
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        
    );
}