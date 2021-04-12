import React from 'react'
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
                <p className="record__amount">+120,000</p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Okoro Okpara</h5>
                     <p className="record__time">01:34 am</p>
                 </div>
                <p className="record__amount">+10,000</p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Shaba Efonga</h5>
                     <p className="record__time">02:50 pm</p>
                 </div>
                <p className="record__amount">+153,999</p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Okoro Peter</h5>
                     <p className="record__time">06:30 pm</p>
                 </div>
                <p className="record__amount">+20,000</p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Mr Mmadu</h5>
                     <p className="record__time">08:30 pm</p>
                 </div>
                <p className="record__amount">+3000</p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">Ugwu Chiagozie</h5>
                     <p className="record__time">6:02 am</p>
                 </div>
                <p className="record__amount">+1,000,000</p>
            </div>
            <div className="record">
                 <div className="recordsIcon__container"><ArrowsLeftRight size={20} /></div>
                  <div>
                     <h5 className="record__name">James John</h5>
                     <p className="record__time">09:50 am</p>
                 </div>
                <p className="record__amount">+16,000</p>
            </div>
            
        </div>
    )
}

export default Records
