import React from 'react'
import {Link , BrowserRouter as Router  , Route} from 'react-router-dom'
import Payments from '../Payments/Payments'
import Budget from '../Budget/Budget'
import Cards from '../Cards/Cards'
import Home from '../Home/Home'
import More from '../More/More'
import Menu from '../Menu/Menu'

import  './Main.scss'

const Main = () => {
    return (
        <div className="main">
            <Router>
                <Route  path='/' exact component={Home} />
                <Route  path='/payments' exact component={Payments} />
                <Route  path='/budget' exact component={Budget} />
                <Route exact path='/card' component={Cards} />
                <Route exact path='/more' component={More} />
                <Menu />
            </Router>
            
        </div>
    )
}

export default Main
