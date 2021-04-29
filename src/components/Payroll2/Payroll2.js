import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft ,  Plus , ArrowRight} from 'phosphor-react'
import './Payroll2.scss'

const Payroll2 = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="Payroll2">
            <div className="Payroll2__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Payroll</h5>
            </div>
            <div className="Payroll2__content">
             <div className="bonus">
                 
                 <p>@stanlee</p>
                
                 <Link to="">
                 <button>set</button>
                 </Link>
             </div>
             
             <div className="bonus">
                 
                 <p>@rex</p>
                
                 <Link to="">
                 <button>set</button>
                 </Link>
             </div>
             <div className="bonus">
                 
                 <p>@chiagozie_ugwu</p>
                
                 <Link to="">
                 <button>set</button>
                 </Link>
             </div>
             <div className="bonus">
                 
                 <p>@jamesjohn</p>
                
                 <Link to="">
                 <button>set</button>
                 </Link>
             </div>
             <div className="bonus">
                 
                 <p>@paul</p>
                
                 <Link to="">
                 <button>set</button>
                 </Link>
             </div>
         </div>
         <Link to="">
             <div className="add">
                 <Plus size={25}   color="#fff" />
             </div>
         </Link>
            
          


            
           
        </div>
    )
}

export default Payroll2;
