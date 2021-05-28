import React,{useState} from 'react'

const Timer = () => {

    const [sec , setSec] = useState(0)
    const [min , setMin] = useState(0)
    const [hr , setHr] = useState(0)
    const [days , setDays] = useState(0)
   
   
    
    let timeinterval = setInterval(() => {
        let date = new Date()
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let seconds = date.getSeconds()
        if(day && hour && minute && seconds){
            let reseconds = 60 - seconds 
            let reminute = 60 - minute 
            let rehour =  24 - hour
            let redays = 19 - day
            setSec(reseconds)
            setMin(reminute)
            setHr(rehour)
            setDays(redays)
            
          
             if(redays <= 0 ){
                 stopTImer() 
                 
             }
        }
    } , 1000)

   function stopTImer(){

      if( days < 0){

      console.log(days)
      }
   }

   stopTImer()
    return (
       
      <div  className="timer">

             <div className="days">
                <h5>{days}</h5>
                <h6>Days</h6>
             </div>

             <div className="days">
                <h5>{hr}</h5>
                <h6>Hours</h6>
             </div>

             <div className="days">
                <h5>{min}</h5>
                <h6>Minutes</h6>
             </div>

             <div className="days">
                <h5>{sec}</h5>
                <h6>Seconds</h6>
             </div>
             
     </div>
                           
    )
}

export default Timer
