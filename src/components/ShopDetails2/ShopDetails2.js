import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import Countdown from 'react-countdown'
import Spare from './images/spare.jpg'
import {CaretLeft, MapPin ,  ArrowLeft , MagnifyingGlass , PhoneCall} from 'phosphor-react'
import './ShopDetails2.scss'

const ShopDetails2 = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)


    const [sec , setSec] = useState(0)
    const [min , setMin] = useState(0)
    const [hr , setHr] = useState(0)
    const [days , setDays] = useState(0)
   
    
    const interval = setInterval(() => {
        let date = new Date()
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let seconds = date.getSeconds()
        if(day && hour && minute && seconds){
            let reseconds = 60 - seconds 
            let reminute = 60 - minute 
            let rehour =  24 - hour
            let redays = 19 - day
            setSec(reseconds)
            setMin(reminute)
            setHr(rehour)
            setDays(redays)
            
            console.log( redays , rehour , reminute , reseconds)
             if(redays === 0 && rehour === 0 && reminute === 0 && reseconds === 0 ){
                 clearInterval(interval)
             }
        }
    } , 1000)

    return (
        <div className="ShopDetails2">
            <div className="ShopDetails2__heading">
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
          
          <div className="ShopDetails3__items">

          <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <div  className="timer">
             <div className="days">
                <h5>{days}</h5>
                <h6>Days</h6>
             </div>

             <div className="days">
                <h5>{hr}</h5>
                <h6>Hours</h6>
             </div>

             <div className="days">
                <h5>{min}</h5>
                <h6>Minutes</h6>
             </div>
             <div className="days">
                <h5>{sec}</h5>
                <h6>Seconds</h6>
             </div>
          </div>
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



               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <div  className="timer">
             <div className="days">
                <h5>{days}</h5>
                <h6>Days</h6>
             </div>

             <div className="days">
                <h5>{hr}</h5>
                <h6>Hours</h6>
             </div>

             <div className="days">
                <h5>{min}</h5>
                <h6>Minutes</h6>
             </div>
             <div className="days">
                <h5>{sec}</h5>
                <h6>Seconds</h6>
             </div>
          </div>
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


               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <div  className="timer">
             <div className="days">
                <h5>{days}</h5>
                <h6>Days</h6>
             </div>

             <div className="days">
                <h5>{hr}</h5>
                <h6>Hours</h6>
             </div>

             <div className="days">
                <h5>{min}</h5>
                <h6>Minutes</h6>
             </div>
             <div className="days">
                <h5>{sec}</h5>
                <h6>Seconds</h6>
             </div>
          </div>
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

               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <div  className="timer">
             <div className="days">
                <h5>{days}</h5>
                <h6>Days</h6>
             </div>

             <div className="days">
                <h5>{hr}</h5>
                <h6>Hours</h6>
             </div>

             <div className="days">
                <h5>{min}</h5>
                <h6>Minutes</h6>
             </div>
             <div className="days">
                <h5>{sec}</h5>
                <h6>Seconds</h6>
             </div>
          </div>
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

               <div className="ShopDetails3__item">
                    
                    <div className="row1">

                        <img className="image" src={Spare}></img>
                        <div className="row1__half2">
                            <h3>Headlamp Gx Q460 2021</h3>
                            <div className="countdown">
                            <div  className="timer">
             <div className="days">
                <h5>{days}</h5>
                <h6>Days</h6>
             </div>

             <div className="days">
                <h5>{hr}</h5>
                <h6>Hours</h6>
             </div>

             <div className="days">
                <h5>{min}</h5>
                <h6>Minutes</h6>
             </div>
             <div className="days">
                <h5>{sec}</h5>
                <h6>Seconds</h6>
             </div>
          </div>
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
        <Link to="/shopdetailsthree"> <div className="next"> <ArrowLeft size={20} /><p>Back</p></div></Link> 
        </div>
    )
}

export default ShopDetails2
