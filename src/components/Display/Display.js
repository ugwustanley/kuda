import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import Profile from './images/profile.png'
import {CaretLeft, MapPin, Star ,  ArrowLeft , ArrowRight} from 'phosphor-react'
import './Display.scss'

const Display = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="Display">
                   <div className="Display__heading">
         <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Search Mechanic</h5>
            </div>
            <div className="search-section">
                 <input name="search" type="text" className="search" id="search"  placeholder="Search mechanic" />
                 <input name="search" value="Search" type="submit" className="search-btn" id="search-btn" />
             </div>
          
          <div className="Display__items">

          


               <div className="Display__item">
                    
                    
                    <h4>Emeka Simon</h4>
                     <p className="landmark">Ogige main market Nsukka</p>
                    
                     <div className="details">
                          <div className="detail">
                                <h5>200</h5>
                                <p>Bookings</p>
                          </div>
                          <div className="detail">
                                <h5>4.2 <div className="star"><Star size={20} color="rgb(65, 156, 65)" weight="fill" /> </div></h5>
                                <p>Ratings</p>
                          </div>
                          <div className="detail">
                                <h5>2</h5>
                                <p>Years</p>
                          </div>
                     </div>
                     <div className="btn">
                        <button className="btn1">Book</button>
                        <button className="btn2">Call</button>
                    </div>
                    
               </div>

               <div className="Display__item">
                    
                    
                    <h4>Emeka Simon</h4>
                     <p className="landmark">Ogige main market Nsukka</p>
                    
                     <div className="details">
                          <div className="detail">
                                <h5>200</h5>
                                <p>Bookings</p>
                          </div>
                          <div className="detail">
                                <h5>4.2 <div className="star"><Star size={20} color="rgb(65, 156, 65)" weight="fill" /> </div></h5>
                                <p>Ratings</p>
                          </div>
                          <div className="detail">
                                <h5>2</h5>
                                <p>Years</p>
                          </div>
                     </div>
                     <div className="btn">
                        <button className="btn1">Book</button>
                        <button className="btn2">Call</button>
                    </div>
                    
               </div>


               <div className="Display__item">
                    
                    
                    <h4>Emeka Simon</h4>
                     <p className="landmark">Ogige main market Nsukka</p>
                    
                     <div className="details">
                          <div className="detail">
                                <h5>200</h5>
                                <p>Bookings</p>
                          </div>
                          <div className="detail">
                                <h5>4.2 <div className="star"><Star size={20} color="rgb(65, 156, 65)" weight="fill" /> </div></h5>
                                <p>Ratings</p>
                          </div>
                          <div className="detail">
                                <h5>2</h5>
                                <p>Years</p>
                          </div>
                     </div>
                     <div className="btn">
                        <button className="btn1">Book</button>
                        <button className="btn2">Call</button>
                    </div>
                    
               </div>


               <div className="Display__item">
                    
                    
                    <h4>Emeka Simon</h4>
                     <p className="landmark">Ogige main market Nsukka</p>
                    
                     <div className="details">
                          <div className="detail">
                                <h5>200</h5>
                                <p>Bookings</p>
                          </div>
                          <div className="detail">
                                <h5>4.2 <div className="star"><Star size={20} color="rgb(65, 156, 65)" weight="fill" /> </div></h5>
                                <p>Ratings</p>
                          </div>
                          <div className="detail">
                                <h5>2</h5>
                                <p>Years</p>
                          </div>
                     </div>
                     <div className="btn">
                        <button className="btn1">Book</button>
                        <button className="btn2">Call</button>
                    </div>
                    
               </div>


               <div className="Display__item">
                    
                    
                    <h4>Emeka Simon</h4>
                     <p className="landmark">Ogige main market Nsukka</p>
                    
                     <div className="details">
                          <div className="detail">
                                <h5>200</h5>
                                <p>Bookings</p>
                          </div>
                          <div className="detail">
                                <h5>4.2 <div className="star"><Star size={20} color="rgb(65, 156, 65)" weight="fill" /> </div></h5>
                                <p>Ratings</p>
                          </div>
                          <div className="detail">
                                <h5>2</h5>
                                <p>Years</p>
                          </div>
                     </div>
                     <div className="btn">
                        <button className="btn1">Book</button>
                        <button className="btn2">Call</button>
                    </div>
                    
               </div>


               




          </div>
         <Link to="shopdetails"> <div className="previous"> <ArrowLeft size={20} /><p>Back</p></div></Link>
         <Link to="shopdetailstwo"> <div className="next"><p>Next</p> <ArrowRight size={20} /></div></Link>
        </div>
    )
}

export default Display
