import React,{useState , useContext} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {ShoppingCart , PlusCircle, MinusCircle} from 'phosphor-react'

import Naira from 'react-naira'
import Spare from './images/spare.jpg'
import {CaretLeft} from 'phosphor-react'
import {QueueContext} from '../../Contexts/queueContext'
import "./ProductDetail2.scss"

const ProductDetail2 = () => {

    const [queue , setQueue] = useContext(QueueContext)

    const [clicked , setClicked] = useState(true)

    let totalQueue = queue.length || 0

    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [ name , setname] = useState("Headlamp Gx Q460 2021")
    const [ number , setNumber] = useState(1)
    const [ price, setPrice] = useState(300)
    const [totalitem , setTotalitem] = useState(1)
    const [totalprice , setTotalprice] = useState(price)
    


    const addQueue = (e) =>{
         
        e.preventDefault()
        setNumber(1)
        setShow(true)
        setQueue([
            ...queue ,
            {name:name , total_item: totalitem , total_price: totalprice}
        ])
    }
    const handleItemIncrease = (action) =>{
        if(action === "add" && totalitem >= 0){
            setTotalitem(totalitem + 1)
            setTotalprice((totalitem + 1) * price)
            console.log("added item" , totalitem , totalprice)
        }
        if(action === "minus" && totalitem > 0){
            setTotalitem(totalitem - 1)
            setTotalprice((totalitem - 1) * price)
            
            console.log("removed item" , totalitem, totalprice)
        }else{
           
        }
    }
    return (
        <div className={show? `ProductDetail2 popup` : `ProductDetail2`}>
            <div className="ProductDetail2__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Product Detail</h5>

                
                <div className="shopping__cart">
                <Link to="/queue">
                <ShoppingCart size={20} />
                <span>{totalQueue}</span>
                </Link>
                </div>
                
            </div>

            <div className="ProductDetail2__info">
             <div className="shopimg__box">
                 <img src={Spare} />
             </div> 

             <div className="shop__products">
                 <h3>{name}</h3>
                 <p className="price-tag"><span   className="old-price"><Naira>360</Naira></span><span className="new-price"><Naira>{price}</Naira></span></p>
             </div>  
            </div>

             <div className="product__desc">
                 <h2>Description:</h2>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim
                   veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa
                      qui
                  officia deserunt mollit anim id est laborum 
                 </p>
             </div>
             
             <div className="totals">
                <div className="totals__items">
                <p>Choose Quantity</p>
                <p><span className="add" onClick={() => handleItemIncrease("minus")}><MinusCircle size={20} weight="fill" color="red" /></span><span>{totalitem}</span><span className="add" onClick={() => handleItemIncrease("add")}><PlusCircle size={20} color="#301a96" weight="fill" /></span></p>
                </div>

                <div className="totals__price">
                <p>Total Price</p>
                <p><Naira>{totalprice}</Naira></p>
                </div>
             </div>
            
           <Link to="pay"><button className="book-btn" onClick={(e) => addQueue(e)}>Purchase Item</button></Link> 
           
           



            { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag"  >
              <h4>Item added to queue</h4>
             
              

              <Link to="/queue">
                <button className="storeandsocial">Checkout</button>
              </Link> 
              <Link to="/shopdetails">
                <button >Shop more items</button>
              </Link>

           </div>
           </div>
         }
        </div>


       
    )
}

export default ProductDetail2
