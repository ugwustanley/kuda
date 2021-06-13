import React,{useState, useContext , useEffect} from 'react'
import {useHistory , Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import './Rate.scss'

const Rate = () => {
    let history =  useHistory()
    const [show , setShow] = useState(true)
    const [rating , setRating] = useState()
    const [color , setColor] = useState("blue")
  
   const ratingChanged = (rate) =>{
       setRating(rate)
   }

    return (
        <div className={show?`Rate popup`:`Rate`}>
          

        { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag"  >
              <h5>Rate this service</h5>
            <div className='star__rating'>
                 <ReactStars 
             
             count={rating}
             onChange={ratingChanged}
             size={50}
             activeColor={color}
             />

          </div>
              
 

              
             <button onClick={() => setShow(true)} >confirm</button>
            

           </div>
           </div>
         }            
         
        </div>
    )
    }

export default Rate;
