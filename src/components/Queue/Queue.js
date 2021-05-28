import React,{useState, useContext , useEffect} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Naira from 'react-naira'
import {CaretLeft , XCircle} from 'phosphor-react'
import {QueueContext} from '../../Contexts/queueContext'
import './Queue.scss'

const Queue = () => {
    let history =  useHistory()
    
   
    const [queue , setQueue] = useContext(QueueContext)
    const [lsqueue , setLsqueue] = useState()
    let total = queue.reduce( (acc , item) =>  acc + item.total_price , 0)
    
    const removeItem = (indexofitem) =>{
        
        let newQueue = queue.filter((item , index) => index !== indexofitem)
        setQueue(newQueue)
      //  console.log(newQueue , indexofitem)
    }

    useEffect(() => {
        let queues = localStorage.getItem("queues")
        setLsqueue(JSON.parse(queues))
      //  console.log(queues , JSON.parse(queues))
    }, [])
  
    return (
        <div className="queue">
            <div className="queue__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Queue</h5>
            </div>

            <div className="queue__contents">


                {
                   queue?
                   queue.map( (item , index) =>
                    <>
                    <div key={index} onClick={() => removeItem(index)} className="queue__cancel">
                    <XCircle size={20} color="red" weight="fill" />
                    </div>
                    <div className="queue__content">
             
                    <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.total_item} items purchased</p>
                    </div>
                    <h5><Naira>{item.total_price}</Naira></h5>
                     </div>
                     </>
                    )
                   :
                   ''
                }
             

             <div className="queue__content total">
                 
                 <div>
                 <h3>Total Amount</h3>
                 </div>
                 <h5><Naira>{total}</Naira></h5>
             </div>
             
             </div>
         
             <Link to={`/pay?amount=${total}`}> <button className="checkout">Checkout</button></Link> 
             <p className="paylater">Spread payments(1 - 12months) <Link to={`/recurr?amount=${total}`}><span style={{color:"green"}}>here</span></Link></p>
        </div>
    )
    }

export default Queue;
