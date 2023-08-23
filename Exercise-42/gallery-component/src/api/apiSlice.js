import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiReducer = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.slingacademy.com/v1/sample-data"
    }),
    endpoints: (builder) =>({
        getItems: builder.query({
            query: (page) => `/photos?offset=${page}&limit=10`
        }),
    })
})

export const {useGetItemsQuery} =apiReducer