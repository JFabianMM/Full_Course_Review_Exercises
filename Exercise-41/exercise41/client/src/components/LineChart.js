import React from 'react';
import {connect} from 'react-redux';
import {startChannel, stopChannel} from '../modules/chartData';

import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,  
  Tooltip, 
  Legend,
  Filler,
  ArcElement 
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,  
  Tooltip, 
  Legend,
  Filler,
  ArcElement
);

const LineChart = (props) => {
  const {startChannel} = props;
  let profits=[];
  let months=[];
  const chartData = useSelector((state) => state.dataReducer);

  chartData.chartData.map((chart) => {
    if (chart.months.length>99){
        chart.months = chart.months.slice(0, 99);
        chart.profits = chart.profits.slice(0, 99);
    }
    for (let i=0; i<chart.months.length; i++){
      profits.push(chart.profits[i]);
      months.push(chart.months[i]);
    }
  })
  startChannel();
 let myData = {
     labels: months,
     datasets: [
         {
             label: 'profits',
             data: profits, 
             tension: 0.5,
             fill : false,
             borderColor: 'rgb(255, 99, 132)',
             backgroundColor: 'rgba(255, 99, 132)',
             pointRadius: 5, 
             pointBorderColor: 'rgba(255, 99, 132)',
             pointBackgroundColor: 'rgba(255, 99, 132)',
         },
     ],
 };
 
 let myoptions={
     scales : {
         y : {
             min:0
         },
         x : {
             ticks : { color: 'blue'}
         }
     },
     plugins: {
         legend: {
             display : true
         }
     }
 };
 
  return (
    <div style={{display: 'flex', width: '400px', justifyContent: 'space-between'}}>
        <Line data={myData} options={myoptions}/>
    </div>
  );
};

const mapStateToProps = state => ({
  serverStatus: state.dataReducer.serverStatus,
  channelStatus: state.dataReducer.channelStatus,
});

export default connect(mapStateToProps, {startChannel, stopChannel})(LineChart);
