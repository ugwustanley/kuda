import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Trophy, Users} from 'phosphor-react'
import Reward from './images/reward3-unscreen.gif'
import './Cashback.scss'

const Cashback= () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="cashback">
            <div className="cashback__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Shopping cash back</h5>
            </div>

            <p className="cashback__head">Manage shopping cash back rewards</p>
            <div className="cashback__invite">
                 <Trophy size={48} />
                 <div >
                     <h5>You have 0 cash back</h5>
                     <p>Activate cash backs by sharing your #randnumber each time you shop to increase cash back rewards</p>
                 </div>
            </div>

             <h4>Refer and start earning</h4>
            <div className='cashback__share'>
               <div>
               <h3>Refer & Earn</h3>
                <p>All rewards can be withdrawn to your bank account or used in shopping</p>
               </div>
               <img src={Reward}></img>
            </div>
           
        </div>
    )
}

export default Cashback;
