import React,{useState} from 'react'
import CategoryShop from '../CategoryShop/CategoryShop'
import {Link} from 'react-router-dom'
import "./CreateOffers.scss"
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import ComingSoon from '../ComingSoon/ComingSoon'

const CreateOffers = () => {
    const [hotelsSelected , setHotelsSelected] = useState(false)
    const [startdate , setStartdate] = useState("")
    const [enddate , setEnddate] = useState("")
    const [exceeded , setExceeded ] = useState(false)
    const [category , setCategory] = useState("")
    const handleCategoryChange  = (e) =>{
         
        const current = e.target.value
        console.log(current)
        setCategory(current)
        if(current === "Hotels & Lodges"){
          setHotelsSelected(true)
        }
        else{
            setHotelsSelected(false)
        }

    }
    const handleSubmit = (e) =>{

       const dategap = enddate - startdate

       const days = dategap / 86400000

       if((days > 14 || days < 1) && hotelsSelected === true){
           setExceeded(true)
           e.preventDefault()
       }
       console.log(days)
    }

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
    console.log(returnMinDate())
    return (
        <div className="CreateOffers">
            <h4>Select Category to create</h4>
            <select defaultValue="category" onChange={(e) => handleCategoryChange(e)}>
                    <option disabled value="category">Category</option>
                    <option value="Hotel & Lodges">Hotel & Lodges</option>
                    <option value="Automobiles">Automobiles</option>
                    <option value="Real estate">Real estate</option>
                    <option value="Mobile Phones & Tablets">Mobile Phones & Tablets</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture & Home appliances">Furniture & Home appliances</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Fashion & Beauty">Fashion & Beauty</option>
                    <option value="Arts, Books & Digital content">Arts, Books & Digital content</option>
                    <option value="Transport & Logistics">Transport & Logistics</option>
                    <option value="Services">Services</option>
                    <option value="Shows & Entertainment">Shows & Entertainment</option>
                    <option value="Babies & Kids">Babies & Kids</option>
                    <option value="Crowd funding">Crowd funding</option>
                    <option value="Agriculture & Food">Agriculture & Food</option>
                 </select>
                 {category === "Hotel & Lodges"? 
                 <>
                 <p>Start Date</p>
                 <input onChange={(e) => setStartdate(e.target.valueAsNumber)} name="date" type="date" min={returnMinDate()} className="start-date" id="start-date"  />
                 <p>End dates</p>
                 <input onChange={(e) => setEnddate(e.target.valueAsNumber)}  name="date" type="date" min={returnMinDate()} className="end-date" id="end-date"  />
                 </>
                 :''}
                 {exceeded && hotelsSelected?
                 <p className="warning">Date span has exceeded or is below the range of 1 - 14 days </p>
                 :''}

                 {category === "Automobiles"?
                 <select >
                 <option value="automoble">Automobile</option>
                 <option value="Auto parts">Auto parts</option>
                 
                 </select>
                :``}
              
              
              {category === "Real estate"?
                 <select >
                 <option value="Sell">Sell</option>
                 <option value="Rent and lease">Rent and lease</option>
                 
              </select>
                :``}


               <Link to="/create">  <button onClick={ (e) => handleSubmit(e)} className="create-btn">NEXT</button> </Link> 
                
        </div>
    )
}

export default CreateOffers;

