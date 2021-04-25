import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {ArrowLeft, CaretLeft} from 'phosphor-react'
import './ComingSoon.scss'
//xlink:
const ComingSoon = () => {
    let history =  useHistory()
    const [show , setShow] = useState(true)
    return (
        <div className="coming">
            <div className="coming__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Coming Soon</h5>
            </div>
        <div className="content">
            <div class="svg-cont">
            <div class="svg-cont">
                    <svg className="svg" width="100%" height="150" viewBox="0 0 750 150">
                        <symbol id="text">
                            <text text-anchor="middle" x="50% "y="97%" class="h1">COMING SOON!</text>
                        </symbol>
                        <use href="#text"></use>
                    </svg>
                    
                   </div>
             </div>
             <div className="button" onClick={history.goBack}>
                   <div>
                   < ArrowLeft size={23} />
                   </div>
                   <p>Go Back</p>
             </div>
             </div>
        </div>
    )
}

export default ComingSoon;
