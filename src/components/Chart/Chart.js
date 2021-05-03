import React, {useState} from 'react'
import ChartBody from '../ChartBody/ChartBody'
import "./Chart.scss"

const Chart = () => {
    const [data1 , setData1] = useState([50, 75, 31,29,77,42,67])
    const [data2 , setData2] = useState([42, 83, 39,54,23,42,30])
    const [data3 , setData3] = useState([39, 30, 56, 47,51,39,72])
    const [data4 , setData4] = useState([84, 67, 64,48,53,47,77])
    return (
        <div className="chart">
            <ChartBody current={data1} current2={data2} current3={data3} current4={data4} />
        </div>
    )
}

export default Chart
