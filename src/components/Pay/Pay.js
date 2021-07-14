import React,{useState , useEffect} from 'react'
import {useHistory , Link} from 'react-router-dom'
import Draggable, {DraggableCore} from 'react-draggable';
import queryString from 'query-string'
import {CaretLeft} from 'phosphor-react'
import './Pay.scss'

const Pay = ({ location }) => {

    let query = queryString.parse(location.search)

    

    let history =  useHistory()
    const [show , setShow] = useState(false)
    const [ accname , setAccname] = useState("")
    const [ acc , setAcc] = useState("")
    const [ isfilled , setIsfilled] = useState(true)

    useEffect(() => {
      if(query){
        setAcc(query.amount)
      }
    }, [query])

    const handleValidation = (e) =>{
      if(accname === "" || acc === "" ) {
        e.preventDefault() 
        setIsfilled(false)
      } else{
          setShow(true)
      }
    }
    return (
        <div className="pay">
            <div className="pay__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Pay</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Account number/$Mobme handle</label>
                 <input name="Phone" onChange={(e) => setAccname(e.target.value)} type="text" defaultValue="" id="Phone" className={isfilled === false ? `fail phone` :`phone` }  />

                 <label for="amount">Amount</label>
                 {query.amount?
                  <input disabled name="amount" value={acc} onChange={(e) => setAcc(e.target.value)} type="tel" defaultValue="" id="amount" className={isfilled === false ? `fail amount` :` amount` }  />
                :
                <input name="amount" value={acc} onChange={(e) => setAcc(e.target.value)} type="tel" defaultValue="" id="amount" className={isfilled === false ? `fail amount` :` amount` }  />}
                <label for="draggable">Payment Order (drag to rearrange)</label>
                <div className="draggable">
                    <Draggable
                        axis="y"
                        handle=".handle"
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[2, 2]}
                        scale={1.2}
                        bounds="parent"
                        onStart={(e) => console.log("started")}
                        onDrag={(e) => console.log("dragged" )}
                        onStop={(e) => console.log("stopped" , e)}
                        >
                       <div className="handle">Wallet</div>
                        
                    </Draggable>

                    <Draggable
                        axis="y"
                        handle=".handle"
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[2, 2]}
                        scale={1.2}
                        bounds="parent"
                        onStart={() => console.log("started")}
                        onDrag={() => console.log("dragged")}
                        onStop={() => console.log("stopped")}
                        >
                        <div className="handle">Pay later</div>
                        
                    </Draggable>

                    <Draggable
                        axis="y"
                        handle=".handle"
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[2, 2]}
                        scale={1.2}
                        bounds="parent"
                        onStart={() => console.log("started")}
                        onDrag={() => console.log("dragged")}
                        onStop={() => console.log("stopped")}
                        >
                       
                            <div className="handle">Bank</div>
                        
                        
                    </Draggable>
                </div>

                 <input onClick={ (e) => handleValidation(e)}name="save" type="submit" value="Send" id="save" className="save"/>
            </form>

          { show === false? <p></p>:
           <div className="tag__box" >
           <div className="tag" >
              <p>confirm password to proceed</p>
              <input type="text" name="tag__name" className="tag__name" id="tag_name" />
              <Link to="/">
              <input type="submit" name="create__tag" className="create__tag" value="Confirm" />
              </Link>
           </div>
           </div>}
        </div>
    )
}

export default Pay
