import React from 'react'
import './Settings.scss'
import {useHistory} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
//<div className="setting__back" onClick={history.goBack}>
//<CaretLeft size={20} weight="bold" />
//</div>
//<h2>Profile setting</h2>
const Settings = () => {
    let history = useHistory()
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
                 <input name="firstname" type="text" defaultValue="Ugwu" id="firstname" class="firstname"></input>

                 <label for="lastname">Last Name</label>
                 <input name="lastname" type="text" defaultValue="stanley" id="lastname" class="lastname"></input>

                 <label for="phonenumber">Phone number</label>
                 <input name="phonenumber" type="tel" defaultValue="08000000000" id="phonenumber" class="phonenumber"></input>

                 <label for="email">Email Address</label>
                 <input name="email" type="email" defaultValue="ugwustanley@gmail.com" id="email" class="email"></input>

                 <label for="mobkey">Enter Mobkey</label>
                 <input name="mobkey" type="text" defaultValue="stanlee" id="mobkey" class="mobkey"></input>

                 <input name="save" type="submit" value="Save changes" id="save" class="save"></input>
            </form>
        </div>
    )
}

export default Settings
