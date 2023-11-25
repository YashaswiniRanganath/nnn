import './signup.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'
import {postRequest} from '../utils/serverhelper.js'

export default function SignUpPage(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [cookie,setCookie] = useCookies(['token'])

    const navigate = useNavigate()

    const signup = async () => {
        const body = {name:name, email: email, password: password}
        const response = await postRequest('auth/register',body);

        if(response && !response.err){
            alert("Registered successfully")
            setCookie('token',response._id,{path: '/'})
            navigate('/home');
        }
    }

    return (
        <div className="Signuppage">
            <div className="Signup_Top">
                <img src="logo192.png" alt="X" height={40} width={40}/>
                <h1>Shrey Rooms</h1>
            </div>
            <div className="Signup_Bottom">
                <div className="Signup_Signup">
                <center><h1>Signup</h1>
                    <input type="text" className="NameSignup" placeholder="Name" onChange={(e) => (setName(e.target.value))}></input><br></br>
                    <br></br><input type="text" className="EmailSignup" placeholder="Email" onChange={(e) => (setEmail(e.target.value))}></input><br></br>
                    <br></br><input type="text" className="PasswordSignup" placeholder="Password" onChange={(e) => (setPassword(e.target.value))}></input><br></br>
                    <br></br><button className="SignupButton" onClick={() => {
                        signup();
                    }}>Signup</button>
                    <p onClick={() => {
                        navigate('/login');
                    }}>Login?</p>
                    </center>
                
                </div>
            </div>            
        </div>
    );
}