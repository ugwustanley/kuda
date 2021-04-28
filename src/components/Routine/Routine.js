import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Plus} from 'phosphor-react'
import './Routine.scss'

const Routine = () => {
    let history =  useHistory()
    const [ date , setDate] = useState("")
    const [desc , setDesc] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    const handleValidation = (e) =>{
      if(desc === "" || date === "" ) {
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
        <div className="Routine">
            <div className="Routine__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Routine Servicing</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                  <p className='p'>Select date</p>
                 <input onChange={(e) => setDate(e.target.value)} name="name" type="date" defaultValue="" id="name" className={isfilled === false ? `fail name` :`name` } placeholder="Brand" />
           
                 <textarea onChange={(e) => setDesc(e.target.value)} className={isfilled === false ? `fail desc` :`desc` }placeholder="Description" >

                </textarea>

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="ACTIVATE" id="save" class="save" />
            </form>

   
        </div>
    )
}

export default Routine
