import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/products.model";
export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com` }),
    endpoints: (builder) => ({
        products: builder.query<Product[], void>({
            query: () => '/products'
        }),
        product: builder.query<Product, string>({
            query: (id) => `/products/${id}`
        })
    })
})

<<<<<<< HEAD
export const { useProductsQuery, useProductQuery } = productsApi
=======
export const { useProductsCategoryQuery, useProductSampleQuery, useProductsQuery, useProductQuery } = productsApi
>>>>>>> development
