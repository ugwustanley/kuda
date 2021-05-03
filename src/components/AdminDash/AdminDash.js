import React,{useState} from 'react'
import Chart from '../Chart/Chart'
import {List , X} from 'phosphor-react'
import "./AdminDash.scss"

const AdminDash = () => {
    const [show , setShow] = useState(false)
    const [weekly , setWeekly] = useState(false)
    console.log(weekly)
    return (
        <div className="admindash">
            <div className={ show === true ? `nav__show admindash__nav` : `nav__hide admindash__nav`}>
            <div className="admindash__cancel">
                   <X size={30} weight="bold" onClick={() => setShow(false)} />
            </div>
                <ul>
                    <li className="active"><p>Users</p></li>
                    <li><p>Organizations</p></li>
                    <li><p>Payments</p></li>
                    <li><p>Vendors</p></li>
                    <li><p>Shop</p></li>
                    <li><p>Autorand</p></li>
                    <li><p>Bonuses</p></li>
                    <li><p>Referrals</p></li>
                    <li><p>Payroll</p></li>
                    <li><p>Transactions</p></li>
                    <li><p>Sub admin</p></li>
                    
                </ul>

            </div>
            <div className={ show === true ? `nav__showing admindash__body` : `nav__hiding admindash__body`}>
                   <div className="admindash__menu" onClick={() => setShow(!show)}>
                   <List size={30} weight="bold" />
                   </div>
                   
                   <div className="admindash__main">
                         <div className="admindash__overview">
                               <div className="total__orders">
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
                               </div>
                         </div>
                         <Chart />
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
                   
            </div>
        </div>
    )
}

export default AdminDash
