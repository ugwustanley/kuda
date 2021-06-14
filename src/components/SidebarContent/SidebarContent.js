import React,{useState , useEffect} from 'react'
import Chart from '../Chart/Chart'
import {List , X} from 'phosphor-react'
import "./SidebarContent.scss"

const SidebarContent = ({content}) => {
    const [weekly , setWeekly] = useState(false)
    const [todaytab , setTodaytab] = useState(["Total Orders" , "Orders Recieved" , "Orders Delivered" , "New Customers"])
    console.log(content)
    console.log( content.map( one => one.name))
    let oneTab = content.map(one => one.tab)

    useEffect(() => {
        const oneContent = content.map(one => one.tab)
        console.log(oneContent[0])
        if(oneContent[0] === "Mechanic"){
            setTodaytab(["Total Bookings" , "Ongoing Repairs" , "Repairs Completed" , "New Bookings"])
        }else{
            setTodaytab(["Total Orders" , "Orders Recieved" , "Orders Delivered" , "New Customers"])
        }
    }, [content])
    const handleBtn = (e) =>{

        if(e.target.innerHTML === "Approve"){
            e.target.innerHTML = "Suspend"
            e.target.style.background = "#e3242b"
       //         setBtn(e.target.value)
       //         console.log(e.target.innerHTML , 'uiygoy')
        }
        else{
            e.target.innerHTML = "Approve"
            e.target.style.background = "#41a371"
            e.target.style.color = "#fff"
          //       setBtn(e.target.value)
         //   console.log(e.target.innerHTML , '8888')
        }

      

        
        
    }
    return (
        <React.Fragment>
             <div className="admindash__main">
                         <div className="admindash__overview">
                               {
                                   content.map( one => <div className="total__orders">
                                            <p>{one.name}</p>
                                            <h4>{one.total}</h4>
                                   </div>)
                               }
                             {/*}  <div className="total__orders">
                                   <p>Total Orders</p>
                                   <h4>2000</h4>
                               </div>

                               <div className="orders__recieved">
                                   <p>Orders Received</p>
                                   <h4>1400</h4>
                               </div>

                               <div className="orders__delivered">
                                   <p>Orders Delivered</p>
                                   <h4>200</h4>
                               </div>

                               <div className="new__customers">
                                   <p>New Customers</p>
                                   <h4>1700</h4>
                               </div> */}
                         </div>
                         <Chart content={content} />
                         <div className="chart__details">

                         
                         <div className="current__event">
                             <div className="row row_header">
                                <h3>{oneTab[0]} Name</h3>
                                <h3>Phone Number</h3>
                                <h3>Location</h3>
                                <h3>Action</h3>
                             </div>
                             <div className=" row row_two">
                             <p>Stanlee Joseph</p>
                             <p>09024972493</p>
                             <p>Enugu, Nigeria</p>
                             <button onClick = {(e) => handleBtn(e)}>Approve</button>
                             </div>
                             <div className="row row_three">
                            <p>Micheal Smith</p>
                            <p>070323232424</p>
                            <p>Kogi, Nigeria</p>
                            <button onClick = {(e) => handleBtn(e)}>Approve</button>
                             </div>
                             <div className="row row_four">
                             <p>Chiamaka chike</p>
                             <p>09037273737</p>
                             <p>Lagos Nigeria</p>
                             <button onClick = {(e) => handleBtn(e)}>Approve</button>
                             </div>
                         </div>
                         <div  className="admindash__weekly">
                            <div className=" heading">
                            <h3 className={weekly === true ? `activated` : ``} onClick={() => setWeekly(false)}>Today</h3>
                             <h3 className={weekly === true ? `` : `activated`} onClick={() => setWeekly(true)}>This Week</h3>
                            </div>
                            {weekly === false?
                            <div className="daily__tab" style={weekly === false ? {animationName: "show1"} : {animationDelay:"0"}} >
                            <div className="admindash__weekly__content">
                            <p>{todaytab[0]}</p>
                            <p>461</p>   
                            </div>

                            <div className="admindash__weekly__content">
                            <p>{todaytab[1]}</p>
                            <p>103</p>   
                            </div>

                            <div className="admindash__weekly__content">
                            <p>{todaytab[2]}</p>
                            <p>341</p>   
                            </div>

                            <div className="admindash__weekly__content">
                            <p>{todaytab[3]}</p>
                            <p>789</p>   
                            </div>
                            </div>
                            :
                             <div className="weekly__tab" style={weekly === true ? {animationName: "show2"} : {animationDelay:"0"}}>
                             <div className="admindash__weekly__content">
                             <p>{todaytab[0]}</p>
                             <p>1002</p>   
                             </div>
 
                             <div className="admindash__weekly__content">
                             <p>{todaytab[1]}</p>
                             <p>23</p>   
                             </div>
 
                             <div className="admindash__weekly__content">
                             <p>{todaytab[2]}</p>
                             <p>27</p>   
                             </div>
 
                             <div className="admindash__weekly__content">
                             <p>{todaytab[3]}</p>
                             <p>290</p>   
                             </div>
                             </div> }
                             
                          </div>
                         </div>

                        
                        
                   </div>
        </React.Fragment>
    )
}

export default SidebarContent;



