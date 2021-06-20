import React,{useState} from 'react'
import Chart from '../Chart/Chart'
import {List , X , XCircle , CircleWavy , CaretDown  , Star} from 'phosphor-react'
import Logo from './images/20210430_091825-removebg-preview_0__1-removebg-preview (1).png'
import SidebarContent from '../SidebarContent/SidebarContent'
import "./AdminDash.scss"

const AdminDash = () => {
    const [show , setShow] = useState(false)
    const [approve , setApprove] = useState(false)
    const [profile , setProfile] = useState(false)
    const [weekly , setWeekly] = useState(false)
    const [current , setCurrent] = useState('Users')
    const [tab , setTab] = useState("")
    const [content , setContent] = useState(


        {
            "Users":[
                {name: "Registered Users" , total : "18,000" , data:[83,36,42,72,26,44,75] , tab:"Users" },
                {name: "Active Users" , total : "15,000" , data:[38,52,38,62,56,34,65], tab:"Users" },
                {name: "Churned users" , total : "600" , data:[48,69,22,62,36,44,55] ,tab:"Users" },
               
            ],
            "Organizations":[
                {name: "Organizations" , total : "1000" , data:[23,56,32,52,46,64,55], tab:"Organizations" },
                {name: "Active Users" , total : "700" , data:[88,26,82,42,96,56,15] , tab:"Organizations"  },
                {name: "Churned users" , total : "17" , data:[58,86,52,82,56,25,65] , tab:"Organizations"  },
            ],
            "Payments":[
                {name: "Transactions" , total : "7000" , data:[25,63,23,34,73,34,53], tab:"Payments" },
                {name: "Commision" , total : "3,005" , data:[53,43,45,23,34,76,34], tab:"Payments" },
                {name: "Refunds" , total : "300,000" , data:[23,34,46,32,73,32,45], tab:"Payments" },
            ],
            "Vendors":[
                {name: "Total Vendors" , total : "8500" , data:[35,13,23,33,27,42,63] , tab:"Vendors" },
                {name: "Active Vendors" , total : "90" , data:[36,26,36,25,45,76,42], tab:"Vendors" },
                {name: "Premium Vendors" , total : "4,00" , data:[53,13,62,24,27,34,56] , tab: "Vendors" },
                {name: "Transactions" , total : "45,00" , data:[73,25,84,35,23,35,25], tab: "Vendors" },
            ],
            "Shop":[
                {name: "Total Volume" , total : "61319" , data:[45,23,57,34,56,25,45] , tab:"Shop" },
                {name: "Commission" , total : "900" , data:[53,43,45,23,34,76,34] , tab:"Shop" },
                {name: "Refunds" , total : "3583" , data:[45,35,84,24,25,74,34] , tab:"Shop" },
                {name: "Pay Later" , total : "3090" , data:[26,47,27,47,38,67,46] , tab:"Shop" },
            ],
            "Autorand":[
                {name: "Mechanics" , total : "9700" , data:[25,63,23,34,73,34,53], tab:"Autorand" },
                {name: "Repairs" , total : "8605" , data:[53,43,45,23,34,76,34], tab:"Autorand" },
                {name: "Routine" , total : "280" , data:[23,34,46,32,73,32,45] , tab:"Autorand" },
                {name: "Schedules" , total : "700,000" , data:[32,23,43,76,24,35,34] , tab:"Autorand" },
                {name: "Vehicle" , total : "300" , data:[34,23,73,56,26,35,73] , tab:"Autorand" },
            ],
            "Bonuses":[
                {name: "Cashbacks" , total : "9800" , data:[25,73,83,54,33,44,63], tab:"Bonuses" },
                {name: "Referral Bonuses" , total : "3,305" , data:[73,33,75,33,64,86,64], tab:"Bonuses" },
                {name: "Transactions" , total : "19,000" , data:[33,54,26,22,83,62,45], tab:"Bonuses" },
            ],
            "Referrals":[
                {name: "Total Referrals" , total : "8934" , data:[55,33,23,64,23,24,83] , tab:"Referrals" },
                {name: "Paid Bonuses" , total : "82345" , data:[63,43,55,33,54,26,54], tab:"Referrals" },
                {name: "Outstanding Bonuses" , total : "390,003" , data:[69,44,76,22,33,42,25], tab:"Referrals" },
                {name: "Ordinary Referrals" , total : "870" , data:[43,74,36,82,53,82,25], tab:"Referrals" },
                {name: "Staff" , total : "300,000" , data:[63,34,26,72,33,32,75], tab:"Referrals" },
            ],
            "Payroll":[
                {name: "Total Monthly" , total : "7000" , data:[25,63,23,34,73,34,53] , tab: "Payroll"},
                {name: "Outstanding Pay Later" , total : "3,005" , data:[53,43,45,23,34,76,34], tab: "Payroll" },
                {name: "Payroll loan Request" , total : "300,000" , data:[23,34,46,32,73,32,45], tab: "Payroll" },
            ],
            "Transactions":[
                {name: "Total Transactions" , total : "9800" , data:[25,73,83,54,33,44,63] , tab: "Transactions"},
                {name: "Failed Transactions" , total : "3,305" , data:[73,33,75,33,64,86,64], tab: "Transactions" },
                {name: "Successfull Transactions" , total : "19,000" , data:[33,54,26,22,83,62,45] , tab: "Transactions"},
                {name: "Pending Transactions" , total : "3,305" , data:[73,33,75,33,64,86,64], tab: "Transactions" },
            ],
             "Mechanic":[
                {name: "Total Mechanics" , total : "8934" , data:[55,33,23,64,23,24,83], tab:"Mechanic" },
                {name: "Active Mechanics" , total : "82345" , data:[63,43,55,33,54,26,54] , tab:"Mechanic"  },
                {name: "Churned Mechanics" , total : "390,003" , data:[69,44,76,22,33,42,25] , tab:"Mechanic"  },
                {name: "Mechanic Referrals" , total : "870" , data:[43,74,36,82,53,82,25] , tab:"Mechanic"  },
            ],
            
        }
    )
    console.log( content[current] ,  typeof current)
    let dataarrray =  content[current].map( one => one.data)
    console.log(dataarrray[0] )


    const approveSet = () =>{
        setApprove(true)
    }
    const showProfile = () =>{
        setProfile(true)
    }
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
                    <li onClick={() => setCurrent("Mechanic")} className={current === "Mechanic" ? `active`: ``}><p>Mechanic</p></li>
                    <li onClick={() => setCurrent("Sub admin")} className={current === "Sub admin" ? `active`: ``}><p>Sub admin</p></li>
                    
                </ul>

            </div>
            <div className={ show === true ? `nav__showing admindash__body` : `nav__hiding admindash__body`}>
                   <div className="admindash__menu" onClick={() => setShow(!show)}>
                   <List size={30} weight="bold" />
                   </div>
                   <img src={Logo} className="logo"/>
                   
                   <SidebarContent showProfile={showProfile} setApprove={approveSet} content={content[current]} />
                   
            </div>

            { approve === false? <p></p>:
           <div className="tag__box ">
           <div className="tag"   >
               <div className="tag__cancel" onClick={() => setApprove(false)}><XCircle size={25} weight="bold" color="red" /></div>
               <h4>Approve</h4>

               <input type="text" class="landmark" placeholder="First Landmark Neighbourhood"/>

                <input type="text" class="landmark" placeholder="Second Landmark Neighbourhood"/>

                <input type="text" class="landmark" placeholder="Third Landmark Neighbourhood"/>
             
            
                <button className="storeandsocial">Add</button>
              

           </div>
           </div>
         }

          { profile === false? <p></p>:
           <div className="tag__box ">
           <div className="tag mechanics"   >
               <div className="tag__cancel" onClick={() => setProfile(false)}><XCircle size={25} weight="bold" color="red" /></div>
               <h4>Mechanic</h4>

               <div className="mechanic__details">
               <h3>Name</h3>
               <p><span><CircleWavy size={14} color="green" weight="fill" /></span>Ugwu chiagozie stanley</p>
               </div>

               <div className="mechanic__details">
               <h3>Contact</h3>
               <p>090232032355</p>
               </div>

               <div className="mechanic__details">
               <h3>Location</h3>
               <p>Nsukka, Enugu State</p>
               </div>

               <div className="mechanic__details">
               <h3>Type</h3>
               <p>Auto Electrician</p>
               </div>



                <div className="pro" style={tab === "pro"? {borderBottom:"1px solid rgba(0,0,0,.2)"}:{borderBottom:"0px solid rgba(0,0,0,.2)"}}>
                <h3>Profile</h3>
                <div className={tab === "pro"?`reverse`:null} onClick={() => tab === "pro"? setTab(""): setTab("pro")}><CaretDown size={15} weight="bold" /></div>
                </div>

                <div className={tab === "pro"? `open profile`:`profile`}>
             

                 <div>
                     <h3>First Name</h3>
                     <p>Ugwu</p>
                 </div>

                  <div>
                     <h3>Last Name</h3>
                     <p>Chiagozie</p>
                 </div>

                  <div>
                     <h3>Phone Number</h3>
                     <p>09023472324</p>
                 </div>

                  <div>
                     <h3>Email Address</h3>
                     <p>ugwustan@gmail.com</p>
                 </div>

                 <div>
                     <h3>Mobme handle</h3>
                     <p><span><CircleWavy size={12} color="green" weight="fill" /></span>stanlee</p>
                 </div>


               
            
                </div>

                <div className="ref" style={tab === "ref"? {borderBottom:"1px solid rgba(0,0,0,.2)"}:{borderBottom:"0px solid rgba(0,0,0,.2)"}}>
                <h3>Car reference(s)</h3>
                <div className={tab === "ref"?`reverse`:null} onClick={() => tab === "ref"? setTab(""): setTab("ref")}><CaretDown size={15} weight="bold" /></div>
                </div>

                <div className={tab === "ref"? `open references`:`references`}>
             
                <p>James John</p>
                <p>Josephine Gloria</p>
                <p>Chizara chioma</p>
                <p>Micheal John</p>
            
                </div>

                <div className="rating" style={tab === "rating"? {borderBottom:"1px solid rgba(0,0,0,.2)"}:{borderBottom:"0px solid rgba(0,0,0,.2)"}}>
                <h3>Ratings</h3>
                <div className={tab === "rating"?`reverse`:null} onClick={() => tab === "rating"? setTab(""): setTab("rating")}><CaretDown size={15} weight="bold" /></div>
                </div>
                
                <div className={tab === "rating"? `open mechanic__rates`:`mechanic__rates`}>
                 <div>
                     <h3>Paul ellen</h3>
                     <p>5<span><Star size={12} color="#e9d907" weight="fill" /></span></p>
                 </div>

                  <div>
                     <h3>Nwoke Chidioha</h3>
                     <p>3<span><Star size={12} color="#e9d907" weight="fill" /></span></p>
                 </div>

                  <div>
                     <h3>Chioma Divine</h3>
                     <p>5<span><Star size={12} color="#e9d907" weight="fill" /></span></p>
                 </div>

                  <div>
                     <h3>Grace Josephine</h3>
                     <p>4<span><Star size={12} color="#e9d907" weight="fill" /></span></p>
                 </div>

                </div>


             
            
               
              

           </div>
           </div>
         }

        </div>
    )
}

export default AdminDash
