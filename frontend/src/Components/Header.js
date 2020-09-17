import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import UserContext from './UserContext';
import "./Header.css";
import Container from '@material-ui/core/Container';

const btnStyle = {
  color: "white",
  background: "#ddd",
  padding: "12px 16px",
  fontSize: "20px",
  lineHeight: 1.5,
}



export default function Board() {
  const { userData, setUserData } = useContext(UserContext);
  
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
      <div className="header">
        <h1>Focustudy</h1>
        <p>세상에 없던 AI 집중력 타이머.</p>
      </div>
      
      <div className="navbar">
        <Container>
          <a href="/" className="active">Home</a>
          <a href="/Study">Study</a>
          <a href="/Contact">Contact</a>
          <a href="/Contact">About</a>
          {userData.user ?(
              <button onClick={logout} className="right">Log Out</button>
                ) : (
              <>
              <button onClick={register} className="right">Register</button>
              <button onClick={login} className="right">Log In</button>
              </>
          )}
        </Container>
      </div>
      
    </React.Fragment>
  );
}