import React from 'react';
import {connect} from 'react-redux';
import {startChannel} from '../modules/chartData';
import LineChart from './LineChart/LineChart';
import { useEffect } from 'react';

import { useSelector } from "react-redux";

const Frame = (props) => {
  const {startChannel} = props;
  const chartData = useSelector((state) => state.dataReducer);

  useEffect(() => {
    startChannel();
  }, []);
 

  let profits=[];
  let months=[];

  chartData.chartData.map((chart) => {
    for (let i=0; i<chart.months.length; i++){
      profits.push(chart.profits[i]);
      months.push(chart.months[i]);
    }
  })

  return (
    <div style={{display: 'flex', width: '400px', justifyContent: 'space-between'}}>
        <LineChart yValues={profits} xLabels={months} label={'Profits'}/>
    </div>
  );
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {startChannel})(Frame);
