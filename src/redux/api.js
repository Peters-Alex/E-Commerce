// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        register: builder.mutation({
            query: (registerUser) => ({
                url: "/users",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(registerUser)
            }),
        }),
        login: builder.mutation({
            query: (loginUser) => ({
                url: "/auth/login",
                method: "POST",
                body: loginUser,
            }),
        }),
        products: builder.query({
            query: () => ({
                url: "/products",
            }),
        }),
        singleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`
            }),
        }),
    }) 
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useRegisterMutation, useLoginMutation, useProductsQuery, useSingleProductQuery} = apiSlice;
