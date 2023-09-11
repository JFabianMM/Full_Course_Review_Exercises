import { configureStore } from '@reduxjs/toolkit'
import imagesListReducer from '../features/imagesList/imagesListSlice';
import pagesReducer from '../features/pagesList/pagesSlice';
import photosNextReducer from '../features/photosNext/photosNextSlice';
import {apiReducer} from '../api/apiSlice';

export const store = configureStore({
    reducer: {
        imagesList: imagesListReducer,
        pages: pagesReducer,
        photosNext: photosNextReducer,
        api:apiReducer.reducer,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({}).concat([
        apiReducer.middleware
    ])
})