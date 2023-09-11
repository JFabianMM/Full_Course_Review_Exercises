import LineChart from "./LineChart";

  let profits=[0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
  let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];


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

export default {
    title: "components/LineChart",
    component: LineChart,
};

const Template = () => <LineChart data={myData} options={myoptions} />;

export const Primary = Template.bind({});