import React, { useEffect, useState } from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from './PieChart';
import { useHttp } from '../Hooks/http.hook';


const Balance = () => {

    const [chartData, setChartData] = useState([]);

    const {request} = useHttp()

    useEffect(() => {
        request(
			"http://localhost:7777/users",
			"GET",
		).then((res) => {
			console.log(res);
			
		}); 
    }, [])
    


  return (
    <div>
        <h1>Balance</h1>
        <div className="w-[233px]">
            {/* <PieChart chartData={chartData} /> */}
        </div>
    </div>
  )
}

export default Balance