import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Plus} from 'phosphor-react'
import './CreateProduct.scss'

const CreateProduct = () => {
    let history =  useHistory()
  //  const [show , setShow] = useState(false)
  //<input name="file" type="text" defaultValue="" id="file" class="file" ></input>
// <input name="cost" type="text" defaultValue="" id="cost" placeholder="Cost price" class="cost" />
//  <input name="desc" type="text"  defaultValue="" id="desc" class="desc" placeholder="Product description" />

  return (
        <div className="CreateProduct">
            <div className="CreateProduct__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Create Offer</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                
                 <input name="name" type="text" defaultValue="" id="name" class="name" placeholder="Offer name" />

                
               

                  <textarea className="desc" placeholder="Offer description" >

                  </textarea>
                 
                 <div className="file">
                     <div className="plus">
                     <Plus size={25} />
                     </div>
                     <p>Add images -4 left</p>
                 </div>

                
                 <select class="cost" DefaultValue="period">
                     <option value="period">Offer period</option>
                     <option value="7 Days">7 Days</option>
                     <option value="14 Days">14 Days</option>
                 </select>

                 <input name="sell" type="text" defaultValue="" id="sell" class="sell" placeholder="Unit price" />

                 <input name="quality" type="text" defaultValue="" id="quantity" class="quantity" placeholder="Quantity" />

                 <input name="discount" type="text" defaultValue="" id="discount" class="discount" placeholder="Discount" />

                 <select class="pay-later" DefaultValue="Pay later limit">
                     <option value="Pay later limit">Pay later limit</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>

                 </select>

                 <select class="pay-later" DefaultValue="Pay later cycle">
                     <option value="Pay later cycle">Pay later cycle</option>
                     <option value="Daily">Daily</option>
                     <option value="Weekly">Weekly</option>
                     <option value="Monthly">Monthly</option>
                 </select>
 

                 <input name="save" type="submit" value="CREATE OFFER" id="save" class="save" />
            </form>

   
        </div>
    )
}

export default CreateProduct;
