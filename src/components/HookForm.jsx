import React, { useState } from  'react';
const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [firstnameerror, setFirstnameerror] = useState("");
    const [lastnameerror, setLastnameerror] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [confirmpassworderror, setConfirmpassworderror] = useState("");

    const createNewUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameerror("First name must be longer than 2 characters.");
        } else {
            setFirstnameerror("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameerror("Last name must be longer than 2 characters.");
        } else {
            setLastnameerror("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailerror("Email must be longer than 5 characters.");
        } else {
            setEmailerror("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPassworderror("Password must be longer than 8 characters.");
        } else {
            setPassworderror("");
        }
    }
    const handleConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmpassworderror("Confirm password must be longer than 8 characters.");
            }else{
                setConfirmpassworderror("");
            }
        if(password !== e.target.value) {
            setConfirmpassworderror("Passwords must match.");
        }
    }

    return(
        <div>
            <form onSubmit={createNewUser}>
                <div>
                    <label>First Name </label> 
                    <input type="text" onChange={handleFirstName} />
                    {
                        firstnameerror ?
                        <p style={{color:'red'}}>{firstnameerror}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name </label> 
                    <input type="text" onChange={handleLastName} />
                    {
                        lastnameerror ?
                        <p style={{color:'red'}}>{lastnameerror}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email </label> 
                    <input type="text" onChange={handleEmail} />
                    {
                        emailerror ?
                        <p style={{color:'red'}}>{emailerror}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" onChange={handlePassword} />
                    {
                        passworderror ?
                        <p style={{color:'red'}}>{passworderror}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={handleConfirmpassword} />
                    {
                        confirmpassworderror ?
                        <p style={{color:'red'}}>{confirmpassworderror}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name {firstname}</p>
                <p>Last Name {lastname}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmpassword}</p>
            </div>
        </div>
    );
};

export default UserForm;