import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft, MapPin, Star ,  ArrowLeft , ArrowRight} from 'phosphor-react'
import Dress from './images/dress.jpg'
import Laptop from './images/laptop.jpg'
import Book from './images/book.jpg'
import Phone from './images/phone.png'
import './Dashboard.scss'

const Dashboard = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="Dashboard">
                   <div className="Dashboard__heading">
         <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Dashboard</h5>
          </div>

          <div className="tabs">
                  <p className="manage">Manage catalogues</p>
                 <Link to="/create"><p className="create">Create Offer</p></Link> 
          </div>

          <h4>Estimated returns</h4>
          
          <div className="Dashboard__cards">
               <div className="Dashboard__card">
                      <h5>This week Earnings</h5>
                       <h2><Naira>20000</Naira></h2>
                </div>

                <div className="Dashboard__card">
                      <h5>This week Orders</h5>
                       <h2>7</h2>
                </div>

                <div className="Dashboard__card">
                      <h5>Total Earnings</h5>
                       <h2><Naira>350000</Naira></h2>
                </div>

                <div className="Dashboard__card">
                      <h5>Total Orders</h5>
                       <h2>35</h2>
                </div>
          </div>

          <h4 className="offering">Product offerings</h4>
          <div className="Dashboard__products">
              <div className="Dashboard__product">
                  <img src={Dress}></img> 
                  <div>
                      <h4>Headlamp Gx Q460</h4>
                      <p>8 out of 10 ordered</p>
                  </div>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
              </div>

              <div className="Dashboard__product">
                  <img src={Book}></img> 
                  <div>
                      <h4>Living Free inspiration</h4>
                      <p>4 out of 10 ordered</p>
                  </div>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
              </div>

              <div className="Dashboard__product">
                  <img src={Laptop}></img> 
                  <div>
                      <h4>HP 250Hz 30GB Laptop</h4>
                      <p>1 out of 10 ordered</p>
                  </div>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
              </div>

              <div className="Dashboard__product">
                  <img src={Dress}></img> 
                  <div>
                      <h4>Headlamp Gx Q460</h4>
                      <p>3 out of 10 ordered</p>
                  </div>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
              </div>

              <div className="Dashboard__product">
                  <img src={Phone}></img> 
                  <div>
                      <h4>Iphone 13 pro max HD</h4>
                      <p>10 out of 10 ordered</p>
                  </div>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
              </div>



          </div>
        </div>
    )
}

export default Dashboard
