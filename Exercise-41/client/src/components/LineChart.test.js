import { render, screen } from '@testing-library/react';
import LineChart from '../components/LineChart/LineChart';
import 'jest-canvas-mock';

let profits= [0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];

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
            title: {
                display: true,
                text: 'Value',
                color: '#191',
                font: {
                  size: 16,
                  style: 'normal',
                },
                padding: {top: 30, left: 0, right: 0, bottom: 0}
            },
        },
        x : {
            ticks : { color: 'blue'},
            max: 100,                  // This line limits to maximum 100 data points
            title: {
                display: true,
                text: 'Month',
                font: {
                  size: 16,
                  weight: 'normal',
                },
            },
        }
    },
    plugins: {
        legend: {
            display : true
        },
        title: {
            display: true,
            text: 'Chart Exercise 41',
            font: {
                size: 20,
              },
        },
    }
};

describe('LineChart component', () =>{
    let exercise41Chart;
    beforeEach(async ()=>{
        render(<LineChart data={myData} options={myoptions}/>);
        exercise41Chart = await screen.findByRole('img', {
            name: 'Exercise 41 Chart',
          });
    })

    test('The chart is in the document', async ()=>{
          expect(exercise41Chart).toBeDefined();
    })
    test('The chart is in the document', async ()=>{
        expect(exercise41Chart).toHaveAttribute("width", "300")
    })
    test('The chart is in the document', async ()=>{
        expect(exercise41Chart).toHaveAttribute("height", "150")
    })
})