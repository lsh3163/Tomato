import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, TextField, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function SelectStudy() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Container maxwidth="sm">
        <Grid>
            <Grid>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Create Room
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Pomodoro room
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            apple
                        </Typography>
                        <Typography variant="body2" component="p">                            
                            Stay Hungry, stay foolish
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to={"/room"}>CREATE ROOM</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Join Room
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Friend Room
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            tomato
                        </Typography>
                        <Typography variant="body2" component="form">
                            <form noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Room Number" variant="outlined" />
                            </form>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to={"/joinroom"}>JOIN ROOM</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        </Container>
    );
}