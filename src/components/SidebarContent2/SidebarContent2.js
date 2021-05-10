import React,{useState} from 'react'
import Chart from '../Chart/Chart'
import {List , X} from 'phosphor-react'
import "./SidebarContent.scss"

const SidebarContent = ({content}) => {
    const [weekly , setWeekly] = useState(false)
    console.log(content)
    console.log( content.map( one => one.name))
    
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
                         <div  className="admindash__weekly">
                            <div className=" heading">
                            <h3 className={weekly === true ? `activated` : ``} onClick={() => setWeekly(false)}>Todays</h3>
                             <h3 className={weekly === true ? `` : `activated`} onClick={() => setWeekly(true)}>This Week</h3>
                            </div>
                            {weekly === false?
                            <div className="daily__tab" style={weekly === false ? {animationName: "show1"} : {animationDelay:"0"}} >
                            <div className="admindash__weekly__content">
                            <p>Total Orders</p>
                            <p>461</p>   
                            </div>

                            <div className="admindash__weekly__content">
                            <p>Orders Received</p>
                            <p>103</p>   
                            </div>

                            <div className="admindash__weekly__content">
                            <p>Orders Delivered</p>
                            <p>341</p>   
                            </div>

                            <div className="admindash__weekly__content">
                            <p>New Customers</p>
                            <p>789</p>   
                            </div>
                            </div>
                            :
                             <div className="weekly__tab" style={weekly === true ? {animationName: "show2"} : {animationDelay:"0"}}>
                             <div className="admindash__weekly__content">
                             <p>Total Orders</p>
                             <p>1002</p>   
                             </div>
 
                             <div className="admindash__weekly__content">
                             <p>Orders Received</p>
                             <p>23</p>   
                             </div>
 
                             <div className="admindash__weekly__content">
                             <p>Orders Delivered</p>
                             <p>27</p>   
                             </div>
 
                             <div className="admindash__weekly__content">
                             <p>New Customers</p>
                             <p>290</p>   
                             </div>
                             </div> }
                             
                          </div>
                        
                   </div>
        </React.Fragment>
    )
}

export default SidebarContent;



