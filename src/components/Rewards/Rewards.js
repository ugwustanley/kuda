import React,{useState} from 'react'
import Naira from 'react-naira'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft , Trophy, Users} from 'phosphor-react'
import Reward from './images/reward3-unscreen.gif'
import WhatsappB from './images/wb2.svg'
import './Rewards.scss'

const Rewards= () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [verify , setVerify] = useState(false)
    const [event , setEvent ] = useState()
  //  const [show , setShow] = useState(false)
  /*  <div class="icons">
  <a href="whatsapp://send?text=I am gifting you 1,000 Naira. Sign up to claim and start earning your salary weekly randmob.com" data-action="share/whatsapp/share">
  <img src="https://img.icons8.com/color/48/000000/whatsapp--v6.png"/> </a>
  <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to&su=Join+Autorand+Early+Access+List&body=%27+I+am+gifting+you+1,000+Naira.+Sign+up+to+claim+and+start+earning+your+salary+weekly+randmob.com+%27&ui=2#"  data-show-count="false">
      <img src="https://img.icons8.com/color/50/000000/gmail--v1.png"/></a>
  <a href="whatsapp://send?text=I am gifting you 1,000 Naira. Sign up to claim and start earning your salary weekly randmob.com" data-action="share/whatsapp/share">
  <img style="width:35px;margin-top:2px" src="./images/wb2.svg"/> </a>
</div> */
    const handleBtn = () =>{
        //const ele = document.querySelector("verify")
       // console.log(event)
        if(event.innerHTML === "Verify"){
            event.innerHTML = "Unverify"
            event.style.backgroundColor = "red"
        }
        else{
            event.innerHTML = "Verify"
            event.style.backgroundColor = "#301a96"
        }    
        
    }
    return (
        <div className={verify === true || show === true ? `rewards popup` : `rewards`}>
            { show === true? <p></p>:
            <div>
            <div className="rewards__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Referral Earnings</h5>
            </div>

            <p className="rewards__head">Receive rewards of up to <Naira>1000</Naira> when you refer your friends</p>
            
            <div className="rewards__invite">
                 <Users size={48} />
                 <div >
                     <h5>You've invited 0 people</h5>
                     <p>Get and gift 1,000 Naira to you and your referral. The amount you earn is unlimited. Start connecting</p>
                 </div>
            </div>

            <div className="rewards__invite">
                 <Trophy size={48} />
                 <div >
                     <h5>You have 0 cash back</h5>
                     <p>Activate cash backs by sharing your #randnumber each time you shop to increase cash back rewards</p>
                 </div>
            </div>
            
            <h5>Verification</h5>
            <div className="verification_request">
                <h5>@ugwurelex</h5>
                <button onClick={(e) => {setEvent(e.target) ; setVerify(true)}}>Verify</button>
                <h5>@uchemicheal</h5>
                <button onClick={(e) => {setEvent(e.target) ; setVerify(true)}} >Verify</button>
                {/* <h5>@collyrain</h5>
                <button>Verify</button>
                <h5>@chinaza</h5>
            <button className="verify" onClick={(e) => {setEvent(e) , setVerify(true)}}>Verify</button> */}
            </div>

            <h5>All Referrals</h5>
            <div className="all_referrals">


                <div className="one_referral">
                 
                <h5>Handle</h5>
                <h5>Revenue</h5>
                <h5>Points</h5>
                <h5>Bonus</h5>

                </div>

                
                <div className="one_referral">
                 
                <p>@chiagozie</p>
                <p><Naira>30000</Naira></p>
                <p>12.00</p>
                <p>800</p>

                </div>

                
                <div className="one_referral">
                 
                <p>@kizito</p>
                <p><Naira>12390</Naira></p>
                <p>18.00</p>
                <p>750</p>

                </div>


                <div className="one_referral">
                 
                 <p>@ugwustan</p>
                 <p><Naira>24590</Naira></p>
                 <p>23.00</p>
                 <p>270</p>
 
                 </div>

             
             
                {/* <h5>@ugwurelex</h5>
                <button>Confirm</button> */}
                {/* <h5>@collyrain</h5>
                <button>Confirm</button>
                <h5>@uchemicheal</h5>
                <button>Confirm</button> */}
                
            </div>

             <h4>Start here</h4>
            <div className='rewards__share' onClick={() => setShow(true)}>
               <div>
               <h3>Refer & Earn</h3>
                <p>All rewards can be withdrawn to your bank account or used in shopping</p>
               </div>
               <img src={Reward}></img>
            </div></div>}
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

           { verify === false? <p></p>:
           <div className="tag__box2"  >
           <div className="tag" >
              <h4>Verification</h4>
             
                <div className="referral_staff">
                    <h5>Referral Mobkey</h5>
                    <p>@ugwuRelox</p>
                </div>
                
                <button onClick={() => { handleBtn() ;setVerify(false)}}>Referral</button>
                <button onClick={() => { handleBtn() ;setVerify(false)}}>Staff</button>
             

           </div>
           </div>
         }
        </div>
    )
}

export default Rewards
