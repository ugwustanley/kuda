import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft, XCircle ,  Plus , ArrowRight, TrendUp} from 'phosphor-react'
import './Payroll2.scss'

const Payroll2 = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
    const [set , setSet] = useState(false)
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
                

                 <button onClick={() => setSet(true)}>set</button>
               
             </div>
             
             <div className="bonus">
                 
                 <p>@rex</p>
                
               
                 <button onClick={() => setSet(true)}>set</button>
                
             </div>
             <div className="bonus">
                 
                 <p>@chiagozie_ugwu</p>
                
                
                 <button onClick={() => setSet(true)}>set</button>
                 
             </div>
             <div className="bonus">
                 
                 <p>@jamesjohn</p>
                
                 <Link to="">
                 <button onClick={( ) => setSet(true)}>set</button>
                 </Link>
             </div>
             <div className="bonus">
                 
                 <p>@paul</p>
                
                 
                 <button onClick={() => setSet(true)}>set</button>
                
             </div>
         </div>
          <button className="manage_staff">Manage staff</button>
          {/**
         <Link to="">
             <div className="add">
                 <Plus size={25}   color="#fff" />
             </div>
         </Link>
          */}
            
            { set === false? <p></p>:
           <div className="tag__box ">
           <div className="tag"   >
               <div className="tag__cancel" onClick={() => setSet(false)}><XCircle size={25} weight="bold" color="red" /></div>
               <h4>Set</h4>

              

                <input type="text" class="landmark" placeholder="Salary"/>

                <select defaultValue="Payment Cycle" class="select">
                    <option disabled value="Payment Cycle">Payment Cycle</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>

                <select defaultValue="Pay later limit" className="select">
                    <option disabled value = "Pay later limit">Pay later limit</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>

                </select>
            
                <button onClick={() => setSet(false)} className="storeandsocial">Submit</button>
              

           </div>
           </div>
         }


            
           
        </div>
    )
}

export default Payroll2;
