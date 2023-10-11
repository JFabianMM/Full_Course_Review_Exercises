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

const LineChart = ({data, options}) => {
  return (
    <div style={{display: 'flex', width: '600px', justifyContent: 'space-between'}}>
        
        <Line data={data} options={options} aria-label="Exercise 41 Chart"/>    
    </div>    
  );
};

LineChart.propTypes ={
    data: PropTypes.object,
    options: PropTypes.object
}
export default LineChart;
