import React from 'react'
import Stanley from './images/stanley.jpg'
import Status from './images/20210322_54722.jpg'
import Cart from './images/20210322_104712.jpg'
import Bonus from './images/34654647-money-bag-bonus-icon_1.jpg'
import Money2 from './images/money2.png'
import {PlusCircle, Bank , Bell, ShoppingCart, Money , CurrencyDollar, Handshake} from 'phosphor-react'
import {Link} from 'react-router-dom'
import Naira from 'react-naira'
import Records from '../Records/Records'
import './Home.scss'
// DotsNine, Lifebuoy , Copy , Notepad 
// <h4 className="intro__message">Hi, stanley </h4>

const Home = () => {
    return (
        <div className="home">
            <div className="intro">

                   <img className="profile" src={Stanley} alt="profile_image"></img>
                   <div className="intro__message">
                       <Link to="/setting">
                       <div><h4>Hi, Kwado Nzeh</h4> <img className="status" src={Status} alt="status"></img></div>
                       </Link>
                       <h6>@Nzeh1</h6>
                   </div>
                    <div className="add__money" >
                       <Link to="/notification">
                           <Bell size={22} color="#301a96" weight="fill" />
                       </Link>
                    </div>
                   
                 
              {/*
                   <div className="add__circle"> <PlusCircle size={20} weight="fill" />  </div>
            <img src={Money2}  className="money" alt="pay"></img>
            <img src={Cart} className="cart" alt="shop"></img>
            <img src={Bonus} className="bonus" alt="bonus"></img>
            */}
          
            </div>
            <div className="card_info">
                  <Link to="balance">
                  <h4>$mobme</h4> 
                  </Link>
                  <Link to="/balance">
                  <h1><Naira>0</Naira></h1>
                  </Link>
                 <div className="card__actions">
                 <div className="">
                       <Link to="/pay">
                      <div className="iconbox spend_iconbox"><Handshake color="#301a96" weight="fill" size={25} /></div>
                      </Link>
                      <p>Pay</p>
                      
                  </div>
                  
                  <div>
                      <Link to="/shop">
                        <div className="iconbox save_iconbox"> <ShoppingCart color="#301a96" weight="fill" size={25} /></div>
                      </Link>
                      <p>Shop</p>

                  </div>
                  <div>
                     <Link to="bonuses">
                      <div className="iconbox borrow_iconbox">  <CurrencyDollar color="#301a96" weight="bold" size={25} /></div>
                      </Link>
                      <p>Bonus</p>
                      
                  </div>
                 </div>
            </div>
             <div className="record_container">
              <Records />
            </div>

        </div>
    )
}

export default Home
