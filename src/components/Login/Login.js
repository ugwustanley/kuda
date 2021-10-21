import React, {useState} from 'react'
import {Link , useHistory} from 'react-router-dom'
import Authrocket from 'useauthrocket'
import dotenv from 'dotenv'
import './Login.scss'
dotenv.config()

const Login = () => {

    const [ email , setEmail] = useState("")

    const [pass , setPass] = useState("")

    const [btnvalue , setBtnvalue] = useState("Login")

    const [err , setErr] = useState("")

    const [ isfilled , setIsfilled] = useState(true)

    let history = useHistory()

    async function onLogin(){
      try {

        const app = await Authrocket.initializeApp({
          apiKey:process.env.REACT_APP_API_KEY,
          appName:process.env.REACT_APP_APP_NAME
        })
        const user = await app.login(email, pass)

        if(user){
          localStorage.setItem("user", JSON.stringify(user.payload))
          setBtnvalue("Sign up")
          history.push("/login");
        }
        // const url = "https://randmob-api.herokuapp.com/v1/login";

        // const payload = {
        //   email,
        //   password: pass
        // };

        // const headers = {"content-type":"application/json", "Access-Control-Allow-Origin":"*"}

        // const result = await fetch(url, { method:"post",body:JSON.stringify(payload),headers }).then(e=>e.json());

        // console.log(result)
        // setErr(result.message)
        // setBtnvalue("Login")
        // if(result.statusCode === 401){
        //   setErr("Invalid email address or password")
        // }
        // else{
        //   setErr("An error occurred, check your internet connection and try again")
        // }
        //alert(result.message);
        
        // localStorage.setItem("token",result.data.token)
        // localStorage.setItem("user",JSON.stringify(result.data))
        

        history.push("/");

      } catch (error) {
        setBtnvalue("Login")
        console.log(error , "eoi")
        setErr(error.message)
        if(error.message == "Failed to fetch") setErr("An error occurred, check your internet connection and try again")
        
       // alert("Error occurred, check your internet connection and try again");
      }
    }

    const handleValidation = (e) =>{
      if(!pass|| !email ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setIsfilled(true)
          setBtnvalue("Please Wait...")
          onLogin()
          
      }
    }
    return (
        <div className="login">
        <h2>Login</h2>
        <p>Please fill this form to log into your account</p>
        <p className="err" style={{color:"red"}}>{err}</p>
        <form onSubmit={(e) => e.preventDefault() } className="form">
            <label for="email">Email address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className={isfilled === false ? `fail email` :`email` }  />
            <label for="password">Password</label>
            <input onChange={(e) => setPass(e.target.value)} type="password" name="" id="password" className={isfilled === false ? `fail password` :`password` }  />
            <input onClick={ (e) => handleValidation(e)}  name="Submit" value={btnvalue} type="submit" id="submit" className="submit" />
        </form>
        <p className="to_signup">New user? <Link to="/signup"><b>Sign Up</b></Link></p>
        <p className="forgot__password">Forgot password?</p>
        </div> 
    )
}

export default Login
