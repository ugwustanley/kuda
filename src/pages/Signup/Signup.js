import React , {useState} from 'react'

import {Link , useHistory} from 'react-router-dom'

import './Signup.scss'

const Signup = () => {


    const [show , setShow] = useState(false)
  
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
            const url = "https://randmob-api.herokuapp.com/v1/register";

            const payload = {
                firstname: firstName,
                lastname : lastName,
                username : username,
                password : pass,
                email    : email,
                phone    : phone
            }
  
            const headers = {"content-type":"application/json"}
  
            const result = await fetch(url, { method:"post",body:JSON.stringify(payload),headers }).then(e=>e.json());
  
            alert(result.message);
  
            history.push("/login");

          } catch (error) {

            alert("Error occurred creating account, check your internet connection and try again");

          }
    }

  const handleValidation = (e) =>{

    if(!pass|| !email || !lastName  || !firstName || !username) {

    e.preventDefault() 

      setIsfilled(false)

       } 

      else{

         onSignup()

      }

    }
    
    const handleSubmit = (e) =>{

        setShow(true)

        e.preventDefault()
        
    }

    return (
       


 <div className="signup">

<h2>Sign Up</h2>

<p>Please fill this form to create an account</p>

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
  
    <input onClick={ (e) => handleValidation(e)}  name="Submit" value="Sign Up" type="submit" id="submit" className="submit" />

</form>

<p className="to_login">Already have an account with us? <Link to="/login"><b>Login</b></Link></p>

{show === false ? <p></p>: 
 
 <div className="tag__box">
 
 <div className="tag" >
 
    <p>Create your $mobme tag</p>
 
    <input type="text" name="tag__name" className="tag__name" id="tag_name" />
 
    <Link to="/">
 
    <input type="submit" name="create__tag" className="create__tag" value="Create" />
 
    </Link>
 
 </div>
 
 </div>}


</div>

)

}

export default Signup
