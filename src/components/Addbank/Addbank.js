import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import './Addbank.scss'

//  <input name="bankname" type="text" defaultValue="" id="bankname" class="bankname"></input>
const Addbank = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false);
    const [ accname , setAccname] = useState("")
    const [ acc , setAcc] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(accname === ""  ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setShow(true)
      }
    }

    return (
        <div className="addbank">
            <div className="addbank__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Add Bank</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
         
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
                 <input name="acc" onChange={(e) => setAccname(e.target.value)} type="tel" defaultValue="" id="acc" className={isfilled === false ? `fail acc` :` acc` } />

                 <label for="otp">Amount</label>
                 <input disabled name="charges" type="text" defaultValue="N100" id="charges" class="charges" />
                 <p>A minimum deposit of 100 Naira validates your account</p>

                  <input onClick={ (e) => handleValidation(e)}  name="save" type="submit" value="Deposit" id="save" class="save" />
                 </div>

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

export default Addbank;
