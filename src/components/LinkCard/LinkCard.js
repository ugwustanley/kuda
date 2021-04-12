import React from 'react'
import {CaretRight, PaperPlaneTilt} from 'phosphor-react'
import './LinkCard.scss'

const LinkCard = ({ IconOne , Heading , ParaG}) => {
    return (
        <div className="linkcard">
            <div className="linkcard__image"><IconOne size={18} weight="fill" /></div>
            <div className="linkcard__message">
                <h5>{Heading}</h5>
                <p>{ParaG}</p>
            </div>
            <CaretRight size={25} />
        </div>
    )
}

export default LinkCard
