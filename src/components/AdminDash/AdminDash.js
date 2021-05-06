import React,{useState} from 'react'
import Chart from '../Chart/Chart'
import {List , X} from 'phosphor-react'
import Logo from './images/20210430_091825-removebg-preview_0__1-removebg-preview (1).png'
import SidebarContent from '../SidebarContent/SidebarContent'
import "./AdminDash.scss"

const AdminDash = () => {
    const [show , setShow] = useState(false)
    const [weekly , setWeekly] = useState(false)
    const [current , setCurrent] = useState('Users')
    const [content , setContent] = useState(
        {
            "Users":[
                {name: "Registered Users" , total : "18,000" , data:[83,36,42,72,26,44,75] },
                {name: "Active Users" , total : "15,000" , data:[38,52,38,62,56,34,65] },
                {name: "Churned users" , total : "600" , data:[48,69,22,62,36,44,55] },
               
            ],
            "Organizations":[
                {name: "Organizations" , total : "1000" , data:[23,56,32,52,46,64,55] },
                {name: "Active Users" , total : "700" , data:[88,26,82,42,96,56,15] },
                {name: "Churned users" , total : "17" , data:[58,86,52,82,56,25,65] },
            ],
            "Payments":[
                {name: "Transactions" , total : "7000" , data:[25,63,23,34,73,34,53] },
                {name: "Commision" , total : "3,005" , data:[53,43,45,23,34,76,34] },
                {name: "Refunds" , total : "300,000" , data:[23,34,46,32,73,32,45] },
            ],
            "Vendors":[
                {name: "Total Vendors" , total : "8500" , data:[35,13,23,33,27,42,63] },
                {name: "Active Vendors" , total : "90" , data:[36,26,36,25,45,76,42] },
                {name: "Premium Vendors" , total : "4,00" , data:[53,13,62,24,27,34,56] },
                {name: "Transactions" , total : "45,00" , data:[73,25,84,35,23,35,25] },
            ],
            "Shop":[
                {name: "Total Volume" , total : "61319" , data:[45,23,57,34,56,25,45] },
                {name: "COmmission" , total : "900" , data:[53,43,45,23,34,76,34] },
                {name: "Refunds" , total : "3583" , data:[45,35,84,24,25,74,34] },
                {name: "Pay Later" , total : "3090" , data:[26,47,27,47,38,67,46] },
            ],
            "Autorand":[
                {name: "Mechanics" , total : "9700" , data:[25,63,23,34,73,34,53] },
                {name: "Repairs" , total : "8605" , data:[53,43,45,23,34,76,34] },
                {name: "Routine" , total : "280" , data:[23,34,46,32,73,32,45] },
                {name: "Schedules" , total : "700,000" , data:[32,23,43,76,24,35,34] },
                {name: "Vehicle" , total : "300" , data:[34,23,73,56,26,35,73] },
            ],
            "Bonuses":[
                {name: "Cashbacks" , total : "9800" , data:[25,73,83,54,33,44,63] },
                {name: "Referral Bonuses" , total : "3,305" , data:[73,33,75,33,64,86,64] },
                {name: "Transactions" , total : "19,000" , data:[33,54,26,22,83,62,45] },
            ],
            "Referrals":[
                {name: "Total Referrals" , total : "8934" , data:[55,33,23,64,23,24,83] },
                {name: "Paid Bonuses" , total : "82345" , data:[63,43,55,33,54,26,54] },
                {name: "Outstanding Bonuses" , total : "390,003" , data:[69,44,76,22,33,42,25] },
                {name: "Ordinary Referrals" , total : "870" , data:[43,74,36,82,53,82,25] },
                {name: "Staff" , total : "300,000" , data:[63,34,26,72,33,32,75] },
            ],
            "Payroll":[
                {name: "Total Monthly" , total : "7000" , data:[25,63,23,34,73,34,53] },
                {name: "Outstanding Pay Later" , total : "3,005" , data:[53,43,45,23,34,76,34] },
                {name: "Payroll loan Request" , total : "300,000" , data:[23,34,46,32,73,32,45] },
            ],
            "Transactions":[
                {name: "Total Transactions" , total : "9800" , data:[25,73,83,54,33,44,63] },
                {name: "Failed Transactions" , total : "3,305" , data:[73,33,75,33,64,86,64] },
                {name: "Successfull Transactions" , total : "19,000" , data:[33,54,26,22,83,62,45] },
                {name: "Pending Transactions" , total : "3,305" , data:[73,33,75,33,64,86,64] },
            ],
        }
    )
    console.log( content[current] ,  typeof current)
    let dataarrray =  content[current].map( one => one.data)
    console.log(dataarrray[0] )
    return (
        <div className="admindash">
            <div className={ show === true ? `nav__show admindash__nav` : `nav__hide admindash__nav`}>
            <div className="admindash__cancel">
                   <X size={30} weight="bold" onClick={() => setShow(false)} />
            </div>
                <ul>
                    <li onClick={() => setCurrent("Users")} className={current === "Users" ? `active`: ``}><p>Users</p></li>
                    <li onClick={() => setCurrent("Organizations") } className={current === "Organizations" ? `active`: ``}><p>Organizations</p></li>
                    <li onClick={() => setCurrent("Payments")} className={current === "Payments" ? `active`: ``}><p>Payments</p></li>
                    <li onClick={() => setCurrent("Vendors")} className={current === "Vendors" ? `active`: ``}><p>Vendors</p></li>
                    <li onClick={() => setCurrent("Shop")} className={current === "Shop" ? `active`: ``}><p>Shop</p></li>
                    <li onClick={() => setCurrent("Autorand")} className={current === "Autorand" ? `active`: ``}><p>Autorand</p></li>
                    <li onClick={() => setCurrent("Bonuses")} className={current === "Bonuses" ? `active`: ``}><p>Bonuses</p></li>
                    <li onClick={() => setCurrent("Referrals")} className={current === "Referrals" ? `active`: ``}><p>Referrals</p></li>
                    <li onClick={() => setCurrent("Payroll")} className={current === "Payroll" ? `active`: ``}><p>Payroll</p></li>
                    <li onClick={() => setCurrent("Transactions")} className={current === "Transactions" ? `active`: ``}><p>Transactions</p></li>
                    <li onClick={() => setCurrent("Sub admin")} className={current === "Sub admin" ? `active`: ``}><p>Sub admin</p></li>
                    
                </ul>

            </div>
            <div className={ show === true ? `nav__showing admindash__body` : `nav__hiding admindash__body`}>
                   <div className="admindash__menu" onClick={() => setShow(!show)}>
                   <List size={30} weight="bold" />
                   </div>
                   <img src={Logo} className="logo"/>
                   
                   <SidebarContent content={content[current]} />
                   
            </div>
        </div>
    )
}

export default AdminDash
