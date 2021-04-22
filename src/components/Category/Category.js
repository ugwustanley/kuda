import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Hotel from './images/hotel2.png'
import Vehicle from './images/vehicle.jpg'
import House from './images/house.jpg'
import Phone from './images/phone.png'
import Laptop from './images/laptop.jpg'
import Chair from './images/chair.jpg'
import Beauty from './images/beauty.jpg'
import Dress from './images/dress.jpg'
import Sports from './images/book.jpg'
import Transport from './images/transport.png'
import Services from './images/services3.png'
import Jobs from './images/shows.jpg'
import  Babies from './images/babies.jpg'
import Pets from './images/pets.jpg'
import Food from './images/food.jpg'
import {CaretLeft , Plus , ArrowRight  } from 'phosphor-react'
import "./Category.scss"

const Category = () => {
    let history = useHistory()
    return (
        <div className="Category">
          
            <div className="Category__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Category</h5>
            </div>
             <div className="search-section">
                 <input name="search" type="text" className="search" id="search"  placeholder="Search for a product" />
                 <input name="search" value="Search" type="submit" className="search-btn" id="search-btn" />
             </div>
           <div>
             <div className="Category__categories">
                 

                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>

                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>

                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>


                  <div className="category category1">
                    <div className="tag"><p>Pay Later Accepted</p></div>
                      <div  >
                        <img   src={Laptop}></img>
                      </div>
                     <div className="category__detail">
                        <p>Samsung 49' Curved Uhd 4k Smart Tv-49</p>
                        <div className="buy">
                        <p className="price">N30,000</p>
                      <button>Buy now</button>
                        </div>
                        </div>
                  </div>

              

                 </div>
          
             </div>
             <div className="next"><p>Next</p> <ArrowRight size={20} /></div>
        </div>
    )
}

export default Category;
