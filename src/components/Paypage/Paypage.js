import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft ,  Plus} from 'phosphor-react'
import './Paypage.scss'

const Paypage = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    return (
        <div className="paypage">
            <div className="paypage__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Make Payment</h5>
            </div>
            <div>
             <div className="bonus">
                 
                 <p>@stanlee</p>
                 <h5>N50,000</h5>
                 <Link to="/pay">
                 <button>Pay</button>
                 </Link>
             </div>
             
             <div className="bonus">
                 
                 <p>@Rex</p>
                 <h5>N20,000</h5>
                 <Link to="/pay">
                 <button>Pay</button>
                 </Link>
             </div>
             <div className="bonus">
                 
                 <p>@Chiagozie_ugwu</p>
                 <h5>N120,000</h5>
                 <Link to="/pay">
                 <button>Pay</button>
                 </Link>
             </div>
             <div className="bonus">
                 
                 <p>@jamesjohn</p>
                 <h5>N500,000</h5>
                 <Link to="/pay">
                 <button>Pay</button>
                 </Link>
             </div>
         </div>
         <Link to="/pay">
             <div className="add">
                 <Plus size={40}   color="#fff" />
             </div>
         </Link>
            
          


            
           
        </div>
    )
}

export default Paypage;
