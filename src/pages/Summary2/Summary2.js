import React,{useState, useContext , useEffect} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft , XCircle} from 'phosphor-react'
import './Summary2.scss'

const Summary2 = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [expense , setExpense] = useState(122)
    const [revenue , setRevenue]= useState(231)
    const [banked , setBanked] = useState(283)
    const [clicked , setClicked] = useState(false)
   
    return (
        <div className={show?`Summary2 popup`:`Summary2`}>
            <div className="Summary2__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Summary for previous week</h5>
            </div>
  
          
     {/*       <Link to="Summary"> <button className="previousweek">Current</button> </Link> */}  
         
          
          
           <h4>Revenue</h4>
            <div className="Summary2__contents">

             <div className="Summary2__content total">
                 
                 <div>
                 <h3>Previous Week</h3>
                 </div>
              
                 <h5>3005</h5>
                 <h5>50%</h5>
             </div>

             <div className="Summary2__content total">
                 
                 <div>
                 <h3>Current Week</h3>
                 </div>
                
                 <h5>{revenue}</h5>
                 <h5>74%</h5>
             </div>

            
             
             </div>


             <h4>Expenses</h4>
             <div className="Summary2__contents">

<div className="Summary2__content total">
    
    <div>
    <h3>Previous Week</h3>
    </div>
   
    <h5>3005</h5>
    <h5>43%</h5>
</div>

<div className="Summary2__content total">
    
    <div>
    <h3>Current Week</h3>
    </div>
    
    <h5>{expense}</h5>
    <h5>62%</h5>
</div>


</div>


<h4>Banked</h4>
<div className="Summary2__contents">

<div className="Summary2__content total">
    
    <div>
    <h3>Previous Week</h3>
    </div>
   
    <h5>3005</h5>
    <h5>29%</h5>
</div>

<div className="Summary2__content total">
    
    <div>
    <h3>Current Week</h3>
    </div>
   
    <h5>{banked}</h5>
    <h5>15%</h5>
</div>


</div>

{ show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag"  >
              <h5>Weekly Update</h5>
             
              
                <input onChange={(e) => setRevenue(e.target.value)} type="number" id="input" placeholder="Current week revenue" className="weeklyupdate" />

                <input onChange={(e) => setExpense(e.target.value)} type="number" id="input" placeholder="Current week Expenses" className="weeklyupdate" />
                
                <input onChange={(e) => setBanked(e.target.value)} type="number" id="input" placeholder="Current week Banked" className="weeklyupdate" />

              
              <Link to="/Summary2">  <button onClick={() => {setShow(false) ; setClicked(true)}} >confirm</button> </Link>
            

           </div>
           </div>
         }            
         
        </div>
    )
    }

export default Summary2;
