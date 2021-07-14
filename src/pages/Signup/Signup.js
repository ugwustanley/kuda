import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './Signup.scss'

const Signup = () => {
    const [show , setShow] = useState(false)
    const [ email , setEmail] = useState("")
    const [pass , setPass] = useState("")
    const [name , setName] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(pass === "" || email === "" || name === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setShow(true)
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
    <label for="name">Name</label>
    <input type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className={isfilled === false ? `fail name` :`name` } />
    <label for="email">Email address</label>
    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className={isfilled === false ? `fail email` :`email` } />
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
