import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import UserContext from './UserContext';

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Board() {
  const { userData, setUserData } = useContext(UserContext);
  
  const classes = useStyles();
  const history = useHistory();
  
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
        token: undefined,
        user: undefined
    })
    localStorage.setItem("auth-token", "")
  };
  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <AccessAlarmIcon className={classes.icon} />
            <Button variant="h6" color="inherit" noWrap component={Link} to={"/"}>
                FocuStudy
            </Button>
            <Container align='right'>
              {userData.user ?(
                  <Button onClick={logout} color="inherit">Log Out</Button>
              ) : (
              <>
                  <Button onClick={register} color="inherit">Register</Button>
                  <Button onClick={login} color="inherit">Log In</Button>
              </>
              )}
            </Container>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                <div id="timer">FocuStudy</div>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              세상에 없던 AI 집중력 타이머 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={Link} to={'/study'}> 
                    MULTI MODE
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    SINGLE MODE
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}