/*import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Request.scss'

const Request = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="request">
            <div className="request__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Request</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Account number/$Mobme handle</label>
                 <input name="Phone" type="text" defaultValue="" id="Phone" class="Phone"></input>

                 <label for="amount">Amount</label>
                 <input name="amount" type="tel" defaultValue="" id="amount" class="amount"></input>

                 <input onClick={() => setShow(true)} name="save" type="submit" value="Make Request" id="save" class="save"></input>
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

export default Request;
*/

import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Request.scss'

const Request = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [ accname , setAccname] = useState("")
    const [ acc , setAcc] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(accname === "" || acc === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setShow(true)
      }
    }
    return (
        <div className="Request">
            <div className="Request__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Request</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Account number/$Mobme handle</label>
                 <input name="Phone" onChange={(e) => setAccname(e.target.value)} type="text" defaultValue="" id="Phone" className={isfilled === false ? `fail phone` :`phone` }  />

                 <label for="amount">Amount</label>
                 <input name="amount" onChange={(e) => setAcc(e.target.value)} type="tel" defaultValue="" id="amount" className={isfilled === false ? `fail amount` :` amount` }  />
                 
                 <label for="pay_later">Pay Later Limit</label>
                 <select className="select">

                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>

                 </select>

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="Make request" id="save" className="save"/>
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

export default Request
