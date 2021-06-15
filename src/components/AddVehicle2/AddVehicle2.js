import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import NaijaStates from 'naija-state-local-government'
import {CaretLeft , Plus} from 'phosphor-react'
import './AddVehicle2.scss'

const AddVehicle2 = () => {
    let history =  useHistory()
    const [currentstate , setCurrentstate] = useState("Abia")
    const [brand , setBrand ] = useState("")
    const [model , setModel] = useState("")
    const [year, setYear] = useState("")
    const [mec, setMec] = useState("")
    const [phone , setPhone] = useState("")
    const [mark , setMark] = useState("")

    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if( mark === "" ) {
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

  return (
        <div className="AddVehicle2">
            <div className="AddVehicle2__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Add Location</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
             {/**    <p className='p'>Add vehicle</p>
                 <input name="name" onChange={(e) => setBrand(e.target.value)} type="text" defaultValue="" id="name" className={isfilled === false ? `fail name` : `name` } placeholder="Brand" />
                       
                 <input onChange={(e) => setModel(e.target.value)} name="name" type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Model" />
                       
                 <input onChange={(e) => setYear(e.target.value)} name="name" type="number" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="year" />

                 
                 <div className="file">
                     <div className="plus">
                     <Plus size={25} />
                     </div>
                     <p>Upload proof of ownership</p>
                 </div>

                <p className='p'>Main Mechanic</p>

                      
                <input onChange={(e) => setMec(e.target.value)} name="name" type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Mechanic name" />

                      
                <input onChange={(e) => setPhone(e.target.value)} name="name" type="tel"  defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Phone number" />

                
                <p className='p'>Auto Electrician</p>

                      
                <input onChange={(e) => setMec(e.target.value)} name="name" type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Mechanic name" />

                      
                <input onChange={(e) => setPhone(e.target.value)} name="name" type="tel"  defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Phone number" />


                 <p className='p'>Bodywork Technician</p>

                      
                <input onChange={(e) => setMec(e.target.value)} name="name" type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Mechanic name" />

                      
                <input onChange={(e) => setPhone(e.target.value)} name="name" type="tel"  defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Phone number" />
*/}  
              
               <p className='p'>Mechanic State</p>

              <select onChange={(e) => setCurrentstate(e.target.value)}   className={isfilled === false ? `fail name` : `name` }>
               {NaijaStates.states().map( state => <option valuue={state}>{state}</option>)}
               </select>

               <select defaultValue = "Town" id="state"   className={isfilled === false ? `fail state` : `state` }>

                {NaijaStates.lgas(currentstate).lgas.map( lga => <option value={lga}>{lga}</option>)}

               </select>


                <input name="name" onChange={(e) => setMark(e.target.value)} type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Workshop Landmark" />



                 <p className='p'>Auto Electrician State</p>

              <select onChange={(e) => setCurrentstate(e.target.value)}   className={isfilled === false ? `fail name` : `name` }>
               {NaijaStates.states().map( state => <option valuue={state}>{state}</option>)}
               </select>

               <select defaultValue = "Town" id="state"   className={isfilled === false ? `fail state` : `state` }>

                {NaijaStates.lgas(currentstate).lgas.map( lga => <option value={lga}>{lga}</option>)}

               </select>


                <input name="name" onChange={(e) => setMark(e.target.value)} type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Workshop Landmark" />
                


                 <p className='p'>Bodywork Technician State</p>

              <select onChange={(e) => setCurrentstate(e.target.value)}   className={isfilled === false ? `fail name` : `name` }>
               {NaijaStates.states().map( state => <option valuue={state}>{state}</option>)}
               </select>

               <select defaultValue = "Town" id="state"   className={isfilled === false ? `fail state` : `state` }>

                {NaijaStates.lgas(currentstate).lgas.map( lga => <option value={lga}>{lga}</option>)}

               </select>


                <input name="name" onChange={(e) => setMark(e.target.value)} type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Workshop Landmark" />
               

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="SUBMIT" id="save" className="save" />
            </form>

   
        </div>
    )
}

export default AddVehicle2
