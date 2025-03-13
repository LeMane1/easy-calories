import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from './key'
import { IProduct } from './types'

interface IResponse {
  items: IProduct[];
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.calorieninjas.com/',
    prepareHeaders: (headers) => {
      headers.set('X-Api-Key', API_KEY)
      return headers
    },
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProductsInfo: builder.query<IProduct[], string>({
      query: (query) => ({
        url: `v1/nutrition?query=${query}`,
        method: 'GET',
      }),
      transformResponse: (response: IResponse) => response.items,
      providesTags: ['Products'],
    }),
  }),
})

export const { useLazyGetProductsInfoQuery } = api