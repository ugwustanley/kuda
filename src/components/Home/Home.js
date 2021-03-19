import React from 'react'
import Stanley from './images/stanley.jpg'
import {PlusCircle ,  DotsNine, Lifebuoy , Copy , Notepad} from 'phosphor-react'
import Records from '../Records/Records'
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="intro">

                   <img className="profile" src={Stanley} alt="profile_image"></img>
                   <h4 className="intro__message">Hi, stanley</h4>
                   <h4 className="add__money">Add Money</h4>
                   <div className="add__circle"> <PlusCircle size={20} />  </div> 
          
            </div>
            <div className="card_info">

                  <h4>Account Balance</h4> 
                  <h1>N0.00</h1>

                 <div className="card__actions">
                 <div className="">

                      <div className="iconbox spend_iconbox"><Copy size={25} /></div>
                      <p>Spend</p>

                  </div>
                  <div>

                      <div className="iconbox save_iconbox"><DotsNine size={25} /></div>
                      <p>Save</p>

                  </div>
                  <div>

                      <div className="iconbox borrow_iconbox"><Notepad size={25} /></div>
                      <p>Borrow</p>

                  </div>
                 </div>
            </div>
            <div>
                                
            </div>

          <Records />

        </div>
    )
}

export default Home
