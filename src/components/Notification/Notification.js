import React from 'react'
import "./Notification.scss"
import {CaretLeft} from 'phosphor-react'
import {Link , useHistory} from 'react-router-dom'

const Notification = () => {
    let history = useHistory()
    return (
        <div className="notification">
            <div className="notification__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Notification</h5>
            </div>
            <h5 className="notification__day">June, 2021</h5>
           <div className="notification__message">
                <h5 >Welcome back to Rand</h5> 
                <p>Hi, Ugwu Stanley, your rand number is 0000000000 and you can now use your account right away</p>   
           </div>
            
        </div>
    )
}

export default Notification
