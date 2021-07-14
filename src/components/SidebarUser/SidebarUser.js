import React,{useState , useEffect} from 'react'
import Chart from '../Chart/Chart'
import Naira from 'react-naira'
import ManageStaffAdmin from '../ManageStaffAdmin/ManageStaffAdmin'
import {List , Star , CaretDown , CircleWavy , XCircle , X , CaretLeft} from 'phosphor-react'
import "./SidebarUser.scss"

const SidebarOrg = ({content  , current , showStaff}) => {
    const [weekly , setWeekly] = useState(false)
    const [tab , setTab] = useState("")
    const [profile , setProfile] = useState(false)
    const [approve , setApprove] = useState(false)
    const [todaytab , setTodaytab] = useState(["New users" , "Active users" , "Dormant users" , "Churned users"])
 
    //let oneTab = content.map(one => one.tab)

    const userData =  [{name: "Registered Users" , total : "18,000" , data:[83,36,42,72,26,44,75] , tab:"Users" },
    {name: "Active Users" , total : "15,000" , data:[38,52,38,62,56,34,65], tab:"Users" },
    {name: "Churned users" , total : "600" , data:[48,69,22,62,36,44,55] ,tab:"Users" }]

   
    const handleBtn = (e) =>{

        if(e.target.innerHTML === "Verify"){
            e.target.innerHTML = "Unverify"
            e.target.style.background = "#41a371"
        }
        else{
            e.target.innerHTML = "Verify"
            e.target.style.background = "#e3242b"
            e.target.style.color = "#fff"
        }

      

        
        
    }
    return (
        <React.Fragment>
            <div className={profile == true || approve === true ? `admindash__main fit_height`: `admindash__main`}>
                         <div className="admindash__overview">
                               {
                                   userData.map( one => <div className="total__orders">
                                            <p>{one.name}</p>
                                            <h4>{one.total}</h4>
                                   </div>)
                               }
                           
                         </div>
                         <Chart content={userData} />
                         <div className="chart__details">

                         
                         <div className="current__event">
                             <div className="row row_header">
                                <h3>Users Name</h3>
                                <h3>Phone Number</h3>
                                <h3>Location</h3>
                                <h3>Action</h3>
                             </div>

                             <div className=" row row_two">
                             <p onClick={() => setProfile(true)}>Stanlee Joseph</p>
                             <p onClick={() => setProfile(true)}>09024972493</p>
                             <p onClick={() => setProfile(true)}>Enugu, Nigeria</p>
                             <button onClick = {(e) => {handleBtn(e) ; setApprove()}}>Verify</button>
                             </div>

                             <div  className="row row_three">
                            <p onClick={() => setProfile(true)}>Micheal Smith</p>
                            <p onClick={() => setProfile(true)}>070323232424</p>
                            <p onClick={() => setProfile(true)}>Kogi, Nigeria</p>
                            <button onClick = {(e) => {handleBtn(e) ; setApprove()}}>Verify</button>
                             </div>

                             <div  className="row row_four">
                          
                             <p onClick={() => setProfile(true)}>Chiamaka chike</p>
                             <p onClick={() => setProfile(true)}>09037273737</p>
                             <p onClick={() => setProfile(true)}>Lagos Nigeria</p>
                           
                             <button onClick = {(e) => {handleBtn(e) ; setApprove()}}>Verify</button>
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

                         { approve === false? <p></p>:
                            <div className="tag__box ">
                                        <div className="tag"   >
                                            <div className="tag__cancel" onClick={() => setApprove(false)}><XCircle size={25} weight="bold" color="red" /></div>
                                            <h4>Confirm Action</h4>
                                            
                                            <button className="conform_action">Confirm</button>

                                             <button className="cancel_action">Cancel</button>
                        

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
                        
                        
                   
        </React.Fragment>
    )
}

export default SidebarOrg;



