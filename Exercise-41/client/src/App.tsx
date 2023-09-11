import './App.css';
import { startChannel } from './modules/chartData';
import { useSelector } from "react-redux";
import {connect} from 'react-redux';
import LineChart from './components/LineChart/LineChart';
import { useEffect } from 'react';

function App(props:any) {
  const {startChannel} = props;
  const chartData = useSelector((state:any) => state.dataReducer);

  let profits:any=[];
  let months:any=[];

  chartData.chartData.map((chart:any) => {
    for (let i=0; i<chart.months.length; i++){
      profits.push(chart.profits[i]);
      months.push(chart.months[i]);
    }
  })

  let myData = {
    labels: months,
    datasets: [
        {
            label: 'Profits',
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

    useEffect(() => {
    startChannel();
  }, []);

  return (
        <LineChart data={myData} options={myoptions}/>
  );
}

const mapStateToProps = (state: any) => ({
});

export default connect(mapStateToProps, {startChannel})(App);
