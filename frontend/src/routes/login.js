import { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'
import postRequest from '../utils/serverhelper.js'

function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [cookie,setCookie] = useCookies(['token'])

    const navigate = useNavigate()

    const login = async () => {
        const body = {email: email, password: password}
        const response = await postRequest('auth/login',body);

        if(response && !response.err){
            alert("Logged in successfully")
            setCookie('token',response._id,{path: '/'})
            navigate('/home');
        }
    }

    return (
        <div className="Loginpage">
            <div className="Login_Top">
                <img src=".\Components\logo192.png" alt="X"/>
                <h1>Shrey Rooms</h1>
            </div>
            <div className="Login_Bottom">
                <div className="Login_Login">
                <center><h1>Login</h1>
                    <input type="text" className="NameLogin" placeholder="email" onChange={(e) => (setEmail(e.target.value))}></input><br></br>
                    <br></br><input type="text" className="PasswordLogin" placeholder="Password" onChange={(e) => (setPassword(e.target.value))}></input><br></br>
                    <br></br><button className="LoginButton" onClick={() => {
                        login();
                    }}>Login</button>
                    <p onClick={() => {
                        navigate('/signup');
                    }}>SignUp?</p>
                    </center>
                
                </div>
            </div>            
        </div>
    )
}

export default Login;