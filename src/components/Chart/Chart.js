import React, {useState , useEffect} from 'react'
import ChartBody from '../ChartBody/ChartBody'
import "./Chart.scss"

const Chart = ({content}) => {
    const [data1 , setData1] = useState([50, 75, 31,29,77,42,67])
    const [data2 , setData2] = useState([42, 83, 39,54,23,42,30])
    const [data3 , setData3] = useState([39, 30, 56, 47,51,39,72])
    const [data4 , setData4] = useState([84, 67, 64,48,53,47,77])
    let data = content.map( one => one.data)
    let name = content.map( one => one.name)
    const [incoming , setIncoming] = useState(data[0])
   useEffect(() => {
      if(incoming !== data[0]){
          setIncoming(data[0])
      }
   }, [content])
    return (
        <div className="chart">

            {incoming !== data[0] ?  <h1>uihellow helow </h1> :  <ChartBody content={content} name={name} />  }


            
        </div>

    )
}

export default Chart
