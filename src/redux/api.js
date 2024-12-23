import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
  tagTypes: ['User', 'Product'],
  endpoints: (builder) => ({

    // user api
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['User']
    }),
    getUserByEmail: builder.query({
      query: (email) => `/users/${email}`,
      providesTags: ['User']
    })
  })
})

export const {useCreateUserMutation, useGetUserByEmailQuery} = apiSlice
