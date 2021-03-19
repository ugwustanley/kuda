import React from 'react'
import { Link} from 'react-router-dom'
import { ChartPieSlice , DotsNine , House , PaperPlaneTilt, CreditCard} from 'phosphor-react'
import More from './images/button-of-nine-outlined-circles.svg'
import './Menu.scss'

const Menu = () => {
    return (
        <div className="menu" >
            
            <Link to='/' className='link'>
                 <House className="menu__icon" size={30} />
                 <p>Home</p>
            </Link>
            <Link to='./payments' className='link'>
                 <PaperPlaneTilt className="menu__icon menu__iconPayment" size={30} />
                 <p>Payments</p>

            </Link>
            <Link to='./budget' className='link'>
                 
                 <ChartPieSlice className="menu__icon menu__iconBudget" size={30} />
                 <p>Budget</p>
            </Link>
            <Link to='./card' className='link'>
                 <CreditCard className="menu__icon" size={30} />
                 <p>Card</p>
            </Link>
            <Link to='./More' className='link'>
                <DotsNine className="menu__icon" size={30} />
                 <p>More</p>
            </Link>
            
        </div>
    )
}

export default Menu
