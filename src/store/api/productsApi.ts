import { createApi } from '@reduxjs/toolkit/query/react'
import { setProducts } from 'store/slices'
import { IGetProductsResponse } from 'store/types'
import customFetchBase from './customFetchBase'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: customFetchBase,
  tagTypes: ['Products'],
  endpoints: builder => ({
    getProducts: builder.query<IGetProductsResponse, void>({
      query() {
        return {
          url: '/products.json',
          method: 'GET',
        }
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { products },
          } = await queryFulfilled
          dispatch(setProducts({ products }))
        } catch (error) {
          console.error(error)
        }
      },
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
