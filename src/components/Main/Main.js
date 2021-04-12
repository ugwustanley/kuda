import React from 'react'
import {Link , BrowserRouter as Router  , Route , useHistory} from 'react-router-dom'
import Payments from '../Payments/Payments'
import Budget from '../Budget/Budget'
import Addbank from '../Addbank/Addbank'
import Account from '../Account/Account'
import Referral from '../Referral/Referral'
import Rewards from '../Rewards/Rewards'
import Bonuses from '../Bonuses/Bonuses'
import Balance from '../Balance/Balance'
import Cashback from  '../Cashback/Cashback'
import Paypage from '../Paypage/Paypage'
import Vendor from '../Vendor/Vendor'
import Cards from '../Cards/Cards'
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import Pay from '../Pay/Pay'
import Kin from '../Kin/Kin'
import CreateProduct from '../CreateProduct/CreateProduct'
import More from '../More/More'
import Menu from '../Menu/Menu'
import Login from '../Login/Login'
import Recurr from '../Recurr/Recurr'
import Signup from "../Signup/Signup"
import Request from '../Request/Request'
import Settings from '../Settings/Settings'
import Updatekyc from '../Updatekyc/UpdateKyc'
import Withdraw from '../Withdraw/Withdraw'
import Transpass from '../Transpass/Transpass'
import ChangePass from '../ChangePass/ChangePass'
import Notification from '../Notification/Notification'

import  './Main.scss'

const Main = () => {
    
    return (
        <div className="main">
            <Router>

                <Route exact path='/'  component={Home} />
                <Route exact path='/payments'  component={Payments} />
                <Route exact path='/budget'  component={Budget} />
                <Route exact path='/card' component={Cards} />
                <Route exact path='/more' component={More} />
                <Route exact path='/kin' component={Kin} />
                <Route exact path="/addbank" component={Addbank} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/setting' component={Settings} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/request' component={Request} />
                <Route exact path='/referral' component={Referral} />
                <Route exact path='/recurr' component={Recurr} />
                <Route exact path='/withdraw' component={Withdraw} />
                <Route exact path='/bonuses' component={Bonuses} />
                <Route exact path='/balance' component={Balance} />
                <Route exact path='/Create' component={CreateProduct} />
                <Route exact path='/rewards' component={Rewards} />
                <Route exact path='/changepass' component={ChangePass} />
                <Route exact path='/transpass' component={Transpass} />
                <Route exact path='/paypage' component={Paypage} />
                <Route exact path='/vendor' component={Vendor} />
                <Route exact path='/cashback' component={Cashback} />
                <Route exact path='/updatekyc' component={Updatekyc} />
                <Route exact path="/notification" component={Notification} />
                 <Route exact path="/pay" component={Pay} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path={['/' , '/payments', '/budget', '/card' , '/more', '/setting' , '/account']} component={Menu} />
               
            </Router>
            
        </div>
    )
}

export default Main;
