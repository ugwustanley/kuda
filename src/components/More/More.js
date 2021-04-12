import React,{useState} from 'react'
import LinkCard from '../LinkCard/LinkCard'
import { Link } from 'react-router-dom'
import {Notepad, SpeakerHigh , LockKey,   Bell , CreditCard , UserCircle, ChatCenteredText, LockSimple, CircleWavyCheck, ClockClockwise, ShoppingCart} from 'phosphor-react'
import './More.scss'

const More = () => {
 /*   let weight = 'bold'
    let color = 'none'
    const [active , setActive] = useState(true)
    
    const HandleClick = () =>{
          if(active){
              setActive(false)
          }
          else{
              setActive(true)
          }

           onClick = {HandleClick} style={{color:`${color}`}} { ...active === true ? (weight = "fill" , color = "#41d546d3") : null }
    } */

    return (
        <div className="more">
            <div className="more__main">
            <div className="more__heading">
                 <h5>More </h5> 
                
                     <div >
                        <Link to="/notification">
                            <Bell size={20} color="#301a96"  weight="fill" />
                        </Link>
                     </div>
                
            </div>
            <LinkCard  IconOne={Notepad} Heading="Transaction History" ParaG="View monthly Statements" />
            <LinkCard  IconOne={CircleWavyCheck} Heading="Update KYC" ParaG="Get Verified to Enjoy More Privileges" />
            <Link to="/setting">
            <LinkCard  IconOne={UserCircle} Heading="My Account" ParaG="Manage Your accounts" />
            </Link>
            <LinkCard  IconOne={ChatCenteredText} Heading="Contact Us" ParaG="Get support or send feedback" />
            <LinkCard  IconOne={LockKey} Heading="Two Factor Authentication" ParaG="Add Extra Layer of Security" />
            <LinkCard  IconOne={SpeakerHigh} Heading="Referrals" ParaG="Spread our Product and Earn" />
            <LinkCard  IconOne={ShoppingCart} Heading="Become a Vendor" ParaG="Your Ticket to More Sales" />
            <LinkCard  IconOne={Notepad} Heading="Terms of Use" ParaG="Our Terms and Conditions" />
            <h4 style={{textAlign:'center', color: "red"}}>Sign Out</h4>
            </div>
           
        </div>
    )
}

export default More
