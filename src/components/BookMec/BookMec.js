import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Plus} from 'phosphor-react'
import NaijaStates from 'naija-state-local-government'
import './BookMec.scss'

const BookMec = () => {
    let history =  useHistory()
    const [currentstate , setCurrentstate] = useState("Abia")
  //  const [show , setShow] = useState(false)
  //<input name="file" type="text" defaultValue="" id="file" class="file" ></input>
// <input name="cost" type="text" defaultValue="" id="cost" placeholder="Cost price" class="cost" />
//  <input name="desc" type="text"  defaultValue="" id="desc" class="desc" placeholder="Product description" />
console.log(NaijaStates.all())
console.log(NaijaStates.lgas("Oyo"))
  return (
        <div className="BookMec">
            <div className="BookMec__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Book a Mechanic</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                
                <select class="cost" DefaultValue="Choose vehicle" >
                     <option value="Choose vehicle">Choose vehicle</option>
                     <option value="Toyota">Toyota</option>
                     <option value="Ford">Ford</option>
                 </select>
                 <select onChange={(e) => setCurrentstate(e.target.value)}>
               {NaijaStates.states().map( state => <option valuue={state}>{state}</option>)}
               </select>

               <select defaultValue = "Town" id="state" className="state">

                {NaijaStates.lgas(currentstate).lgas.map( lga => <option value={lga}>{lga}</option>)}

               </select>


                 <input name="save" type="submit" value="SEARCH" id="save" class="save" />
            </form>

   
        </div>
    )
}

export default BookMec
