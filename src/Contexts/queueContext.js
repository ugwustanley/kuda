import React, { useState , createContext, useEffect } from 'react'


// Fetch context
export const QueueContext = createContext();

export const QueueProvider = (props) =>{
   
 const   [queue , setQueue] =  useState([
    
 ])
 useEffect(() => {
    let localstoragequeue = localStorage.getItem("queues")
   
       setQueue(JSON.parse(localstoragequeue))
  
  }, [])

 useEffect(() => {
  
     
    localStorage.setItem("queues" , JSON.stringify(queue))
   
 
 }, [queue])

 
    return(
        <QueueContext.Provider value = {[queue , setQueue]}>
            {props.children}
        </QueueContext.Provider>
    )
} 