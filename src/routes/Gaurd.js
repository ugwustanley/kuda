import React from 'react'
import {useHistory , Redirect} from 'react-router-dom'

export default function Guard(props) {

    const token = localStorage.getItem("token");
    const history = useHistory()
    

    console.log(window.location.href);
    
    if (!token) {
    
      return <Redirect to="/login" />
    }
   else{
    return <>
        {props.children}
    </>
   }

}



