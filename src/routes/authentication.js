import React from 'react'
import {Link , BrowserRouter as Router  , Route , useHistory} from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../pages/Signup/Signup'

const Authentication = () => {
    return (
        <div>
            <Route exact path="/login" >
                <Login />
            </Route> 

            <Route exact path="/signup" >
                <Signup />
            </Route> 
        </div>
    )
}

export default Authentication
