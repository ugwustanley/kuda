import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft, XCircle } from 'phosphor-react'
import './Managestaff.scss'


const Managestaff= () => {
    let history =  useHistory()
    const [update , setUpdate] = useState(false)
    const [suspend, setSuspend] = useState(false)
  //  const [show , setShow] = useState(false)
    return (
        <div className={ update === false || suspend === false ? `Managestaff` :`Managestaff cut`}>
          
            <div className="Managestaff__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Manage Staff</h5>
            </div>
            {/* <div className="bonus_heading">
                 <h4>Handle</h4>
                 <h4>Cycle</h4>
                 <h4>Salary</h4>
                
             </div> */}

             <div className="staff_unit">
                  <h4>Handle</h4>
                  <p>@vincentmicheal</p>
                  <h4>Salary</h4>
                  <p><Naira>26000</Naira></p>
                  <h4>Cycle</h4>
                  <p>13</p>
                  <h4>Paylater limit</h4>
                  <p>18</p>
                  <h4>Tax beneficiary</h4>
                  <p>Abia</p>

                  <button className="suspend">Suspend</button>
                  
             </div>

             <div className="staff_unit">
                  <h4>Handle</h4>
                  <p>@victorpaul</p>
                  <h4>Salary</h4>
                  <p><Naira>17000</Naira></p>
                  <h4>Cycle</h4>
                  <p>19</p>
                  <h4>Paylater limit</h4>
                  <p>16</p>
                  <h4>Tax beneficiary</h4>
                  <p>Lagos</p>
                  <button className="suspend">Suspend</button>
                  
             </div>

             <div className="staff_unit">
                  <h4>Handle</h4>
                  <p>@peterchiagozie</p>
                  <h4>Salary</h4>
                  <p><Naira>80000</Naira></p>
                  <h4>Cycle</h4>
                  <p>22</p>
                  <h4>Paylater limit</h4>
                  <p>8</p>
                  <h4>Tax beneficiary</h4>
                  <p>Enugu</p>
                  <button className="suspend">Suspend</button>
                  
             </div>

             <div className="staff_unit">
                  <h4>Handle</h4>
                  <p>@JamesJohn</p>
                  <h4>Salary</h4>
                  <p><Naira>6000</Naira></p>
                  <h4>Cycle</h4>
                  <p>78</p>
                  <h4>Paylater limit</h4>
                  <p>7</p>
                  <h4>Tax beneficiary</h4>
                  <p>Lagos</p>
                  <button className="suspend">Suspend</button>
                  
             </div>


          
 
             <div className="payroll_details">
             <h4>Payroll bank details</h4>
             <button className="update_details" onClick={() => setUpdate(true)}>Update Details</button>
             </div>
             <div className="bank_details">
                 <h4>Bank name</h4>
                 <p>First Bank Nigeria</p>
             </div>
             <div className="bank_details">

                 <h4>Account Name</h4>
                 <p>Ugwu Chiagozie Stanley</p>

             </div>
             <div className="bank_details">
                 <h4>Account Number</h4>
                 <p>20100784334</p>
             </div>
                        
         { update === false? <p></p>  :
           <div className="tag__box ">

           <div className="tag">

              <div className="tag__cancel" onClick={() => setUpdate(false)}>
                  <XCircle size={25} weight="bold" color="red" />
              </div>
              
               <h4>Update Details</h4>

                <input type="text" class="landmark" placeholder="Bank Name"/>

                <input type="text" class="landmark" placeholder="Account Name"/>

                <input type="text" class="landmark" placeholder="Account Number"/>
                          
                <button onClick={() => setUpdate(false)} className="storeandsocial">Update</button>
              
             </div>

           </div>
         }

        { suspend === false? <p></p>  :
           <div className="tag__box ">

           <div className="tag">
                          
                <button onClick={() => setSuspend(false)} className="storeandsocial suspend">Suspend</button>

                <button onClick={() => setSuspend(false)} className="storeandsocial cancel">Cancel</button>
              
             </div>

           </div>
         }

        </div>
    )
}

export default Managestaff;
