import React, { useLayoutEffect } from 'react'
import { Container, Grid, CardMedia, Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    table:{
        minWidth:650,
    }
  }));
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Seung Hyun Lee', 97, 25, 1, 25),
    createData('Goo Jesus', 96, 25, 2, 25),
    createData('God Paeng', 95, 20, 3, 25),
    createData('Somae', 90, 17, 4, 20),
    createData('Gomalsuk', 70, 25, 5, 20),
  ];
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
                <Typography component="legend"> Your Pomodoro Score is </Typography>
                  <Rating name="size-large" value={5} size="large" readOnly />
                

                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Pomodoro Score</TableCell>
                            <TableCell align="right">Total Time &nbsp;(m)</TableCell>
                            <TableCell align="right">Ranking&nbsp;(g)</TableCell>
                            <TableCell align="right">Recommend Timer&nbsp;(g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
};