import React from 'react'
import Photo from './images/stanley.jpg'
import {Link} from 'react-router-dom'
import {CaretRight} from 'phosphor-react'
import './Account.scss'

const Account = () => {
    return (
        <div className="account">
            <div class="account__info">

            <img src={Photo}></img>
            <h3 className="name">Ugwu Stanley</h3>
            <p className="tag">@Stanlee</p>
            </div>
          
           <div className="general group">
               <h2>General</h2>
               <div className="link">
                   <Link to="/setting">
                    <p>Profile settings</p>
                    </Link>
                    <div className="arrow-right">
                    <Link to="/setting">
                       <CaretRight size={20} weight="bold" />
                       </Link>
                    </div>
                    <Link to="/kin">
                    <p>Next of Kin</p>
                    </Link>
                    
                    <div className="arrow-right">
                    <Link to="/kin">
                       <CaretRight size={20} weight="bold" />
                    </Link>
                   </div>
                   
               </div>
            </div>

            <div className="support group">
               <h2>Support</h2>
               <div className="link">
                    <p>FAQs</p>
                    <div className="arrow-right">
                       <CaretRight size={20} weight="bold" />
                    </div>
                   
                    <p>Chat Customer Support</p>
                    <div className="arrow-right">
                       <CaretRight size={20} weight="bold" />
                   </div>
               </div>
            </div>

            <div className="growth group">
               <h2>Growth</h2>
               <div className="link">
                   <Link to="/transaction">
                    <p>Transactions</p>
                    </Link>
                    <div className="arrow-right">
                        <Link to="/transaction">
                       <CaretRight size={20} weight="bold" />
                       </Link>
                    </div>
                    <Link to="/vendor">
                    <p>Vendor Account</p>
                    </Link>
                   <div className="arrow-right">
                       <Link to="/vendor">
                      <CaretRight size={20} weight="bold" />
                      </Link>
                   </div>
               </div>
            </div>

            <div className="security group">
               <h2>Security</h2>
               <div className="link">
                   <Link to="/changepass">
                    <p>Change Password</p>
                   </Link>
                    <div className="arrow-right">
                       <Link to="/changepass">
                            <CaretRight size={20} weight="bold" />
                       </Link>
                    </div>
                   <Link to="/updatekyc">
                    <p>Update KYC</p>
                    </Link>
                    <div className="arrow-right">
                        <Link to="/updatekyc">
                            <CaretRight size={20} weight="bold" />
                       </Link>
                   </div>
               </div>
            </div>
           
           
            <div className="reward group">
               <h2>Rewards</h2>
               <div className="link">
                   <Link to="/rewards">
                        <p>Referrals</p>
                    </Link>
                    <div className="arrow-right">
                        <Link to="/rewards">
                            <CaretRight size={20} weight="bold" />
                        </Link>
                    </div>
                    <Link to="/bonuses">
                        <p>Bonuses</p>
                    </Link>
                    <div className="arrow-right">
                       <Link to="/bonuses">
                           <CaretRight size={20} weight="bold" />
                       </Link>
                   </div>
               </div>
            </div>

            <div className="logout group">
              
               <div className="link logout">
                    <p>Logout</p>
                    <div className="arrow-right">
                       <CaretRight size={20} weight="bold" />
                    </div>
                   
               </div>
            </div>


        </div>

    )
}

export default Account
