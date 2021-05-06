import React , {useState , useEffect} from 'react'
import {Line , Bar, Doughnut } from 'react-chartjsx'

const ChartBody = ({content, name}) => {

    let datas = content.map( one => one.data)
      //states for displayed dataset
      //const [curr , setCurr] = useState(current)
  
      //labels state for the chart label
      const [labels, setLabels] = useState(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"])
      const [incoming , setIncoming] = useState(datas[0])
      //initial chart data state
      
     
      const [dataset , setDataset] = useState( 
        [{ 
      data: datas[0],
      label: name[0] || "", 
      borderColor: "rgba(153, 50, 204, 9.5)", 
      strokeWidth:10,
      pointBackgroundColor:"rgba(153, 50, 204, 5.5)",
      fill: true ,
      borderWidth:1.5,
     
      },{ 
        data: datas[1],
        label: name[1] || "", 
        borderColor: "rgba(210, 105, 30, 0.349)", 
        strokeWidth:10,
        pointBackgroundColor:"chocolate",
        fill: true,
        borderWidth:1.5,
       
    }
     ,
     { 
            data: datas[2],
            label: name[2] || "null", 
            borderColor: "rgba(255, 140, 0, 0.39)", 
            strokeWidth:10,
            pointBackgroundColor:"darkorange",
            fill: true ,
            borderWidth:1.5,
            
     },
     { 
        data: datas[3],
        label: name[3] || "", 
        borderColor: "rgba(137, 43, 226, 0.404)", 
        strokeWidth:10,
        pointBackgroundColor:"blueviolent",
        fill: true ,
        borderWidth:1.5,
       
    },
    { 
        data: datas[4],
        label: name[4] || '', 
        borderColor: "rgba(137, 43, 226, 0.404)", 
        strokeWidth:10,
        pointBackgroundColor:"blueviolent",
        fill: true ,
        borderWidth:1.5,
       
    }
  ] 
  ) 

  
  if(incoming !== datas[0]){
    setDataset(dataset)
}
  
useEffect(() => {
    if(incoming !== datas[0]){
        console.log(datas[0])
        setIncoming(datas[0])
        let newdataset = dataset.splice( datas.length , 20)
        setDataset(newdataset)
     
    }}, [datas[0]])

 
let newdataset = dataset.splice( datas.length , 20)
console.log( newdataset , datas.length)
  //chart options and customizations
  const chartOptions = { 
      maintainAspectRatio:false,
      aspectRatio:2,
      responsive:true,
      beizerCurve:false,
      pointHitDetectionRadius: 100,
      datasetStrokeWidth:100,
  }
  
  
  
    return (
        <div className="chartbody">

{
         datas[0] !== undefined?
         <Bar
         style={{height:'900px'}}
         width ={800}
         height = {320}
         options={chartOptions} 
         data={{labels: labels , datasets : dataset}} />
         :null
}
         

        </div>
    )
}

export default ChartBody
