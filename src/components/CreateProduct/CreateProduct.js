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
                <h5>Create Product</h5>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                
                 <input name="name" type="text" defaultValue="" id="name" class="name" placeholder="Product name" />

                
               

                  <textarea className="desc" placeholder="Product description" >

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

                 <input name="quality" type="text" defaultValue="" id="quailty" class="quality" placeholder="Quality" />

                 <input name="discount" type="text" defaultValue="" id="discount" class="discount" placeholder="Discount" />

                 <select defaultValue="category">
                    <option disabled value="category">Category</option>
                    <option value="Hotels & Lodges">Hotels & Lodges</option>
                    <option value="Automobiles">Automobiles</option>
                    <option value="Real estate">Real estate</option>
                    <option value="Mobile Phones & Tablets">Mobile Phones & Tablets</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture & Home appliances">Furniture & Home appliances</option>
                    <option value="Health & Beauty">Health & Beauty</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Arts, Books & Digital content">Arts, Books & Digital content</option>
                    <option value="Transport & Logistics">Transport & Logistics</option>
                    <option value="Services">Services</option>
                    <option value="Shows & Entertainment">Shows & Entertainment</option>
                    <option value="Babies & Kids">Babies & Kids</option>
                    <option value="Animals & Pets">Animals & Pets</option>
                    <option value="Agriculture & Food">Agriculture & Food</option>
                 </select>

                 <input name="save" type="submit" value="CREATE PRODUCT" id="save" class="save" />
            </form>

   
        </div>
    )
}

export default CreateProduct
