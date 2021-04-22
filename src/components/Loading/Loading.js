import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import "./Loading.scss"

const Loading = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="loading">
             <div className="loading__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Loading</h5>
            </div>
            <div className="animation">
                <div className="ring"></div>
            </div>
            
        </div>
    )
}

export default Loading
