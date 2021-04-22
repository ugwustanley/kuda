import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './CreateShop.scss'

const CreateShop = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="CreateShop">
            <div className="CreateShop__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Create Shop</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Vendor name</label>
                 <input name="Phone" type="text" defaultValue="" id="Phone" class="Phone" />

                 <label for="amount">Location</label>
                 <input name="amount" type="text" defaultValue="" id="amount" class="amount" />

               <Link to="dashboard"> <input name="save" type="submit" value="Create shop" id="save" class="save" /> </Link> 
            </form>

       
        </div>
    )
}

export default CreateShop
