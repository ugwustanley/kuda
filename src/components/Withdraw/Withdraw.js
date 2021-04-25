import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Withdraw.scss'

const Withdraw = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [ amt , setAmt] = useState("")
    
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(amt === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setShow(true)
      }
    }

// <label for="Phone">Phone number/$Mobme</label>
//<input name="Phone" type="text" defaultValue="" id="Phone" class="Phone"></input>

    return (
        <div className="withdraw">
            <div className="withdraw__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Withdraw</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                

                 <label for="amount">Amount</label>
                 <input name="amount" onChange={(e) => setAmt(e.target.value)} type="tel" defaultValue="" id="amount" className={isfilled === false ? `fail amount` :` amount` }  />
                 <label for="bank">Bank</label>

                 <input name="bank" type="text" defaultValue="Zenith Bank" id="bank" disabled className="bank" />
                 
                 <Link to="/addbank">
                 <input name="changebank" type="submit" value="Change" id="changebank" className="save changebank" />
                 </Link>
               
                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="Withdraw" id="save" class="save" />
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

export default Withdraw;
