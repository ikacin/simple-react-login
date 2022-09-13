import React, {useState} from 'react';
import Modal from './modal';
import './main.css';
import Alert from './alert'
import AlertTitle from "@mui/material/AlertTitle";


function LoginForm() {

    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword,setLoginPassword] = useState();


    const handleInputChange = (e) => {

        const {id , value} = e.target;

        if(id === "loginEmail"){
            setLoginEmail(value);
            localStorage.getItem("email");
        }
        if(id === "loginPassword"){
            setLoginPassword(value);
            localStorage.getItem("password");
        }

    }



    const checkSubmit  = (e) => {
        debugger
        if(loginEmail || loginPassword ){

            alert("doğru bilgileri girdiniz")


        }else{
            alert("yanlış bilgileri girdiniz")
        }
    }

    return(
        <div className={"form"}>
            <div className={"form-login"}>
                <h1>Sign Up</h1>
                <div className={"email"}>
                    <label className={"form__label"} >Email </label>
                    <input  type="email" id="login-email" className={"form__input"} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className={"form__label"} >Password </label>
                    <input className={"form__input"} type="password"  id="login-password" onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>

            </div>
            <div className={"footer"}>
                <button onClick={(e)=>checkSubmit(e)} type="submit" className={"btn"}>Log In</button>
            </div>
        </div>

    )
}

export default LoginForm