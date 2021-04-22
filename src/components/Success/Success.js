import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft, Warning , CircleWavyCheck} from 'phosphor-react'
import './Success.scss'

const Success = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="Success">
            <div className="Success__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Success</h5>
            </div>
            <div className="message">
                <div><CircleWavyCheck size={60} weight="fill" color="green" /></div>
                <h2>Transaction Successful</h2>
                <button>Go back</button>
            </div>
        </div>
    )
}

export default Success
