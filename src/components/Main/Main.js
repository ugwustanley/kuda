import React from 'react'
import {Link , BrowserRouter as Router  , Route , useHistory} from 'react-router-dom'

import Authentication from '../../routes/authentication'
import Guard from '../../routes/Gaurd'

import Payments from '../Payments/Payments'
import Budget from '../Budget/Budget'
import Addbank from '../Addbank/Addbank'
import Account from '../Account/Account'
import Referral from '../Referral/Referral'
import Rewards from '../Rewards/Rewards'
import CategoryTwo from '../CategoryTwo/Category'
import Bonuses from '../Bonuses/Bonuses'
import Loading from '../Loading/Loading'
import ShopDetailsHotel from '../ShopDetailsHotel/ShopDetailsHotel'
import Balance from '../Balance/Balance'
import Cashback from  '../Cashback/Cashback'
import Paypage from '../Paypage/Paypage'
import Vendor from '../../pages/Vendor/Vendor'
import Failed from '../Failed/Failed'
import ProductDetail2 from '../ProductDetail2/ProductDetail2'
import SwitchOrg from '../SwitchOrg/SwitchOrg'
import AddVehicle from '../AddVehicle/AddVehicle'
import Sales from '../Sales/Sales'
import Managestaff from '../Managestaff/Managestaff'
import Success from '../../pages/Success/Success'
import TransactionDetail from '../../pages/TransactionDetail/TransactionDetail'
import Cards from '../Cards/Cards'
import AddVehicle2 from '../AddVehicle2/AddVehicle2'
import ShopDetails from '../ShopDetails/ShopDetails'
import Home from '../Home/Home'
// import Dashboard from '../Dashboard/Dashboard'
import Shop from '../Shop/Shop'
import Routine from '../Routine/Routine'
import Category from '../Category/Category'
import Dashboard2 from '../Dashboard2/Dashboard2'
import Pay from '../Pay/Pay'
import Summary from '../../pages/Summary/Summary'
import Rate from '../Rate/Rate'
import ShopDetails2 from '../ShopDetails2/ShopDetails2'
import Kin from '../Kin/Kin'
import Summary2 from '../../pages/Summary2/Summary2'
import CreateProduct from '../CreateProduct/CreateProduct'
import More from '../More/More'
import Expense from '../Expense/Expense'
import Payroll2 from '../Payroll2/Payroll2'
import Menu from '../Menu/Menu'
import Payroll from '../Payroll/Payroll'

import Recurr from '../Recurr/Recurr'
import Transaction from '../../pages/Transaction/Transaction'

import ShopDetails3 from '../ShopDetails3/ShopDetails3'
import Admin from '../Admin/Admin'
import Adminorg from '../Adminorg/Adminorg'
import Queue from '../Queue/Queue'
import Request from '../Request/Request'
import ComingSoon from '../ComingSoon/ComingSoon'
import Book from '../Book/Book'
import CreateShop from '../CreateShop/CreateShop'
import BookMec from '../BookMec/BookMec'
import Display from '../Display/Display'
import ProductDetail from '../ProductDetail/ProductDetail'
import Settings from '../Settings/Settings'
import Updatekyc from '../../pages/Updatekyc/UpdateKyc'
import Withdraw from '../../pages/Withdraw/Withdraw'
import Transpass from '../Transpass/Transpass'
import ChangePass from '../ChangePass/ChangePass'
import Notification from '../Notification/Notification'

import  './Main.scss'

const Main = () => {
    
    return (
        <div className="main">
          
                <Authentication />

            
                <Route exact path='/'  component={Home} />
          
                <Route exact path='/payments'  component={Payments} />
                <Route exact path='/budget'  component={Budget} />
                <Route exact path='/SwitchOrg'  component={SwitchOrg} />
                <Route exact path='/card' component={Cards} />
                <Route exact path='/summary' component={Summary} />
                <Route exact path='/summary2' component={Summary2} />
                <Route exact path='/managestaff' component={Managestaff} />
                <Route exact path='/comingsoon' component={ComingSoon } />
                <Route exact path='/more' component={More} />
                <Route exact path='/queue' component={Queue} />
                <Route exact path='/productdetail' component={ProductDetail} />
                <Route exact path='/shopdetailshotel' component={ShopDetailsHotel} />
                <Route exact path='/createshop' component={CreateShop} />
                <Route exact path='/kin' component={Kin} />
                <Route exact path='/display1' component={Display} />
                <Route exact path="/addbank" component={Addbank} />
                <Route exact path="/productdetail2" component={ProductDetail2} />
                <Route exact path="/rate" component={Rate} />
                <Route exact path="/transactionDetail" component={TransactionDetail} />
                {/* <Route exact path='/login' component={Login} /> */}
                <Route exact path='/addvehicle2' component={AddVehicle2} />
                <Route exact path='/routine' component={Routine} />
                <Route exact path='/expense' component={Expense} />
                <Route exact path='/book' component={Book} />
                <Route exact path='/bookmec' component={BookMec} />
                <Route exact path='/sales' component={Sales} />
                <Route exact path='/loading' component={Loading} />
                <Route exact path='/shopdetails' component={ShopDetails} />
                <Route exact path='/shopdetailstwo' component={ShopDetails2} />
                <Route exact path='/shopdetailsthree' component={ShopDetails3} />
                {/* <Route exact path='/dashboard' component={Dashboard} /> */}
                {/* <Route exact path='/dashboard2' component={Dashboard2} /> */}
                {/* <Route exact path='/signup' component={Signup} /> */}
                <Route exact path='/categorytwo' component={CategoryTwo} />
                <Route exact path='/setting' component={Settings} />
                <Route exact path='/transaction' component={Transaction} />
                <Route exact path='/addvehicle' component={AddVehicle} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/request' component={Request} />
                <Route exact path='/payroll2' component={Payroll2} />
                <Route exact path='/referral' component={Referral} />
                <Route exact path='/recurr' component={Recurr} />
                <Route exact path='/failed' component={Failed} />
                <Route exact path='/success' component={Success} />
                <Route exact path='/Admin' component={Admin} />
                <Route exact path='/Adminorg' component={Adminorg} />
                <Route exact path='/withdraw' component={Withdraw} />
                <Route exact path='/bonuses' component={Bonuses} />
                <Route exact path='/payroll' component={Payroll} />
                <Route exact path='/balance' component={Balance} />
                <Route exact path='/Create' component={CreateProduct} />
                <Route exact path='/rewards' component={Rewards} />
                <Route exact path='/changepass' component={ChangePass} />
                <Route exact path='/category' component={Category} />
                <Route exact path='/transpass' component={Transpass} />
                <Route exact path='/paypage' component={Paypage} />
                <Route exact path='/vendor' component={Vendor} />
                <Route exact path='/cashback' component={Cashback} />
                <Route exact path='/updatekyc' component={Updatekyc} />
                <Route exact path="/notification" component={Notification} />
                 <Route exact path="/pay" component={Pay} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path={['/' , '/payments', '/budget', '/card' , '/more', '/setting' , '/account']} component={Menu} />
            
           
            
        </div>
    )
}

export default Main;
