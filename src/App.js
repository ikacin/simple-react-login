import React, {useState} from 'react';
import  './main.css';

function RegistrationForm() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();

  const handleInputChange = (e) => {

    const {id , value} = e.target;

    if(id === "firstName"){
      setFirstName(value);
      localStorage.setItem("name",e.target.value);
    }
    if(id === "lastName"){
      setLastName(value);
      localStorage.setItem("lastName",e.target.value);
    }
    if(id === "email"){
      setEmail(value);
      localStorage.setItem("email",e.target.value);
    }
    if(id === "password"){
      setPassword(value);
      localStorage.setItem("password",e.target.value);
    }
    if(id === "confirmPassword"){
      setConfirmPassword(value);
      localStorage.setItem("confirmPassword",e.target.value);
    }

  }

  const handleSubmit  = (e) => {
    debugger
    if(firstName || lastName || email || password || confirmPassword){


    }else{
      alert("bilgilerinizi giriniz")
    }
  }

  return(
      <div className={"form"}>
        <div className={"form-body"}>
          <h1>Sign Up</h1>
          <div className={"username"}>
            <label className={"form__label"} >First Name </label>
            <input className={"form__input"} type="text"  onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required/>
          </div>
          <div className={"lastname"}>
            <label className={"form__label"}>Last Name </label>
            <input  type="text" id="lastName"   className={"form__input"} onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
          </div>
          <div className={"email"}>
            <label className={"form__label"} >Email </label>
            <input  type="email" id="email" className={"form__input"} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
          </div>
          <div className="password">
            <label className={"form__label"} >Password </label>
            <input className={"form__input"} type="password"  id="password" onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
          </div>
          <div className={"confirm-password"}>
            <label className={"form__label"} >Confirm Password </label>
            <input className={"form__input"} type="password" id="confirmPassword"  onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
          </div>
        </div>
        <div className={"footer"}>
          <button onClick={(e)=>handleSubmit(e)} type="submit" className={"btn"}>Register</button>
        </div>
      </div>

  )
}

export default RegistrationForm