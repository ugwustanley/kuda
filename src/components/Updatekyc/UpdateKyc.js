import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Updatekyc.scss'

const Updatekyc = () => {
    let history =  useHistory()
    const [show , setShow] = useState(true)
    const [showing , setShowing] = useState(1)
    const [ email , setEmail] = useState("")
    const [ acc , setAcc] = useState("")
    const [org , setOrg] = useState("")
    const [ isfilled , setIsfilled] = useState(true)
    const [ isfilled2 , setIsfilled2] = useState(true)
    const [ isfilled3 , setIsfilled3] = useState(true)

    const handleValidation1 = (e) =>{
      if( email === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
        setShowing(2)
      }
    }

    const handleValidation2 = (e) =>{
        if( acc === "" ) {
          e.preventDefault() 
          setIsfilled2(false)
        } else{
          setShowing(3)
        }
      }
      const handleValidation3 = (e) =>{
        if( org === "" ) {
          e.preventDefault() 
          setIsfilled3(false)
        } else{
          setIsfilled3(true)
        }
      }
// <input name="bankname" type="text" defaultValue="" id="bankname" class="bankname"></input>

    return (
        <div className="updatekyc">
            <div className="updatekyc__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Update KYC</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                {showing !== 1 ? <p></p>: 
              <div>
                 <label for="email">Enter Email Address</label>
                 <input  onChange={(e) => setEmail(e.target.value)} name="email" type="email" defaultValue="" id="email" className={isfilled === false ? `fail email` :`email`} />

                 <input onClick={ (e) => handleValidation1(e)} name="save" type="submit" value="Submit" id="submit" className="save" />
               
              </div>
               }
               {showing !== 2? <p></p>: 
               <div>
                 <h3>Add Bank Details</h3>
                 

                 <label for="bankname">Bank name</label>
                


                 <select defaultValue = "Zenith Bank Plc" id="banks" className="banks">
                    
                    <option value = "Access Bank Plc">
                             Access Bank Plc
                    </option>
                    <option value = "Citibank Nigeria Limited">
                             Citibank Nigeria Limited
                    </option>
                    <option value = "Ecobank Nigeria Plc">
                              Ecobank Nigeria Plc
                    </option>
                    <option value = "Fidelity Bank Plc">
                              Fidelity Bank Plc
                    </option>
                    <option value = "First Bank Plc">
                              First Bank Plc
                    </option>
                    <option value = "First city Monument Bank plc">
                             First city Monument Bank plc
                    </option>
                    <option value = "Globus Bank">
                              Globus Bank
                    </option>
                    <option value = "Guaranty Trust Bank Plc">
                              Guaranty Trust Bank Plc
                    </option>
                    <option value = " Heritage Banking Company Limited">
                              Heritage Banking Company Limited
                    </option>
                    <option value = "Kuda Bank">
                             Kuda Bank
                    </option>
                    <option value = "Keystone Bank">
                             Keystone Bank
                    </option>
                    <option value = "Polaris Bank Limited">
                             Polaris Bank Limited
                    </option>
                    <option value = "Providus Bank Limited">
                              Providus Bank Limited
                    </option>
                    <option value = "Stanbic IBTC Bank Plc">
                              Stanbic IBTC Bank Plc
                    </option>
                    <option value = " Standard Chartered Bank Limited">
                              Standard Chartered Bank Limited
                    </option>

                    <option value = "Sterling Bank Plc">
                              Sterling Bank Plc
                    </option>
                    <option value = " Suntrust Bank Nigeia Limited">
                             Suntrust Bank Nigeia Limited
                    </option>
                    <option value = "Union Bank of Nigeria Plc">
                              Union Bank of Nigeria Plc
                    </option>
                    <option value = "United Bank for Africa">
                             United Bank for Africa
                    </option>
                    <option value = "Unity Bank Plc">
                              Unity Bank Plc
                    </option>
                    <option value = "VFD MFB">
                             VFD MFB
                    </option>
                    <option value = "Wema Bank Plc">
                              Wema Bank Plc
                    </option>

                    <option value = "Zenith Bank Plc">
                              Zenith Bank Plc
                    </option>
                </select>

                 <label for="acc">Account Number</label>
                 <input name="acc"  onChange={(e) => setAcc(e.target.value)} type="tel" defaultValue="" id="acc" className={isfilled2 === false ? `fail acc` :`acc`} />

                 <label for="otp">Amount</label>
                 <input name="otp" type="text" disabled defaultValue="N100" id="otp" className="otp" />
                 <p>A minimum deposit of 100 Naira validates your account</p>
                 <input onClick={ (e) => handleValidation2(e)}  name="save" type="submit" value="Deposit" id="save" className="save" />
                 </div>
                  }
                  {showing !== 3? <p></p>: 
                 <div>
                 <h3>Activate Organization mobkey</h3>
                 <label for="orgmob">Enter Organization $mobme</label>
                 <input name="orgmob"  onChange={(e) => setOrg(e.target.value)} type="text" defaultValue="" id="orgmob" className={isfilled3 === false ? `fail orgmob` :`orgmob`} />

                 <input onClick={ (e) => handleValidation3(e)}  name="save" type="submit" value="Submit" id="submit" className="save" />
                </div>
                  }
            </form>

          { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag" >
              <p>confirm password to proceed</p>
              <input type="text" name="tag__name" className="tag__name" id="tag_name" />
              <div  onClick={() => setShow(false)}>
              <input type="submit" name="create__tag" className="create__tag" value="Confirm" />
              </div>
           </div>
           </div>}
        </div>
    )
}

export default Updatekyc;
