import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft, Warning} from 'phosphor-react'
import './Failed.scss'

const Failed = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="Failed">
            <div className="Failed__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Failed</h5>
            </div>
            <div className="message">
                <div><Warning size={60} color="red" /></div>
                <h2>Transaction Failed</h2>
                <button>Retry</button>
            </div>
        </div>
    )
}

export default Failed
