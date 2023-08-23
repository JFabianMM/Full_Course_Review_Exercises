import { createSlice } from "@reduxjs/toolkit";

export const imagesListSlice = createSlice({
    name: 'imagesList',
    initialState: [],
    reducers: {
        updateImagesList: (state, action)=>{
            return action.payload
        }
    }
})

export const {updateImagesList} = imagesListSlice.actions
export default imagesListSlice.reducer