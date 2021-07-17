import React , { useState , useEffect} from 'react'
import './Settings.scss'
import {useHistory} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
//<div className="setting__back" onClick={history.goBack}>
//<CaretLeft size={20} weight="bold" />
//</div>
//<h2>Profile setting</h2>
const Settings = () => {
    let history = useHistory()
    const [ email , setEmail] = useState()
    const [phone , setPhone] = useState()
    const [fname , setFname] = useState()
    const [lname , setLname] = useState()
    const [key , setKey] = useState()
    const [isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if( !phone || !email || !fname || !lname || !key  ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setIsfilled(true)
      }
    }
    const user = JSON.parse(localStorage.getItem("user"))
    //console.log(user)
        useEffect(() => {
            
            if(user){
                console.log(user , "jijijijijijijij")
               setFname(user.lastName)
               setLname(user.firstName)
               setPhone(user.phone)
               setKey(user.username)
               setEmail(user.email)
            } 
            
        }, [user.password, user.email])
    return (
        <div className="setting">
            <div className="setting__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Profile Setting</h5>
            </div>
            
            
            <h2>Edit Profile</h2>
             <form onSubmit={(e) => e.preventDefault()}>
                 <label for="firstname">First Name</label>
                 <input onChange={(e) => setFname(e.target.value)} name="firstname" type="text" defaultValue={fname} id="firstname" className={isfilled === false ? `fail firstname` :`firstname`} />

                 <label for="lastname">Last Name</label>
                 <input onChange={(e) => setLname(e.target.value)} name="lastname" type="text" defaultValue={lname} id="lastname" className={isfilled === false ? `fail lastname` :`lastname`} />

                 <label for="phonenumber">Phone number</label>
                 <input onChange={(e) => setPhone(e.target.value)} name="phonenumber" type="tel" defaultValue={phone} id="phonenumber" className={isfilled === false ? `fail phonenumber` :`phonenumber`} />

                 <label for="email">Email Address</label>
                 <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" defaultValue={email} id="email" className={isfilled === false ? `fail email` :`email`} />

                 <label for="mobkey">Enter Mobkey</label>
                 <input onChange={(e) => setKey(e.target.value)} name="mobkey" type="text" defaultValue={key} id="mobkey" className={isfilled === false ? `fail mobkey` :`mobkey`} />

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="Save changes" id="save" className="save" />
            </form>
        </div>
    )
}

export default Settings
