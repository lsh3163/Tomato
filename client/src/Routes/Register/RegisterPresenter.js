import React, {useState, useContext, createContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../Components/UserContext';
import ErrorNotice from '../../Components/ErrorNotice';

export default function RegisterPresenter() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);

    const history = useHistory();

    const submit = async(e) => {
        e.preventDefault();
        try{
            const newUser = {email, password, passwordCheck, displayName};
            await Axios.post(
                "http://localhost:5050/users/register",
                newUser
            ); // 생성
            const loginRes = await Axios.post(
                "http://localhost:5050/users/login",
                {
                    email,
                    password,
                }
            ); // 새로 생성하면 자동으로 로그인이 되게끔.
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        }
        catch(err){
            // err.response.data.msg && setError(err.response.data.msg);
            console.log(err.message);
        }
    };
    return (
        <div>
            <h2>Register</h2>
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
                <input
                    type="password"
                    placeholder="Verify Password"
                    onChange={e => setPasswordCheck(e.target.value)}
                />
                <label>Display Name</label>
                <input 
                    type="text"
                    onChange={e => setDisplayName(e.target.value)}
                />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
