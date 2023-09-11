import { createSlice } from "@reduxjs/toolkit";

export const photosNextSlice = createSlice({
    name: 'photosNext',
    initialState: null,
    reducers: {
        updatePhotosNext: (state, action)=>{
            return action.payload
        }
    }
})

export const {updatePhotosNext} = photosNextSlice.actions
export default photosNextSlice.reducer