import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Plus} from 'phosphor-react'
import NaijaStates from 'naija-state-local-government'
import './BookMec.scss'

const BookMec = () => {
    let history =  useHistory()
    const [currentstate , setCurrentstate] = useState("Abia")
   
    const [lga, setLga] = useState("")
    const [vehicle , setVehicle] = useState("")
    const [town , setTown] = useState("Aba North")

    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(town === "" || vehicle === "" || currentstate === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setIsfilled(true)
      }
    }
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
                
                <select onChange={(e) => setVehicle(e.target.value)}  DefaultValue="Choose vehicle" className={isfilled === false ? `fail cost` : `cost` }>
                     <option value="Choose vehicle">Choose vehicle</option>
                     <option value="Toyota">Toyota</option>
                     <option value="Ford">Ford</option>
                 </select>
                 <select onChange={(e) => setCurrentstate(e.target.value)} className={isfilled === false ? `fail name` : `name` }>
               {NaijaStates.states().map( state => <option valuue={state}>{state}</option>)}
               </select>

               <select onChange={(e) => setTown(e.target.value)} defaultValue = "Town" id="state" className="state" className={isfilled === false ? `fail name` : `name` }>

                {NaijaStates.lgas(currentstate).lgas.map( lga => <option value={lga}>{lga}</option>)}

               </select>

               <select defaultValue = "Town" id="state"   className={isfilled === false ? `fail state` : `state` }>

               <option value="Mechanic">Mechanic</option>
               <option value="Auto Electrician">Auto Electrician</option>  
               <option value="Bodywork Technician">Bodywork Technician</option>
             
               </select>



                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="SEARCH" id="save" class="save" />
            </form>

   
        </div>
    )
}

export default BookMec
