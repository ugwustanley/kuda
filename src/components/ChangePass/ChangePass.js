import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './ChangePass.scss'

const ChangePass = () => {
    let history =  useHistory()
    const [show , setShow] = useState(true)
  
    const [pass1 , setPass1] = useState("")
    const [pass2 , setPass2] = useState("")
    const [pass3 , setPass3] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(pass1 === "" || pass2 === "" || pass3 === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setIsfilled(true)
      }
    }
    
    return (
        <div className="change">
            <div className="change__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Change Password</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="pass1">Current Password</label>
                 <input onChange={(e) => setPass1(e.target.value)} name="pass1" type="text" defaultValue="" id="pass1" className={isfilled === false ? `fail pass1` :`pass1` } />

                 <label for="pass2">New Password</label>
                 <input onChange={(e) => setPass2(e.target.value)} name="pass2" type="text" defaultValue="" id="pass2" className={isfilled === false ? `fail pass2` :`pass2` } />

                 <label for="pass3">Confirm Password</label>
                 <input onChange={(e) => setPass3(e.target.value)} name="pass3" type="text" defaultValue="" id="pass3" className={isfilled === false ? `fail pass3` :`pass3` } /> 

                 <input onClick={ (e) => handleValidation(e)}  name="save" type="submit" value="Change Password" id="save" className="save" />
            </form>

          { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag" >
              <p>confirm password to proceed</p>
              <input type="text" name="tag__name" className="tag__name" id="tag_name" />
              <div  onClick={() => setShow(false)}>
              <input type="submit" name="create__tag" className="create__tag" value="Confirm" />
              </div>
           </div>
           </div>}
        </div>
    )
}

export default ChangePass;
