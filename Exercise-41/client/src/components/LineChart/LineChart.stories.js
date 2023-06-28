import LineChart from "./LineChart";

export default {
    title: "components/LineChart",
    component: LineChart,
    args:{
        yValues: [0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60],
        xLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'],
        label: 'Profits'
    }
};

const Template = (args) => <LineChart {...args} />;

export const Primary = Template.bind({});