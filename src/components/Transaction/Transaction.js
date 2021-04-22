import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft , Trophy, Users} from 'phosphor-react'
/*import Badge from './images/rewards.png'
import Badge4 from './images/bonus2.png'
import Badge5 from './images/bonus3.png'
import Badge2 from './images/cart2-removebg-preview.png'
import Badge3 from './images/bonus1-removebg-preview.png'*/
import './Transaction.scss'

const Transaction= () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="Transaction">
            <div className="Transaction__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Transaction</h5>
            </div>
           
             <div className="bonus">
                 <p>Total</p>
                 <h5><Naira>0</Naira></h5>
             </div>

             <div className="bonus">
                 <p>Date( Month & Year )</p>
                 <input type="month" className="month" id="month" name="month" />
             </div>

             <input type="submit" className="submit" value="Submit" name="submit" />

             </div>  
           
       
    )
}

export default Transaction;
