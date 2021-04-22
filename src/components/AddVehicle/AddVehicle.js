import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import NaijaStates from 'naija-state-local-government'
import {CaretLeft , Plus} from 'phosphor-react'
import './AddVehicle.scss'

const AddVehicle = () => {
    let history =  useHistory()
    const [currentstate , setCurrentstate] = useState("Abia")
  //  const [show , setShow] = useState(false)
  //<input name="file" type="text" defaultValue="" id="file" class="file" ></input>
// <input name="cost" type="text" defaultValue="" id="cost" placeholder="Cost price" class="cost" />
//  <input name="desc" type="text"  defaultValue="" id="desc" class="desc" placeholder="Product description" />

  return (
        <div className="AddVehicle">
            <div className="AddVehicle__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Add vehicle</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                  <p className='p'>Add vehicle</p>
                 <input name="name" type="text" defaultValue="" id="name" class="name" placeholder="Brand" />
                       
                 <input name="name" type="text" defaultValue="" id="name" class="name" placeholder="Model" />
                       
                 <input name="name" type="number" defaultValue="" id="name" class="name" placeholder="year" />

                 
                 <div className="file">
                     <div className="plus">
                     <Plus size={25} />
                     </div>
                     <p>Upload proof of ownership</p>
                 </div>

                <p className='p'>Best mechanic for this car</p>

                      
                <input name="name" type="text" defaultValue="" id="name" class="name" placeholder="Mechanic name" />

                      
                <input name="name" type="tel" defaultValue="" id="name" class="name" placeholder="Phone number" />

                
                <select onChange={(e) => setCurrentstate(e.target.value)}>
               {NaijaStates.states().map( state => <option valuue={state}>{state}</option>)}
               </select>

               <select defaultValue = "Town" id="state" className="state">

                {NaijaStates.lgas(currentstate).lgas.map( lga => <option value={lga}>{lga}</option>)}

               </select>


                <input name="name" type="text" defaultValue="" id="name" class="name" placeholder="Workshop Landmark" />
                
               

                 <input name="save" type="submit" value="SUBMIT" id="save" class="save" />
            </form>

   
        </div>
    )
}

export default AddVehicle
