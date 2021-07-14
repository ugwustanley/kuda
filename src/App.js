import React from 'react';
import Main from './components/Main/Main'
import AdminDash from './components/AdminDash/AdminDash'
import OrgDash from './components/OrgDash/OrgDash'
import Dashboard2 from './components/Dashboard2/Dashboard2'
import Dashboard from './components/Dashboard/Dashboard'
import {Link , BrowserRouter as Router  , Route , useHistory, withRouter} from 'react-router-dom'
import './App.css'

class App extends React.Component{
   
  path(path){
    return this.props.location.pathname === path 
  }
  render(){
    console.log(this.props.location.pathname)
      return (
        <div className="app">
          
            <Route exact path="/admindash" component={AdminDash}/>
            <Route exact path="/orgdash" component={OrgDash}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/dashboard2" component={Dashboard2}/>
            {this.path("/admindash") || this.path("/orgdash") || this.path("/dashboard") || this.path("/dashboard2") ? null : <Main />}
            
         
          
        </div>      
      );
    }
    
    
}
export default withRouter(App);