import React,{useState} from 'react'
import Naira from 'react-naira'
import Timer from '../Timer/Timer'
import {useHistory , Link} from 'react-router-dom'
import Spare from './images/spare.jpg'
import {CaretLeft, MapPin , ArrowRight , ArrowLeft , MagnifyingGlass , PhoneCall} from 'phosphor-react'
import './ShopDetailsHotel.scss'

const ShopDetailsHotel = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
   
    return (
        <div className="ShopDetailsHotel">
            <div className="ShopDetailsHotel__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Category</h5>
            </div>
            <div className="search-section">
               <span><ArrowLeft size={23} weight="regular" /> </span>
                 <input name="search" type="text" className="search" id="search"  placeholder="Search for a product" />
                 <span  className="search-btn"><MagnifyingGlass size={23} weight="regular" /></span>
             </div>
          
          <div className="ShopDetailsHotel__items">

          <div className="ShopDetailsHotel__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                         
                             <Timer />
                         
                             </div>
                           
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                          <div className="cta-all"> <h1><span><PhoneCall size={15} /></span>Contact</h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>
                      </div> 

                     

                    </div>
                    <div className="row2">
                          <p className="price1"><span   className="old-price"><Naira>360</Naira></span><span className="new-price"><Naira>200</Naira></span></p>
                        <Link to="/recurr">  <p className="">Pay later accepted</p> </Link>
                      </div>


               </div>



               <div className="ShopDetailsHotel__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Timer />
                        
                            </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                          <div className="cta-all"> <h1><span><PhoneCall size={15} /></span>Contact</h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>
                      </div> 

                     

                    </div>
                    <div className="row2">
                          <p className="price1"><span   className="old-price"><Naira>360</Naira></span><span className="new-price"><Naira>200</Naira></span></p>
                        <Link to="/recurr">  <p>Pay later accepted</p> </Link>
                      </div>


               </div>


               <div className="ShopDetailsHotel__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Timer />
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                          <div className="cta-all"> <h1><span><PhoneCall size={15} /></span>Contact</h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>
                      </div> 

                     

                    </div>
                    <div className="row2">
                          <p className="price1"><span   className="old-price"><Naira>360</Naira></span><span className="new-price"><Naira>200</Naira></span></p>
                        <Link to="/recurr">  <p>Pay later accepted</p> </Link>
                      </div>


               </div>

               <div className="ShopDetailsHotel__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Timer />
                            </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                          <div className="cta-all"> <h1><span><PhoneCall size={15} /></span>Contact</h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>
                      </div> 

                     

                    </div>
                    <div className="row2">
                          <p className="price1"><span   className="old-price"><Naira>360</Naira></span><span className="new-price"><Naira>200</Naira></span></p>
                        <Link to="/recurr">  <p>Pay later accepted</p> </Link>
                      </div>


               </div>

               <div className="ShopDetailsHotel__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Timer />
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                          <div className="cta-all"> <h1><span><PhoneCall size={15} /></span>Contact</h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>
                      </div> 

                     

                    </div>
                    <div className="row2">
                          <p className="price1"><span   className="old-price"><Naira>360</Naira></span><span className="new-price"><Naira>200</Naira></span></p>
                        <Link to="/recurr">  <p>Pay later accepted</p> </Link>
                      </div>


               </div>










          </div>
         <Link to="/ShopDetailsHotelthree"> <div className="next"><p>Next</p> <ArrowRight size={20} /></div></Link>
        </div>
    )
}

export default ShopDetailsHotel
