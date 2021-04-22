import React from 'react'
import Naira from 'react-naira'
import { Heartbeat , ArrowsLeftRight } from 'phosphor-react'
import './Records.scss'

const Records = () => {
    //<RedditLogo size={48} />    <GraduationCap size={48} />
    return (
        <div className="records">
            <h5 className="records__day">12 Jun 2020</h5>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Mr Omotoshaba</h5>
                     <p className="record__time">07:30 pm</p>
                 </div>
                <p className="record__amount"><Naira>+120000</Naira></p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Okoro Okpara</h5>
                     <p className="record__time">01:34 am</p>
                 </div>
                <p className="record__amount"><Naira>10000</Naira></p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Shaba Efonga</h5>
                     <p className="record__time">02:50 pm</p>
                 </div>
                <p className="record__amount"><Naira>153999</Naira></p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Okoro Peter</h5>
                     <p className="record__time">06:30 pm</p>
                 </div>
                <p className="record__amount"><Naira>20000</Naira></p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Mr Mmadu</h5>
                     <p className="record__time">08:30 pm</p>
                 </div>
                <p className="record__amount"><Naira>3000</Naira></p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Ugwu Chiagozie</h5>
                     <p className="record__time">6:02 am</p>
                 </div>
                <p className="record__amount"><Naira>10000</Naira></p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">James John</h5>
                     <p className="record__time">09:50 am</p>
                 </div>
                <p className="record__amount"><Naira>16000</Naira></p>
            </div>
            
        </div>
    )
}

export default Records
