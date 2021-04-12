import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Kin.scss'
//import { faChessKing } from '@fortawesome/free-solid-svg-icons'

const Kin = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="kin">
            <div className="kin__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Next of Kin</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <p>Your next of kin will recieve your $mobme balance if life happens</p>
   
                 <input name="fullname" type="text" defaultValue="" id="fullname" placeholder="Full Name" className="fullname" />

                 <input name="email" type="text" defaultValue="" id="email" placeholder="Email" className="email" />

                 <input name="phone" type="tel" defaultValue="" id="phone" placeholder="Phone" className="phone" />

                 <h4>Other Details</h4>

                 <select defaultValue="Relationship" className="select" name="Gender">
                     <option value="Relationship" disabled>Relationship</option>
                     <option value="Mother">Mother</option>
                     <option value="Father">Father</option>
                     <option value="Brother">Brother</option>
                     <option value="Sister">Sister</option>
                     <option value="Child">Child</option>
                     <option value="Cousin">Cousin</option>
                     <option value="Husband">Husband</option>
                     <option value="Wife">Wife</option>
                     <option value="Aunt">Uncle</option>
                     <option value="Guardian">Guardian</option>
                     <option value="Other">Other</option>
                 </select>

                 <select defaultValue="Gender" className="select" name="Gender">
                     <option value="Gender" disabled>Gender</option>
                     <option value="female">Male</option>
                     <option value="Female">Female</option>
                 </select>
          

                 <input onClick={() => setShow(true)} name="save" type="submit" value="Save Changes" id="save" class="save" />
            </form>

          { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag" >
              <p>confirm password to proceed</p>
              <input type="text" name="tag__name" className="tag__name" id="tag_name" />
              <Link to="/">
              <input type="submit" name="create__tag" className="create__tag" value="Confirm" />
              </Link>
           </div>
           </div>}
        </div>
    )
}

export default Kin;
