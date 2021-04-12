import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import { ChartPieSlice,Car, Spinner, ArrowsLeftRight , DotsNine , House , PaperPlaneTilt, CreditCard, FirstAidKit} from 'phosphor-react'
import More from './images/button-of-nine-outlined-circles.svg'
import './Menu.scss'

const Menu = () => {
    const [activebtn , setActivebtn] = useState(1)
    const [weight , setWeight] = useState('regular')
    const  ActivateIcon = (e) =>{
           setActivebtn(e)
     }

    return (
        <div className="menu" >
            
            <Link to='/' className='link' style={ activebtn === 1 ? {color: "#301a96"} : {color:"gray"}} onClick={() => ActivateIcon(1)} >
                 <House className="menu__icon" size={30} weight= { activebtn === 1 ? "fill" : "regular"} />
                 <p>Home</p>
            </Link>
            <Link to='./payments' className='link'style={ activebtn === 2 ? {color: "#301a96"} : {color:"gray"}} onClick={() => ActivateIcon(2)}>
                 <ArrowsLeftRight className="menu__icon menu__iconPayment" size={30} weight= { activebtn === 2 ? "bold" : "regular"} />
                 <p>Payments</p>

            </Link>
            <Link to='./budget' className='link' style={ activebtn === 3 ? {color: "#301a96"} : {color:"gray"}} onClick={() => ActivateIcon(3)} >
                 
                 <Car className="menu__icon menu__iconBudget" size={30} weight= { activebtn === 3 ? "bold" : "regular"} />
                 <p>Autorand</p>
            </Link>
            <Link to='./card' className='link' style={ activebtn === 4 ? {color: "#301a96"} : {color:"gray"}} onClick={() => ActivateIcon(4)} >
                 <FirstAidKit className="menu__icon"   size={30} weight= { activebtn === 4 ? "fill" : "regular"}  />
                 <p>Bsure</p>
            </Link>
            <Link to='./account' className='link' style={ activebtn === 5 ? {color: "#301a96"} : {color:"gray"}} onClick={() => ActivateIcon(5)} >
                <DotsNine className="menu__icon" size={30} weight= { activebtn === 5 ? "bold" : "regular"}  />
                 <p>More</p>
            </Link>
            
        </div>
    )
}

export default Menu
