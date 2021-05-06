import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import Countdown from 'react-countdown'
import Spare from './images/spare.jpg'
import {CaretLeft, MapPin ,  ArrowLeft} from 'phosphor-react'
import './ShopDetails2.scss'

const ShopDetails2 = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="ShopDetails2">
            <div className="ShopDetails2__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Category</h5>
            </div>
            <div className="search-section">
                 <input name="search" type="text" className="search" id="search"  placeholder="Search for a product" />
                 <input name="search" value="Search" type="submit" className="search-btn" id="search-btn" />
             </div>
          
          <div className="ShopDetails2__items">

          <div className="ShopDetails2__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Countdown date={Date.now() + 1250000000}>
     
                            </Countdown>
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails2__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Countdown date={Date.now() + 1250000000}>
     
                            </Countdown>
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails2__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Countdown date={Date.now() + 1250000000}>
     
                            </Countdown>
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails2__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Countdown date={Date.now() + 1250000000}>
     
                            </Countdown>
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails2__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Countdown date={Date.now() + 1250000000}>
     
                            </Countdown>
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>


               <div className="ShopDetails2__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <Countdown date={Date.now() + 1250000000}>
     
                            </Countdown>
                           </div>
                            <div className='location'>   <div className="map">   <MapPin color="rgb(148, 144, 144)" size={15} /></div> <p className="locate"> Lagos, Mushin</p></div>
                            <h1><Naira>36000</Naira></h1>
                            <Link to="/comingsoon"> <button className="btn btn2">Buy now</button></Link>
                      </div>

                     

                    </div>
                    <div className="row2">
                          <p>Show Contact</p>
                          <p>Pay later accepted</p>
                      </div>


               </div>




          </div>
        <Link to="/shopdetailsthree"> <div className="next"> <ArrowLeft size={20} /><p>Back</p></div></Link> 
        </div>
    )
}

export default ShopDetails2
