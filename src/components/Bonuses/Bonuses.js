import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Trophy, Users} from 'phosphor-react'
import Badge from './images/rewards.png'
import Badge4 from './images/bonus2.png'
import Badge5 from './images/bonus3.png'
import Badge2 from './images/cart2-removebg-preview.png'
import Badge3 from './images/bonus1-removebg-preview.png'
import './Bonuses.scss'

const Bonuses= () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="bonuses">
            <div className="bonuses__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Bonuses</h5>
            </div>
           
             <div className="bonus">
                 <img src={Badge}></img>
                 <p>Referral Bonus</p>
                 <h5>00:00</h5>
             </div>
             <div className="bonus">    
                 <img className="badge2" src={Badge2}></img>
                 <p>Shopping Cash Back</p>
                 <h5>00:00</h5>    
             </div>

             <div className="bonus">
                 <img className="badge2" src={Badge4}></img>
                 <p>Withdrawn Bonus</p>
                 <h5>00:00</h5>
             </div>

             <div className="bonus">
                 <img className="badge3" src={Badge3}></img>
                 <p>Available Bonus</p>
                 <h5>00:00</h5>
             </div>

             <div className="bonus">
                 <img className="badge2" src={Badge5}></img>
                 <p>Total Bonus</p>
                 <h5>00:00</h5>
             </div>
            
           
        </div>
    )
}

export default Bonuses;
