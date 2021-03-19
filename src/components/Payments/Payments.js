import React from 'react'
import './Payments.scss'
import LinkCard from '../LinkCard/LinkCard'
import {DeviceMobile,Globe, Link , Notepad , PaperPlaneTilt} from 'phosphor-react'
const Payments = () => {
    return (
        <div className="payments">
            <h5 className="payments__heading">Payments</h5>
            <div className="payments__friends">
                <div className="payments__message">
                    <h5>Friends on Kuda</h5>
                    <p>Find your contacts on Kuda</p>
                </div>
                <button className="payments__button">Connect</button>
            </div>
            <div className="payments__links">
            <LinkCard  IconOne={PaperPlaneTilt} Heading="Send Money" ParaG="Free transfer to all banks" />
            <LinkCard  IconOne={DeviceMobile} Heading="Buy Airtime" ParaG="Recharge any phone easily" />
            <LinkCard  IconOne={Notepad} Heading="Pay A Bill" ParaG="Take care of your essentials" />
            <LinkCard  IconOne={Link} Heading="Payment Link" ParaG="Send money with a sample link" />
            <LinkCard  IconOne={Globe} Heading="Web Payment" ParaG="Pay online without your card" />
            </div>
            
        </div>
    )
}

export default Payments
