import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import NaijaStates from 'naija-state-local-government'
import {CaretLeft , Plus} from 'phosphor-react'
import './SwitchOrg.scss'

const SwitchOrg = () => {
    let history =  useHistory()
    const [currentstate , setCurrentstate] = useState("Abia")
    const [brand , setBrand ] = useState("")
    const [model , setModel] = useState("")
    const [year, setYear] = useState("")
    const [mec, setMec] = useState("")
    const [mobme , setMobme] = useState("")
    const [phone , setPhone] = useState("")
    const [mark , setMark] = useState("")

    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(model === "" || mec === "" || phone === "" || brand === "" || mobme === "" ) {
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
        <div className="SwitchOrg">
            <div className="SwitchOrg__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Switch to organization</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                  
                 <input name="name" onChange={(e) => setBrand(e.target.value)} type="text" defaultValue="" id="name" className={isfilled === false ? `fail name` : `name` } placeholder="Organization name" />
                       
                 <input onChange={(e) => setModel(e.target.value)} name="name" type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Position in Organization" />
                       

                 
                 <div className="file">
                     <div className="plus">
                     <Plus size={25} />
                     </div>
                     <p>Upload CAC certificate</p>
                 </div>


                      
                <input onChange={(e) => setMec(e.target.value)} name="name" type="text" defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Organization Address" />

                      
                <input onChange={(e) => setPhone(e.target.value)} name="name" type="tel"  defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Organization Phone number" />

                <input onChange={(e) => setMobme(e.target.value)} name="name" type="tel"  defaultValue="" id="name"  className={isfilled === false ? `fail name` : `name` } placeholder="Create Organiztion $mobme" />

                

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="SUBMIT" id="save" className="save" />
            </form>

   
        </div>
    )
}

export default SwitchOrg
