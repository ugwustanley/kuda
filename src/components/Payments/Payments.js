import React from 'react'
import './Payments.scss'
import {Link} from 'react-router-dom'
import LinkCard from '../LinkCard/LinkCard'
import {DeviceMobile,Globe, Handshake,  Bank , Notepad, Use , PaperPlaneTilt, Users, Clock, Wallet} from 'phosphor-react'
const Payments = () => {
    return (
        <div className="payments">
            <h5 className="payments__heading">Payments</h5>
          <Link to="/payroll">
            <div className="payments__friends">
                <div className="payments__message">
                    <h5>Payroll</h5>
                    <p>Set employee payroll</p>
                </div>
                <button className="payments__button">Activate</button>
            </div>
            </Link>
            <div className="payments__links">
            <Link to="/paypage">
            <LinkCard  IconOne={Handshake} Heading="Pay" ParaG="Make Peer to Peer Transfer" />
            </Link>
            <Link to="/request">
            <LinkCard  IconOne={Users} Heading="Request Payment" ParaG="Request Peer to Peer Transfer" />
            </Link>
            <Link to="/recurr">
            <LinkCard  IconOne={Clock} Heading="Recurring Billing" ParaG="Create Scheduled Payments" />
            </Link>
            <Link to="/withdraw" >
            <LinkCard  IconOne={Wallet} Heading="Withdraw" ParaG="Withdraw to Your Bank Account" />
            </Link>
            <LinkCard  IconOne={Bank} Heading="Invest" ParaG="15% Interest on 6 Months fixed Deposits" />
            </div>
            
        </div>
    )
}

export default Payments
