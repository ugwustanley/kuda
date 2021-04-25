import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft, MapPin, Star ,  ArrowLeft , ArrowRight} from 'phosphor-react'

import './Adminorg.scss'

const Adminorg = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [current  , setCurrent] = useState("Users")
    return (
        <div className="Adminorg">
                   <div className="Adminorg__heading">
         <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Organizations Dashboard</h5>
          </div>

         

        <select onChange={(e) => setCurrent(e.target.value)}>
            <option value="Users">Users </option>
            <option value="Organizations">Organizations</option>
            <option value="Payments">Payments</option>
            <option value="Vendors">Vendors</option>
            <option value="Shop">Shop</option>
            <option value="Autorand">Autorand</option>
            <option value="Bonuses">Bonuses</option>
            <option value="Referrals">Referrals</option>
            <option value="Payroll">Payroll</option>
            <option value="Sub Admin">Sub Admin</option>
        </select>

         <div style={current === "Users"? {display:"block"}: {display:"none"}}>
          <h4>Users</h4>
          
          <div className="Adminorg__cards" >
               <div className="Adminorg__card" >
                      <h5>Registered Users</h5>
                       <h2>18,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Active Users</h5>
                       <h2>15,000</h2>
                </div>

                <div className="Adminorg__card fill">
                      <h5>Churned Users</h5>
                       <h2>600</h2>
                </div>
          </div>
          </div>

          <div style={current === "Organizations"? {display:"block"}: {display:"none"}}>

          <h4>Organizations</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Registered Orgs</h5>
                       <h2>1,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Active Orgs</h5>
                       <h2>700</h2>
                </div>

                <div className="Adminorg__card fill">
                      <h5>Churned Orgs</h5>
                       <h2>17</h2>
                </div>
          </div>
          </div>

          <div style={current === "Payments"? {display:"block"}: {display:"none"}}>
          <h4>Payments</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Transactions</h5>
                       <h2>12,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Commission</h5>
                       <h2>7,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Refunds</h5>
                       <h2><Naira>3500000</Naira></h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Pay later</h5>
                       <h2>3,005</h2>
                </div>
          </div>
          </div>

          <div style={current === "Vendors"? {display:"block"}: {display:"none"}}>

          <h4>Vendors</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Total Vendors</h5>
                       <h2>9,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Active Vendors</h5>
                       <h2>7</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Premium Vendors</h5>
                       <h2>4,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Transactions</h5>
                       <h2>350,000</h2>
                </div>
          </div>
          </div>
         

         <div style={current === "Shop"? {display:"block"}: {display:"none"}}>

          <h4>Shop</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Total Volume</h5>
                       <h2>22,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Commission</h5>
                       <h2>7,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Refunds</h5>
                       <h2><Naira>350000</Naira></h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Pay later</h5>
                       <h2>3,975</h2>
                </div>
          </div>
          </div>

         <div style={current === "Autorand"? {display:"block"}: {display:"none"}}>

          <h4>Autorand</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Mechanics</h5>
                       <h2>1,700</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Repairs</h5>
                       <h2>700,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Routine</h5>
                       <h2>3,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Schedules</h5>
                       <h2>300</h2>
                </div>
                <div className="Adminorg__card fill">
                      <h5>Vehicle</h5>
                       <h2>900</h2>
                </div>
          </div>
          </div>

        <div style={current === "Bonuses"? {display:"block"}: {display:"none"}}>
          <h4>Bonuses</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Cashbacks</h5>
                       <h2>8,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Referral Bonuses</h5>
                       <h2>700,000</h2>
                </div>

                <div className="Adminorg__card fill">
                      <h5>Transactions</h5>
                       <h2>19,000</h2>
                </div>

          </div>
          </div>

         <div style={current === "Referrals"? {display:"block"}: {display:"none"}}>
          <h4>Referrals</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Total Referrals</h5>
                       <h2>50,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Paid Bonuses</h5>
                       <h2>7,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Outstanding Bonuses</h5>
                       <h2>5,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Ordinary Referrals</h5>
                       <h2>35</h2>
                </div>

                <div className="Adminorg__card fill">
                      <h5>Staff</h5>
                       <h2>357</h2>
                </div>
          </div>
          </div>

         <div style={current === "Payroll"? {display:"block"}: {display:"none"}}>
          <h4>Payroll</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card">
                      <h5>Total Monthly</h5>
                       <h2>60,000</h2>
                </div>

                <div className="Adminorg__card">
                      <h5>Outstanding Pay later</h5>
                       <h2>700</h2>
                </div>

                <div className="Adminorg__card fill">
                      <h5>Payroll loan requests</h5>
                       <h2>750</h2>
                </div>

          </div>
          </div>

         <div style={current === "Sub Admin"? {display:"block"}: {display:"none"}}>
          <h4>Sub Admin</h4>
          
          <div className="Adminorg__cards">
               <div className="Adminorg__card btn create_sub">
                      <h5>Create sub Admin</h5>
                </div>

                <div className="Adminorg__card btn subs">
                     <h5>Sub Admin</h5>
                </div>


          </div>
          </div>

     
        </div>
    )
}

export default Adminorg
