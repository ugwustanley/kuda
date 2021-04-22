import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Plus} from 'phosphor-react'
import './Book.scss'

const Book = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
  //<input name="file" type="text" defaultValue="" id="file" class="file" ></input>
// <input name="cost" type="text" defaultValue="" id="cost" placeholder="Cost price" class="cost" />
//  <input name="desc" type="text"  defaultValue="" id="desc" class="desc" placeholder="Product description" />

  return (
        <div className="Book">
            <div className="Book__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Booking page</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                  <p className="p">Booking date</p>
                 <input name="name" type="date" defaultValue="" id="name" class="name" placeholder="Booking date" />
                       
                 <input name="name" type="number" defaultValue="" id="name" class="name" placeholder="Repair cost" />
                       
                

                 
                 <div className="file">
                     <div className="plus" style={{margin:"auto"}}>
                     <Plus size={25} />
                     </div>
                     <p>Upload invoice</p>
                 </div>
                 <button> Pay now</button>
                 <button>Pay later</button>
               
            </form>

   
        </div>
    )
}

export default Book
