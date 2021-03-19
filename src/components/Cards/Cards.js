import React from 'react'
import './Cards.scss'
import Kuda3 from './images/kuda3.png'
import LinkCard from '../LinkCard/LinkCard'
import {CreditCard} from 'phosphor-react'
const Cards = () => {
    return (
        <div className="cards">
            <h5 className="cards__heading">Card</h5>
            <img  className="cards__card" src={Kuda3} alt="Kuda card"></img>
            <p className="cards__message">Get a free physical or virtual debit card</p>
            <LinkCard style={{display:"none"}} className="cards__link"   IconOne={CreditCard} Heading="Request A Card" ParaG="We'll send it to you wherever you are" />
        </div>
    )
}

export default Cards
