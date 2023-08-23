import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";

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

const LineChart = ({yValues, xLabels, label}) => {

 let myData = {
     labels: xLabels,
     datasets: [
         {
             label: label,
             data: yValues, 
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
             type: 'linear',
             min:0,
         },
         x : {
             ticks : { color: 'blue'},
             max: 100                  // This line limits to maximum 100 data points
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

LineChart.propTypes ={
    yValues: PropTypes.array,
    xLabels: PropTypes.array,
    label: PropTypes.string
}
export default LineChart;
