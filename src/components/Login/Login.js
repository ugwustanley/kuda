import React from 'react'
import {Link} from 'react-router-dom'
import './Login.scss'

const Login = () => {
    return (
        <div className="login">
        <h2>Login</h2>
        <p>Please fill this form to log into your account</p>
        <form onSubmit={(e) => e.preventDefault() } className="form">
            <label for="email">Email address</label>
            <input type="email" name="email" id="email" className="email" />
            <label for="password">Password</label>
            <input type="password" name="" id="password" className="password" />
            <input  name="Submit" value="Login" type="submit" id="submit" className="submit" />
        </form>
        <p className="to_signup">New user? <Link to="/signup"><b>Sign Up</b></Link></p>
        <p className="forgot__password">Forgot password?</p>
        </div> 
    )
}

export default Login
