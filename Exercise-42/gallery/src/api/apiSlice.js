import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiReducer = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),
    endpoints: (builder) =>({
        getItems: builder.query({
            query: (page) => `/gallery/${1}/?count=10&page=${page}`
        }),
    })
})

export const {useGetItemsQuery} =apiReducer