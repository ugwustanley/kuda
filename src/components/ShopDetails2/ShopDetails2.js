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
