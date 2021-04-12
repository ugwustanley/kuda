import React from 'react'
import './Cards.scss'
//import Kuda3 from './images/EV9QJx7XsAAMWkS_1.jpg'
import LinkCard from '../LinkCard/LinkCard'
import {CreditCard , FirstAid} from 'phosphor-react'

const Cards = () => {
    return (
        <div className="cards">
             {/*   <img  className="cards__card" src={Kuda3} alt="Kuda card"></img>
             <p className="cards__message">Get a free physical or virtual debit card</p>*/}
             <h5 className="cards__heading">Bsure</h5>
             <div className="cards__link">
             <LinkCard style={{display:"none"}} className="cards__link"   IconOne={FirstAid} Heading="Pay Later Healthcare" ParaG="(Coming Soon)" />
             </div>
           
        </div>
    )
}

export default Cards
