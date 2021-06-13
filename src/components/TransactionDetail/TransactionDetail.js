import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import LinkCard from '../LinkCard/LinkCard'
import {CaretLeft , PaperPlaneTilt , WarningCircle, ShareNetwork} from 'phosphor-react'
import './TransactionDetail.scss'

const TransactionDetail= () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="TransactionDetail">
            <div className="TransactionDetail__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Transaction Detail</h5>
            </div>
           <div>

               <h5 className="date_stamp">ON JUN 06, 2021 at 04:31 PM</h5>

               <h3><Naira>2000</Naira></h3>
               <p className="receipt_name">@chiamakanzeh</p>

               <p className="input_heading">From</p>
                <div className="transaction_from">
                   <h5  className="input_data transaction_source">@chiagoziestanley</h5>
                  <div className="send_icon">
                  <PaperPlaneTilt size={18} weight="fill" color="rgb(4, 4, 121)" />
                  </div>
               </div>

               <p className="input_heading">Transaction type</p>
               <h5 className="input_data">Recurring Payment</h5>

               <p className="input_heading">Session ID</p>
               <h5  className="input_data">0000003025523020352032723</h5>

               <h4 className="more_actions">More Actions</h4>
               <LinkCard  IconOne={ShareNetwork} Heading="Share Transaction Receipt" ParaG="Share transaction receipt with friends" />
            </div>

             </div>  
           
       
    )
}

export default TransactionDetail;
