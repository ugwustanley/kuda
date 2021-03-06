import React,{useState , useEffect} from 'react'
import Chart from '../Chart/Chart'
import Naira from 'react-naira'
import ManageStaffAdmin from '../ManageStaffAdmin/ManageStaffAdmin'
import {List , X , CaretLeft} from 'phosphor-react'
import "./SidebarContent.scss"

const SidebarContent = ({content , showProfile , setApprove , current , showStaff}) => {
    const [weekly , setWeekly] = useState(false)
    const [todaytab , setTodaytab] = useState(["Total Orders" , "Orders Recieved" , "Orders Delivered" , "New Customers"])
    // console.log(content , current)
    // console.log( content.map( one => one.name))
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
                             <p onClick={() => showProfile(true)}>Stanlee Joseph</p>
                             <p onClick={() => showProfile(true)}>09024972493</p>
                             <p onClick={() => showProfile(true)}>Enugu, Nigeria</p>
                             <button onClick = {(e) => {handleBtn(e) ; setApprove()}}>Approve</button>
                             </div>

                             <div  className="row row_three">
                            <p onClick={() => showProfile(true)}>Micheal Smith</p>
                            <p onClick={() => showProfile(true)}>070323232424</p>
                            <p onClick={() => showProfile(true)}>Kogi, Nigeria</p>
                            <button onClick = {(e) => {handleBtn(e) ; setApprove()}}>Approve</button>
                             </div>

                             <div  className="row row_four">
                             <React.Fragment onClick={() => showProfile(true)}>
                             <p onClick={() => showProfile(true)}>Chiamaka chike</p>
                             <p onClick={() => showProfile(true)}>09037273737</p>
                             <p onClick={() => showProfile(true)}>Lagos Nigeria</p>
                             </React.Fragment>
                             <button onClick = {(e) => {handleBtn(e) ; setApprove()}}>Approve</button>
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
                         <div style={current === "Payroll" ? null :{display:"none"}} >
                             <ManageStaffAdmin showStaff={showStaff} />
                         </div>
{/* <div style={current === "Payroll" ? null :{display:"none"}} className="manage_staff">

       
     <div className="staff_details">
           <div className="staff_unit">
                <h4>Handle</h4>
                <p>@vincentmicheal</p>
                <h4>Salary</h4>
                <p><Naira>26000</Naira></p>
                <h4>Cycle</h4>
                <p>13</p>
                <h4>Paylater limit</h4>
                <p>18</p>
                <h4>Tax beneficiary</h4>
                <p>Abia</p>

                <button className="suspend">Suspend</button>
                
           </div>

           <div className="staff_unit">
                <h4>Handle</h4>
                <p>@victorpaul</p>
                <h4>Salary</h4>
                <p><Naira>17000</Naira></p>
                <h4>Cycle</h4>
                <p>19</p>
                <h4>Paylater limit</h4>
                <p>16</p>
                <h4>Tax beneficiary</h4>
                <p>Lagos</p>
                <button className="suspend">Suspend</button>
                
           </div>

           <div className="staff_unit">
                <h4>Handle</h4>
                <p>@peterchiagozie</p>
                <h4>Salary</h4>
                <p><Naira>80000</Naira></p>
                <h4>Cycle</h4>
                <p>22</p>
                <h4>Paylater limit</h4>
                <p>8</p>
                <h4>Tax beneficiary</h4>
                <p>Enugu</p>
                <button className="suspend">Suspend</button>
                
           </div>

           <div className="staff_unit">
                <h4>Handle</h4>
                <p>@JamesJohn</p>
                <h4>Salary</h4>
                <p><Naira>6000</Naira></p>
                <h4>Cycle</h4>
                <p>78</p>
                <h4>Paylater limit</h4>
                <p>7</p>
                <h4>Tax beneficiary</h4>
                <p>Lagos</p>
                <button className="suspend">Suspend</button>
                
           </div>
           </div>


        
        <div className="payroll_acc">
           <div className="payroll_details">
           <h4 className="header">Payroll bank details</h4>
           {/* <button className="update_details" onClick={() => setUpdate(true)}>Update Details</button> 
           </div>
           <div className="bank_details">
               <h4>Bank name</h4>
               <p>First Bank Nigeria</p>
           </div>
           <div className="bank_details">

               <h4>Account Name</h4>
               <p>Ugwu Chiagozie Stanley</p>

           </div>
           <div className="bank_details">
               <h4>Account Number</h4>
               <p>20100784334</p>
           </div>
           </div>
           </div>
            */}
           </div>
                        
                        
                   
        </React.Fragment>
    )
}

export default SidebarContent;



