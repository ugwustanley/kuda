import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Pay.scss'

const Pay = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="pay">
            <div className="pay__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Pay</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Phone number/$Mobme</label>
                 <input name="Phone" type="text" defaultValue="" id="Phone" class="Phone"></input>

                 <label for="amount">Amount</label>
                 <input name="amount" type="tel" defaultValue="" id="amount" class="amount"></input>

                 <input onClick={() => setShow(true)} name="save" type="submit" value="Send" id="save" class="save"></input>
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

export default Pay
