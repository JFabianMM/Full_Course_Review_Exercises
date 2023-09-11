import { createSlice } from "@reduxjs/toolkit";

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: 1,
    reducers: {
        updatePages: (state, action)=>{
            return action.payload
        }
    }
})

export const {updatePages} = pagesSlice.actions
export default pagesSlice.reducer