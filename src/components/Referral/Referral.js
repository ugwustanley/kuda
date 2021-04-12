import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Trophy, Users} from 'phosphor-react'
import Reward from './images/reward3-unscreen.gif'
import './Referral.scss'

const Referral= () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="referral">
            <div className="referral__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Referral Earnings</h5>
            </div>

            <p className="referral__head">Manage, send referral code to friends and receive rewards</p>
            <div className="referral__invite">
                 <Users size={48} />
                 <div >
                     <h5>You've invited 0 people</h5>
                     <p>Get and gift 1,000 Naira to you and your referral. The amount you earn is ubnlimited</p>
                 </div>
            </div>

             <h4>Refer and start earning</h4>
            <div className='rewards__share'>
               <div>
               <h3>Refer & Earn</h3>
                <p>Refer your friends and win as much as 1,000 Naira for you and your friends</p>
               </div>
               <img src={Reward}></img>
            </div>
           
        </div>
    )
}

export default Referral;
