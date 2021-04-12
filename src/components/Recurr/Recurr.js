import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Recurr.scss'

const Recurr = () => {
    let option1 = [
        `1`, `2`, `3` ,`4`  ,`5` , `6` , `7`,`8`,`9`,`10`,`11`,`12`
      ];
    let defaultOption1 = option1[0];

    let option2 = [
        `Daily`,'Weekly',"Monthly"
      ];
    let defaultOption2 = option2[0];

    let history =  useHistory()

    const [show , setShow] = useState(false)
    //               <input name="Phone" min="1"  type="number" defaultValue="" id="Phone" class="Phone"></input>
    return (
        <div className="recurr">
            <div className="recurr__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Recurring Payment</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Phone number/$Mobme</label>
                 <input name="Phone" type="text" defaultValue="" id="Phone" class="Phone"></input>

                 <label for="amount">Amount</label>
                 <input name="amount" type="tel" defaultValue="" id="amount" class="amount"></input>
                  
                 

                 <label for="cycle">Cycle of payment</label>
  
                 
                 <div className="dropdown">
                   <Dropdown options={option2} value={defaultOption2}  menuClassName='dropdown__menu' controlClassName='dropdown__box'  />    
                 </div>
                 <label for="ncycle">Number of cycle(s)</label>
  
                 
                 <div className="dropdown">
                   <Dropdown options={option1} value={defaultOption1}  menuClassName='dropdown__menu' controlClassName='dropdown__box'  />    
                 </div>
                 <label for="date">Commencement Date</label>
                 <input name="date"   type="date" defaultValue="" id="date" class="date"></input>

                 <input onClick={() => setShow(true)} name="save" type="submit" value="Make Payment" id="save" class="save"></input>
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

export default Recurr;
