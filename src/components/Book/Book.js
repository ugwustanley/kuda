import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Plus} from 'phosphor-react'
import './Book.scss'

const Book = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
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
                       
                 <input name="name" type="number" defaultValue="" id="name" class="name" placeholder="Parts cost" />
                       
                 <input name="name" type="number" defaultValue="" id="name" class="name" placeholder="Workmanship" />

                 
                 <div className="file">
                     <div className="plus" style={{margin:"auto"}}>
                     <Plus size={25} />
                     </div>
                     <p>Upload invoice</p>
                 </div>
                 <button> Pay now</button>
                 <button onClick={() => setShow(true)}>Pay cash to mechanic</button>
               
            </form>

            { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag" >
              <p>Enter OTP from mechanic</p>
              <input type="text" name="tag__name" className="tag__name" id="tag_name" />
              <div  onClick={() => setShow(false)}>
              <input type="submit" name="create__tag" className="create__tag" value="Confirm" />
              </div>
           </div>
           </div>}

   
        </div>
    )
}

export default Book
