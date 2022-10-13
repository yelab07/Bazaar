import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/products.model";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com` }),
  endpoints: (builder) => ({
    productSample: builder.query<Product[], void>({
      query: () => "/products?limit=4",
    }),
    productsCategory: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    products: builder.query<Product[], void>({
      query: () => "/products",
    }),
    product: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
    productsInCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const {
  useProductsCategoryQuery,
  useProductSampleQuery,
  useProductsQuery,
  useProductQuery,
  useProductsInCategoryQuery,
} = productsApi;
