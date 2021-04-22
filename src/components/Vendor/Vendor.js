import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Vendor.scss'

const Vendor = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="Vendor">
            <div className="Vendor__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Vendor Account</h5>
            </div>
      
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Vendor Name</label>
                 <input name="Phone" type="text" defaultValue="" id="Phone" class="Phone"></input>

                 <label for="amount">Vendor Location</label>
                 <input name="amount" type="text" defaultValue="" id="amount" class="amount"></input>

                 <label for="amount">Business Phone number</label>
                 <input name="amount" type="text" defaultValue="" id="amount" class="amount"></input>

                 <input name="save" type="submit" value="Create" id="save" class="save"></input>
            </form>

   
        </div>
    )
}

export default Vendor
