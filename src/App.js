import React from 'react';
import Main from './components/Main/Main'
import AdminDash from './components/AdminDash/AdminDash'
import {Link , BrowserRouter as Router  , Route , useHistory, withRouter} from 'react-router-dom'
import './App.css'

class App extends React.Component{

  render(){
    console.log(this.props.location.pathname)
      return (
        <div className="app">
          
            <Route exact path="/admindash" component={AdminDash}/>
            {this.props.location.pathname === "/admindash"? <p></p> : <Main />}
            
         
          
        </div>      
      );
    }
    
    
}
export default withRouter(App);