import React from 'react'

const DisplayForm = (props) => {
    return (
        <div>
            <h3>Your Form Data</h3>
                <p>First Name {props.firstname}</p>
                <p>Last Name {props.lastname}</p>
                <p>Email {props.email}</p>
                <p>Password {props.password}</p>
                <p>Confirm Password {props.confirmpassword}</p>
        </div>
    )
}

export default DisplayForm