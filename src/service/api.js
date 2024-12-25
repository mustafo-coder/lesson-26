import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    updateProduct: builder.mutation({
      query: (id, body) => ({
        url: `products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title: "hello"}),
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productsApi;
