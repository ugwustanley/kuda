import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Transpass.scss'

const Transpass = () => {
    let history =  useHistory()
    const [show , setShow] = useState(true)
    return (
        <div className="transpass">
            <div className="transpass__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Change Transaction Password</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="pass1">Current Transaction Password</label>
                 <input name="pass1" type="text" defaultValue="" id="pass1" class="pass1"></input>

                 <label for="pass2">New Transaction Password</label>
                 <input name="pass2" type="text" defaultValue="" id="pass2" class="pass2"></input>

                 <label for="pass3">Confirm Transaction Password</label>
                 <input name="pass3" type="text" defaultValue="" id="pass3" class="pass3"></input>

                 <input  name="save" type="submit" value="Change Password" id="save" class="save"></input>
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

export default Transpass;
