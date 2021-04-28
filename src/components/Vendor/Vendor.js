import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Vendor.scss'

const Vendor = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
  const [ phone , setPhone] = useState("")
    const [location , setLocation] = useState("")
    const [name , setName] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(phone === "" || location === "" || name === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setIsfilled(true)
      }
    }
    
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
                 <input name="Phone" onChange={(e) => setName(e.target.value)} type="text" defaultValue="" id="Phone"  className={isfilled === false ? `fail phone` :`phone` } />

                 <label for="amount">Vendor Location</label>
                 <input name="amount" onChange={(e) => setLocation(e.target.value)} type="text" defaultValue="" id="amount"  className={isfilled === false ? `fail amount` :`amount` } />

                 <label for="amount">Business Phone number</label>
                 <input name="amount" onChange={(e) => setPhone(e.target.value)} type="text" defaultValue="" id="amount"  className={isfilled === false ? `fail amount` :`amount` } />

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="Create" id="save" className="save" />
            </form>

   
        </div>
    )
}

export default Vendor
