import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './Signup.scss'

const Signup = () => {
    const [show , setShow] = useState(false)
    
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
    <input type="text" name="name" id="name" className="name" />
    <label for="email">Email address</label>
    <input type="email" name="email" id="email" className="email" />
    <label for="password">Password</label>
    <input type="password" name="" id="password" className="password" />
    <input  name="Submit" value="Sign Up" type="submit" id="submit" className="submit" />
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
