import React ,{useState} from 'react'
import "./ManageStaffAdmin.scss"

const ManageStaffAdmin = ({showStaff}) => {
    return (
        <div className="manage_staff_admin">
             <div className="payroll_account">
                                    {/* <div className="payroll_details">
                                    <h4 className="header">Payroll bank details</h4>
                                     <button className="update_details" onClick={() => setUpdate(true)}>Update Details</button> 
                                    </div> */}
                                    <div className="payroll_detailss">
                                        <h4>Bank name</h4>
                                        <p>First Bank Nigeria</p>
                                    </div>
                                    <div className="payroll_detailss">

                                        <h4>Account Name</h4>
                                        <p>Ugwu Chiagozie Stanley</p>

                                    </div>
                                    <div className="payroll_detailss">
                                        <h4>Account Number</h4>
                                        <p>20100784334</p>
                                    </div>

                                    <div className="payroll_detailss">
                                        <h4>Added on</h4>
                                        <p>January 1st 2021</p>
                                    </div>
                </div>            
                  <div className="manage_staff_info">
                             <div className="row row_header">
                                <h3>Handle</h3>
                                <h3>Type(User/Org)</h3>
                                <h3>Phone</h3>
                                <h3>Action</h3>
                             </div>

                             <div className=" row row_two">
                             <p onClick={() => showStaff(true)}>@stanleeJoseph</p>
                             <p onClick={() => showStaff(true)}>User</p>
                             <p onClick={() => showStaff(true)}>09024972493</p>
                             <button>Suspend</button>
                             </div>

                             <div  className="row row_three">
                            <p onClick={() => showStaff(true)}>@MichealSmith</p>
                            <p onClick={() => showStaff(true)}>Organization</p>
                            <p onClick={() => showStaff(true)}>070323232424</p>
                            <button>Suspend</button>
                             </div>

                             <div  className="row row_four">
                           
                             <p onClick={() => showStaff(true)}>@Chiamakachike</p>
                             <p onClick={() => showStaff(true)}>Organization</p>
                             <p onClick={() => showStaff(true)}>09037273737</p>
                          
                           
                             <button>Suspend</button>
                             </div>
                             
                         </div> 


                              
        </div>
    )
}

export default ManageStaffAdmin
