import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Hotel from './images/hotel2.png'
import Vehicle from './images/vehicle.jpg'
import House from './images/house.jpg'
import Phone from './images/phone.png'
import Laptop from './images/laptop.jpg'
import Chair from './images/chair.jpg'
import Beauty from './images/beauty.jpg'
import Crowd from './images/crowd2.jpg'
import Dress from './images/dress.jpg'
import Health from './images/health.jpg'
import Sports from './images/book.jpg'
import Transport from './images/transport.png'
import Services from './images/services3.png'
import Jobs from './images/shows.jpg'
import  Babies from './images/babies.jpg'
import Pets from './images/pets.jpg'
import Food from './images/food.jpg'
import {CaretLeft , Plus , ArrowLeft , MagnifyingGlass } from 'phosphor-react'
import "./Shop.scss"

const Shop = () => {
    let history = useHistory()
    return (
        <div className="shop">
          
            <div className="shop__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Shop</h5>
            </div>

            <div className="search-section">
               <span><ArrowLeft size={23} weight="regular" /> </span>
                 <input name="search" type="text" className="search" id="search"  placeholder="Search for a product" />
                 <span  className="search-btn"><MagnifyingGlass size={23} weight="regular" /></span>
             </div>

             <div className="shop__categories">
               <Link to="/shopdetails">
                  <div className="category category1">
                     <div  >
                         <img src={Hotel}></img>
                      </div>
                      <p>Hotels & Lodges</p>
                  </div>
                  </Link>
                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scaleX(1.50) scaleY(1.4) translateY(0px)", zIndex:"1"}} src={Crowd}></img>
                      </div>
                      <p>Business crowd funding</p>
                  </div>
                  </Link>
                 

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(1.4)"}} src={House}></img>
                      </div>
                      <p>Real estate</p>
                  </div>
                  </Link>
                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(2)"}} src={Phone}></img>
                      </div>
                      <p>Mobile Phones & Tablets</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(1.2)"}} src={Laptop}></img>
                      </div>
                      <p>Electronics</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img src={Chair}></img>
                      </div>
                      <p>Furniture & Home appliances</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img style={{transform:"scale(1.7)"}} src={Health}></img>
                      </div>
                      <p>Healthcare</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(.9)"}} src={Dress}></img>
                      </div>
                      <p>Fashion & Beauty</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(1.1)"}} src={Sports}></img>
                      </div>
                      <p>Arts, Books & Digital content</p>
                  </div>
                  </Link>
  
                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(1.2)"}} src={Transport}></img>
                      </div>
                      <p>Transport & Logistics</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img src={Services}></img>
                      </div>
                      <p>Services</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img  style={{transform:"scale(1.2) translateY(5px)"}} src={Jobs}></img>
                      </div>
                      <p>Shows & Entertainment</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img src={Babies}></img>
                      </div>
                      <p>Babies & Kids</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img style={{transform:"scale(1.4)"}} src={Vehicle}></img>
                      </div>
                      <p>Automobiles</p>
                  </div>
                  </Link>

                  <Link to="/shopdetails">
                  <div className="category category1">
                      <div  >
                        <img src={Food}></img>
                      </div>
                      <p>Agriculture & Food</p>
                  </div>
                  </Link>
                  

             </div>
        </div>
    )
}

export default Shop
