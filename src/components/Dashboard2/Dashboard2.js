import React,{useState} from 'react'
import {useHistory , Link} from 'react-router-dom'
import CreatOffers from '../CreateOffers/CreateOffers'
import {CaretLeft, MapPin, Star ,  ArrowLeft , ArrowRight} from 'phosphor-react'
import Manage from '../Manage/Manage'
import './Dashboard2.scss'

const Dashboard2 = () => {
    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [deletes , setDeletes] = useState(false)
    const [clicked , setClicked] = useState(true)
    const [manage , setManage] = useState(true)

    const setShowEvent = () =>{

        setShow(true)
    }

    const setDeletesEvent = () =>{
      setDeletes(true)
    }
    return (
        <div className={show || deletes ? `Dashboard2 popup` : `Dashboard2`}>
                   <div className="Dashboard2__heading">
         <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Dashboard2</h5>
          </div>

          <div className="tabs">
                  <p className={manage === true ? `manage active-tab`: `manage`} onClick={() => setManage(true)}>Manage catalogues</p>
                <Link><p className={manage === true ? `create`: `create active-tab`} onClick={() =>setManage(false)}>Create Offer</p> </Link> 
          </div>
   
        <Link to="summary"> <button className="upgrade">Financials</button> </Link>
         { manage === true?
         <Manage setShowEvent={setShowEvent} setDeletesEvent = {setDeletesEvent}/>
         : 
         <CreatOffers />
         }
         { show === false? <p></p>:
           <div className="tag__box" onClick={() => setTimeout(clicked? setClicked(false) : setShow(false) , 1000)} >
           <div className="tag"  onClick={() => setTimeout(() => {setShow(true) ; setClicked(true)} , 0)} >
              <h4>Edit</h4>
             
              <Link to="/create">
                <button className="storeandsocial"> Store front and social</button>
              </Link>

              <Link to="/create">
                <button>Social only</button>
              </Link> 

           </div>
           </div>
         }

         { deletes === false? <p></p>:
           <div className="tag__box" onClick={() => setTimeout(clicked? setClicked(false) : (setShow(false) , setDeletes(false)) , 1000)} >
           <div className="tag"  onClick={() => setTimeout(() => {setShow(true); setDeletes(true) ; setClicked(true)} , 0)} >
             
              <p>This will be permanently deleted from your Dashboard2</p>
              <Link to="/Dashboard2">
                <button className="proceed">Proceed</button>
              </Link>

              <Link to="/Dashboard2">
                <button className="cancel">cancel</button>
              </Link> 

           </div>
           </div>
         }
          
        
  

         
        </div>
    )
}

export default Dashboard2
