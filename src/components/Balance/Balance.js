import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Trophy, Users} from 'phosphor-react'
/*import Badge from './images/rewards.png'
import Badge4 from './images/bonus2.png'
import Badge5 from './images/bonus3.png'
import Badge2 from './images/cart2-removebg-preview.png'
import Badge3 from './images/bonus1-removebg-preview.png'*/
import './Balance.scss'

const Balance= () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="Balance">
            <div className="Balance__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Balance</h5>
            </div>
           
             <div className="bonus">
                 <p>Available Balance</p>
                 <h5>00:00</h5>
             </div>
             <div className="bonus">    
                 <p>Unavaliable</p>
                 <h5>00:00</h5>    
             </div>

             <div className="bonus">
                 <p>Cashout ready</p>
                 <h5>00:00</h5>
             </div>

             <div className="bonus">
                 <p>Total Balance</p>
                 <h5>00:00</h5>
             </div>
             </div>
            
            
           
       
    )
}

export default Balance;
