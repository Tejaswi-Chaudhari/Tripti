import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios';
import "./register.css";

const Register = () => {
    const history = useHistory()
    //usestate to manage our state within the code
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    //e stands for event
    const handleChange = e => {
        console.log(e.target);
        const { name, value } = e.target
        //to match specific field and add the value to it
        setUser({
            //spread operator
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/Register", user)
                .then(res =>
                    console.log(res)
                    // alert(res.data.message)
                    // history.push("/Login")
                )
        } else {
            alert("Invalid input")
        }

    }

    return (
        <div className="register">
            {console.log("User", user)}

            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/Login")}>Login</div>

            {/* <div className="rightside">
                Tripti
            </div> */}
        </div>
    )
}

export default Register
