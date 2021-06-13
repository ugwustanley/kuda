import React,{useState, useContext , useEffect} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft , XCircle} from 'phosphor-react'
import './Summary.scss'

const Summary = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [expense , setExpense] = useState(0)
    const [revenue , setRevenue]= useState(0)
    const [banked , setBanked] = useState(0)
    const [past , setPast] = useState({revenue:0,expense:0,banked:0})
    //const [current2 , setCurrent2] = useState()
    const [current , setCurrent] = useState({revenue:revenue,expense:expense,banked:banked})
    const [clicked , setClicked] = useState(false)
    const [changes , setChanges] = useState({revenue:0,expense:0,banked:0})
   

    const getPercent = (arg1 , arg2) =>{

        //if(typeof arg1 !== Number && typeof arg2 !== Number) return;
       // const result = arg1 * arg2 / 100
         let revenue = Number(past.revenue) / Number(current.revenue )  * 100 
            let expense = Number(past.expense) / Number(current.expense)  * 100 
            let banked = Number(past.banked) / Number(current.banked )  * 100  
            setChanges({revenue:revenue,expense:expense,banked:banked})
        

       // return result;
    }

    const localstorage = (arg , command , data) =>{
        if(command === "get"){
            return JSON.parse(localStorage.getItem(arg))
        }
        if(command === "set"){
           // let arr = {revenue:revenue,expense:expense,banked:banked}
            return localStorage.setItem(arg ,JSON.stringify(data))
        }
    }
    const handleSubmit = () =>{
            console.log("called")
            setShow(false);
            setClicked(true);
            let currentdb = localstorage("current_week", "get")
            let pastdb = localstorage("past_week", "get")

            if(currentdb === null){
                
            }

        /*    let currentdb = localstorage("current_week", "get")
            let pastdb = localstorage("past_week", "get")
            console.log(currentdb , current.expense)
            if(currentdb !== null && current.expense == 0 ){
                setPast(currentdb)
                localstorage("past_week", "set" , currentdb)
                console.log(currentdb , current , past , pastdb)
            }
            if(currentdb !== null && current.expense === 0 ){
                setCurrent(currentdb)
            }
            if(currentdb === null){
                localstorage("current_week", "set" , current)
                localstorage("past_week", "set" , current)
            }

            
            getPercent()

            /*
            const last__week =  JSON.parse(localStorage.getItem("current-week")) || [{revenue:0,expense:0,banked:0}]
            console.log(last__week[0])
           const past__week = localStorage.setItem("past-week" , JSON.stringify(last__week) )
           localStorage.setItem("current-week" , JSON.stringify( [{expense:expense, revenue:revenue, banked:banked}]))
           const current__week =  JSON.parse(localStorage.getItem("current-week"))
           
            console.log(current__week[0])
            setPast(last__week[0])
            setCurrent(current__week[0])

            changes.revenue = Number(last__week[0].revenue) / Number(current__week[0].revenue )  * 100 .toFixed(2)
            changes.expense = Number(last__week[0].expense) / Number(current__week[0].expense)  * 100 .toFixed(2)
            changes.banked = Number(last__week[0].banked) / Number(current__week[0].banked )  * 100  .toFixed(2)
            console.log(changes)*/

    }

   useEffect(() => {
     handleSubmit()
   }, [])
    return (
        <div className={show?`Summary popup`:`Summary`}>
            <div className="Summary__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Summary</h5>
            </div>
  
            <div className="Summary__cta">
            <button className="newupdate" onClick={() => setShow(true)}>New update</button>
             <Link to="summary2"> <button className="previousweek">Previous</button> </Link> 
            </div>
          
          
           <h4>Revenue</h4>
            <div className="Summary__contents">

             <div className="Summary__content total">
                 
                
                 <h3>Previous Week</h3>
               
                 <h5>{past.revenue}</h5>
                   <h5 className={Number(past.revenue) > Number(current.revenue)? `red`:   `green`}>{changes.revenue.toFixed(2) || 0}%</h5>
             </div>

             <div className="Summary__content total">
                 
                 <div>
                 <h3>Current Week</h3>
                 </div>
               
                 <h5>{current.revenue}</h5>
                 <h5 className={Number(past.revenue) > Number(current.revenue)? `red`:   `green`}>{changes.revenue.toFixed(2) || 0}%</h5>
             </div>

            
             </div>


             <h4>Expenses</h4>
             <div className="Summary__contents">

<div className="Summary__content total">
    
    <div>
    <h3>Previous Week</h3>
    </div>
  
    <h5>{past.expense}</h5>
    <h5 className={Number(past.expense) > Number(current.expense)? `red`:   `green`}>{changes.expense.toFixed(2) || 0}%</h5>
</div>

<div className="Summary__content total">
    
    <div>
    <h3>Current Week</h3>
    </div>
   
    <h5>{current.expense}</h5>
    <h5 className={Number(past.expense) > Number(current.expense)? `red`:   `green`}>{changes.expense.toFixed(2) || 0}%</h5>
</div>

</div>


<h4>Banked</h4>
<div className="Summary__contents">

<div className="Summary__content total">
    
    <div>
    <h3>Previous Week</h3>
    </div>
    
    <h5>{past.banked}</h5>
    <h5 className={Number(past.banked) > Number(current.banked)? `red`:   `green`}>{changes.banked.toFixed(2) || 0}%</h5>
</div>

<div className="Summary__content total">
    
    <div>
    <h3>Current Week</h3>
    </div>
  
    <h5>{current.banked}</h5>
    <h5 className={Number(past.banked) > Number(current.banked)? `red`:   `green`}>{changes.banked.toFixed(2) || 0}%</h5>
</div>


</div>

{ show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag"  >
              <h5>Weekly Update</h5>
             
              
                <input onChange={(e) => setRevenue(e.target.value)} type="number" id="input" placeholder="Current week revenue" className="weeklyupdate" />

                <input onChange={(e) => setExpense(e.target.value)} type="number" id="input" placeholder="Current week Expenses" className="weeklyupdate" />
                
                <input onChange={(e) => setBanked(e.target.value)} type="number" id="input" placeholder="Current week Banked" className="weeklyupdate" />

              
              <Link to="/summary">  <button onClick={() => handleSubmit()} >confirm</button> </Link>
            

           </div>
           </div>
         }            
         
        </div>
    )
    }

export default Summary;
