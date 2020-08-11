import React, {useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../Components/UserContext';
import ErrorNotice from '../../Components/ErrorNotice';

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async(e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginRes = await Axios.post(
                "http://localhost:5050/users/login",
                loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        }
        catch(err){
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return(
        <div>
            <h2>Log In</h2>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <form onSubmit={submit}>
                <label>Email</label>
                <input  
                    type="email" 
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input  
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}