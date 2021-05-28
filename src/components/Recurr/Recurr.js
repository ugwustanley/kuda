import React,{useState , useEffect} from 'react'
import {useHistory , Link} from 'react-router-dom'
import {CaretLeft} from 'phosphor-react'
import queryString from 'query-string'
import Naira from 'react-naira'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Recurr.scss'

const Recurr = ({location}) => {
// <input name="amount" onChange={(e) => setTamt(e.target.value)} type="tel" defaultValue="" id="amount" className={isfilled === false ? `fail amount` :`amount` } />
    let option1 = [
        `1`, `2`, `3` ,`4`  ,`5` , `6` , `7`,`8`,`9`,`10`,`11`,`12`
      ];

    let defaultOption1 = option1[0];

    let option2 = [
        `Daily`,'Weekly',"Monthly"
      ];
    let defaultOption2 = option2[0];

    let history =  useHistory()

    const [show , setShow] = useState(false)
    const [ accname , setAccname] = useState("")
    const [ acc , setAcc] = useState("")
    const [ tamt , setTamt] = useState("")
    const [ cyc , setCyc] = useState("Daily")
    const [ acyc , setAcyc] = useState(0)
    const [ ncyc , setNcyc] = useState(1)
    const [total , setTotal] = useState(0)
    const [ date , setDate] = useState("")
    const [ isfilled , setIsfilled] = useState(true)
    let query = queryString.parse(location.search)
    

    useEffect(() => {
      if(query.amount){
        setTotal(query.amount)
        setAcyc( query.amount / ncyc)
        console.log(query)
        
      }
    }, [query])

    const handleValidation = (e) =>{
      if(accname === "" || cyc === "" || date === ""  ||
       acyc === "" ) {
        e.preventDefault() 
        setIsfilled(false)
        
      } else{
          setShow(true)
      }
    }
    const returnMinDate = () =>{
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      if(month < 10){
        
          return `${year}-0${month}-${day}`
      }
      if(day < 10 ){
          return `${year}-${month}-0${day}`
      }
      return `${year}-${month}-${day}`
  }
    //               <input name="Phone" min="1"  type="number" defaultValue="" id="Phone" class="Phone"></input>
    return (
        <div className="recurr">
            <div className="recurr__heading">
                <div onClick={history.goBack} >               
                        <CaretLeft size={20} weight="bold" />           
                 </div>
                <h5>Recurring Payment</h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                 <label for="Phone">Account number/$Mobme handle</label>
                 <input name="Phone" onChange={(e) => setAccname(e.target.value)} type="text" defaultValue="" id="Phone" className={isfilled === false ? `fail phone` :`phone` }></input>

              
                  
                 

                 <label for="cycle">Cycle of payment</label>
  
                 
                 <div  className={isfilled === false ? `fail phone dropdown` :`phone dropdown` }>
                   <Dropdown options={option2} onChange={(e) => setCyc(e.value) } value={defaultOption2}  menuClassName='dropdown__menu' controlClassName='dropdown__box'  />    
                 </div>
                 <label for="ncycle">Number of cycle(s)</label>
  
                 
                 <div  className={isfilled === false ? `fail dropdown` :`dropdown` }>
                   <Dropdown options={option1} onChange={(e) =>{ setNcyc(e.value) ; setTotal(e.value * acyc)}} value={defaultOption1}  menuClassName='dropdown__menu' controlClassName='dropdown__box'  />    
                 </div>

                 <label for="amount">Amount per cycle</label>
                {query.amount?
                 <input disabled name="amount" onChange={(e) => {setAcyc(e.target.value) ; setTotal(ncyc * e.target.value)}} type="tel" value={acyc} id="amount" className={isfilled === false ? `fail amount` :`amount` } />
                :
                <input name="amount" onChange={(e) => {setAcyc(e.target.value) ; setTotal(ncyc * e.target.value)}} type="tel" value={acyc} id="amount" className={isfilled === false ? `fail amount` :`amount` } />}

                 <p className="total">Total Amount: <Naira>{total}</Naira></p>
                
                
                 <label for="date">Commencement Date</label>
              {query.amount?
                 <input name="date" onChange={(e) => setDate(e.target.value)}  type="date" defaultValue="" id="date" className={isfilled === false ? `fail date` :`date` } />
                :
                <input name="date" onChange={(e) => setDate(e.target.value)}  type="date" defaultValue="" id="date" className={isfilled === false ? `fail date` :`date` } />}

                 <input onClick={ (e) => handleValidation(e)} name="save" type="submit" value="Make Payment" id="save" className="save" />
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

export default Recurr;
