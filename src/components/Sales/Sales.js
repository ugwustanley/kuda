import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , ShareNetwork, CaretDown,Fire, Tag, Repeat} from 'phosphor-react'
import Sale from './images/sales-removebg-preview.png'
import WhatsappB from './images/wb2.svg'
import './Sales.scss'

const Sales = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    return (
        <div className="Sales">
            { show === true? <p></p>:
            <div>
            <div className="Sales__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Sales Dashboard</h5>
            </div>

            <div class="sale">
                <div>
                <h1>Sales time, always day 1</h1>
                <p>Make an offer no one can refuse</p>
                </div>
                <img src={Sale}></img>
            </div>
           
            <div className="share" onClick={() => setShow(true)}>
                <p>Share your store link with customers</p>
                <div>
                    <ShareNetwork size={20} />
                 </div>
            </div>
            
            <div className="Sales__made">
                <div className="heading">
                    <div className="link">
                    <Tag size={20} weight="fill" color="#301a96" />
                    </div>
                 
                <h4>ORDERS</h4>
                <div className="arrow">
                <select>
                   <option value="Today">Today</option>
                   <option value="Today">This Week</option>
                   <option value="Today">This Month</option>
                   <option value="Today">This Year</option>
               </select>
                    </div>
                </div>
                 <p>You currently do not have an order yet</p>
            </div>

            <div className="Sales__made">
                <div className="heading">
                    <div className="link">
                    <Repeat size={20} weight="fill" color="#301a96" />
                    </div>
                 
                <h4>REFUNDS</h4>
                
                <div className="arrow">
               <select>
                   <option value="Today">Today</option>
                   <option value="Today">This Week</option>
                   <option value="Today">This Month</option>
                   <option value="Today">This Year</option>
               </select>
                </div>
                </div>
                 <p>You currently do not have a refund request yet</p>
            </div>
            </div>}
            { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag" >
              <p>Share with friends</p>
              <div class="icons">

                <div className="link1">
                <a href="whatsapp://send?text=I am gifting you 1,000 Naira. Sign up to claim and start earning your salary weekly randmob.com" data-action="share/whatsapp/share">
                <img src="https://img.icons8.com/color/48/000000/whatsapp--v6.png"></img> </a>
                </div>
                
                <div className="link2">
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to&su=Join+Autorand+Early+Access+List&body=%27+I+am+gifting+you+1,000+Naira.+Sign+up+to+claim+and+start+earning+your+salary+weekly+randmob.com+%27&ui=2#"  data-show-count="false">
               <img src="https://img.icons8.com/color/50/000000/gmail--v1.png"/></a>
                </div>
                <div className="link3">
                <a href="whatsapp://send?text=I am gifting you 1,000 Naira. Sign up to claim and start earning your salary weekly randmob.com" data-action="share/whatsapp/share">
                 <img  src={WhatsappB}/> </a>
                </div>
  
              </div>
           </div>
           </div>}
        </div>
    )
}

export default Sales
