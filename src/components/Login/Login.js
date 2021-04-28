import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.scss'

const Login = () => {
    const [ email , setEmail] = useState("")
    const [pass , setPass] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(pass === "" || email === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setIsfilled(true)
      }
    }
    return (
        <div className="login">
        <h2>Login</h2>
        <p>Please fill this form to log into your account</p>
        <form onSubmit={(e) => e.preventDefault() } className="form">
            <label for="email">Email address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className={isfilled === false ? `fail email` :`email` }  />
            <label for="password">Password</label>
            <input onChange={(e) => setPass(e.target.value)} type="password" name="" id="password" className={isfilled === false ? `fail password` :`password` }  />
            <input onClick={ (e) => handleValidation(e)}  name="Submit" value="Login" type="submit" id="submit" className="submit" />
        </form>
        <p className="to_signup">New user? <Link to="/signup"><b>Sign Up</b></Link></p>
        <p className="forgot__password">Forgot password?</p>
        </div> 
    )
}

export default Login
