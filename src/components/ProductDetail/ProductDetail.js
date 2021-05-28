import React,{useState , useContext} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'

import Naira from 'react-naira'
import Spare from './images/spare.jpg'
import {CaretLeft} from 'phosphor-react'
import {QueueContext} from '../../Contexts/queueContext'
import "./ProductDetail.scss"

const ProductDetail = () => {

    const [queue , setQueue] = useContext(QueueContext)

    const [clicked , setClicked] = useState(true)

    let totalQueue = queue.length || 0

    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [ name , setname] = useState("Headlamp Gx Q460 2021")
    const [ number , setNumber] = useState(1)
    const [ price, setPrice] = useState(300)

    const returnMinDate = () =>{
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        if(month < 10){
          
            return `${year}-0${month}-${day}`
        }
        if(day < 10 ){
            return `${year}-${month}-0${day}`
        }
        return `${year}-${month}-${day}`
    }

    const addQueue = (e) =>{
         
        e.preventDefault()
        setNumber(1)
        setShow(true)
        setQueue([
            ...queue ,
            {name:name , total_item: number , total_price: price}
        ])
    }
    return (
        <div className={show? `ProductDetail popup` : `ProductDetail`}>
            <div className="ProductDetail__heading">
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

            <div className="ProductDetail__info">
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
             
             <div className="calender__date">
                 <h2>Reservation</h2>
                <p>Start Date</p>
                 <input  name="date" type="date" min={returnMinDate()} className="start-date" id="start-date"  />
                 <p>End dates</p>
                 <input  name="date" type="date" min={returnMinDate()} className="end-date" id="end-date"  />
              
             </div>
            
           <Link to="pay"><button className="book-btn" onClick={(e) => addQueue(e)}>Book</button></Link> 
           
           



            { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag"  >
              <h4>Item added to queue</h4>
             
              

              <Link to="/queue">
                <button className="storeandsocial">Checkout</button>
              </Link> 
              <Link to="/shop">
                <button >Shop more items</button>
              </Link>

           </div>
           </div>
         }
        </div>


       
    )
}

export default ProductDetail
