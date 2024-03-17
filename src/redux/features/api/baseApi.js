import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => "/tasks",
    }),
    updateStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks-patch/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
    }),
  }),
});
export const { useGetTaskQuery, useUpdateStatusMutation, useAddTaskMutation } =
  baseApi;

export default baseApi;
