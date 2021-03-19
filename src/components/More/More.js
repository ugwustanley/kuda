import React from 'react'
import LinkCard from '../LinkCard/LinkCard'
import {Notepad , CreditCard , UserCircle, ChatCenteredText, LockSimple, CircleWavyCheck, ClockClockwise} from 'phosphor-react'
import './More.scss'

const More = () => {
    return (
        <div className="more">
            <div className="more__main">
            <h5 className="more__heading">More</h5>
            <LinkCard  IconOne={Notepad} Heading="Statements and Reports" ParaG="Download monthly statement" />
            <LinkCard  IconOne={CreditCard} Heading="Saved Cards" ParaG="Manage connected cards" />
            <LinkCard  IconOne={UserCircle} Heading="Linked Accounts" ParaG="Manage external accounts" />
            <LinkCard  IconOne={ChatCenteredText} Heading="Chat With Us" ParaG="Get support or send feedback" />
            <LinkCard  IconOne={LockSimple} Heading="Security" ParaG="Protect yourself from intruders" />
            <LinkCard  IconOne={CircleWavyCheck} Heading="Referrals" ParaG="Earn Money" />
            <LinkCard  IconOne={ClockClockwise} Heading="Account Limits" ParaG="How Much To Spend" />
            <LinkCard  IconOne={Notepad} Heading="Legal" ParaG="About Our Contract With You" />
            <h4 style={{textAlign:'center', color: "red"}}>Sign Out</h4>
            </div>
           
        </div>
    )
}

export default More
