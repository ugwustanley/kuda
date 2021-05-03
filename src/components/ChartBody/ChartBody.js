import React , {useState} from 'react'
import {Line} from 'react-chartjsx'

const ChartBody = ({current , current2 , current3 , current4}) => {
      //states for displayed dataset
      const [curr , setCurr] = useState(current)
  
      //labels state for the chart label
      const [labels, setLabels] = useState([1,2,3,4,5,6,7])
  
      //initial chart data state
      const [dataset , setDataset] = useState( [{ 
      data: current,
      label: "Total Orders", 
      borderColor: "rgba(153, 50, 204, 9.5)", 
      strokeWidth:10,
      pointBackgroundColor:"rgba(153, 50, 204, 5.5)",
      fill: true ,
      borderWidth:1.5,
     
      },{ 
        data: current2,
        label: "Orders Delivered", 
        borderColor: "rgba(210, 105, 30, 0.349)", 
        strokeWidth:10,
        pointBackgroundColor:"chocolate",
        fill: true,
        borderWidth:1.5,
       
    }
     ,
     { 
            data: current3,
            label: "Orders Recieved", 
            borderColor: "rgba(255, 140, 0, 0.39)", 
            strokeWidth:10,
            pointBackgroundColor:"darkorange",
            fill: true ,
            borderWidth:1.5,
            
     },
     { 
        data: current4,
        label: "New Users", 
        borderColor: "rgba(137, 43, 226, 0.404)", 
        strokeWidth:10,
        pointBackgroundColor:"blueviolent",
        fill: true ,
        borderWidth:1.5,
       
    }
  ] ) 
  
  
 

  //chart options and customizations
  const chartOptions = { 
      maintainAspectRatio:false,
      aspectRatio:2,
      responsive:true,
      beizerCurve:false,
      pointHitDetectionRadius: 100,
      datasetStrokeWidth:10,
  }
  
    return (
        <div className="chartbody">


         <Line 
         style={{height:'900px'}}
         width ={800}
         height = {320}
         options={chartOptions} 
         data={{labels: labels , datasets : dataset}} />
  

        </div>
    )
}

export default ChartBody
