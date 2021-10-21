import React , {useState} from 'react'
import Authrocket from 'useauthrocket'
import {Link , useHistory} from 'react-router-dom'
import './Signup.scss'
import dotenv from 'dotenv'
dotenv.config()



const Signup = () => {

    
    const [show , setShow] = useState(false)

    const [err , setErr] = useState()

    const [btnvalue , setBtnvalue] = useState("Sign up")
  
    const [ email , setEmail] = useState()
    
    const [pass , setPass] = useState()
    
    const [firstName , setFirstName] = useState()
    
    const [lastName , setLastName] = useState()
    
    const [username , setUsername] = useState()
    
    const [phone , setPhone] = useState()
    
    const [ isfilled , setIsfilled] = useState(true)
    
    const history = useHistory()

   async function onSignup(){


        try {
            const payload = {
                firstname: firstName,
                lastname : lastName,
                username : username,
                email    :  email,
                phone    : phone
            }
          const app = Authrocket.initializeApp({
            apiKey:process.env.REACT_APP_API_KEY,
            appName:process.env.REACT_APP_APP_NAME
          })
          const user = app.createAccount(email, pass, payload)

          if(user){
            setBtnvalue("Sign up")
            history.push("/login");
          }
          //   const url = "https://randmob-api.herokuapp.com/v1/register";

          //   const payload = {
          //       firstname: firstName,
          //       lastname : lastName,
          //       username : username,
          //       password : pass,
          //       email    : email,
          //       phone    : phone
          //   }
  
          //   const headers = {"content-type":"application/json" , "Access-Control-Allow-Origin":"*"}
  
          //   const result = await fetch(url, { method:"post",body:JSON.stringify(payload),headers }).then(e=>e.json());
            
          //   console.log(result)
          //  // alert(result.message);

          //   setErr(result.message)
          //   setBtnvalue("Sign up")
          //   if(result.err){
          //     setErr(result.message)
          //   }
          //   else{
          //       history.push("/login")
          //   }
  
         //   history.push("/login");

          } catch (error) {
            setBtnvalue("Sign up")
            setErr(error.message)
          //  if(error.message == "Failed to fetch") setErr("An error occurred, check your internet connection and try again")
           // alert("Error occurred creating account, check your internet connection and try again");

          }
    }

  const handleValidation = (e) =>{

    if(!pass|| !email || !lastName  || !firstName || !username) {

        e.preventDefault() 

        setIsfilled(false)

     } 

    else{
        setBtnvalue("Please wait..")
         onSignup()

      }

    }
    
    const handleSubmit = (e) =>{

      //  setShow(true)

        e.preventDefault()

    }

    return (
       


 <div className="signup">

<h2>Sign Up</h2>

<p>Please fill this form to create an account</p>
<p style={{color:"red"}}>{err}</p>
<form onSubmit={(e) => handleSubmit(e) } className="form">

    <label for="name">First Name</label>

    <input type="text" onChange={(e) => setFirstName(e.target.value)} name="name" id="name" className={isfilled === false ? `fail name` :`name` } />
   
    <label for="name">Last Name</label>
  
    <input type="text" onChange={(e) => setLastName(e.target.value)} name="name" id="name" className={isfilled === false ? `fail name` :`name` } />
   
    <label for="name">Username</label>
   
    <input type="text" onChange={(e) => setUsername(e.target.value)} name="name" id="name" className={isfilled === false ? `fail name` :`name` } />

    <label for="email">Email Address</label>
  
    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className={isfilled === false ? `fail email` :`email` } />

    <label for="phone">Phone Number</label>
  
    <input type="number" onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" className={isfilled === false ? `fail phone` :`phone` } />

    <label for="password">Password</label>
  
    <input type="password" onChange={(e) => setPass(e.target.value)} name="" id="password" className={isfilled === false ? `fail password` :`password` } />
  
    <input onClick={ (e) => handleValidation(e)}  name="Submit" value={btnvalue} type="submit" id="submit" className="submit" />

</form>

<p className="to_login">Already have an account with us? <Link to="/login"><b>Login</b></Link></p>

{show === false ? <p></p>: 
 
 <div className="tag__box">
 
 <div className="tag" >
 
    <p>Create your $mobme tag</p>
 
    <input type="text" name="tag__name" className="tag__name" id="tag_name" />
 
   
 
    <input type="submit" name="create__tag" className="create__tag" value="Create" />
 
   
 
 </div>
 
 </div>}


</div>

)

}

export default Signup
