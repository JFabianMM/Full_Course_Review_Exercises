import { createSlice } from "@reduxjs/toolkit";

const chartDataSlice = createSlice({
    name: 'chartData',
    initialState: [],
    reducers: {
        updateChartData: (state, action)=>{
            return action.payload
        }
    }
});

export const {updateChartData} = chartDataSlice.actions
export default chartDataSlice.reducer