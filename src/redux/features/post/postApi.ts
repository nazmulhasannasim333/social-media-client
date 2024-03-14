import { baseApi } from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allPost: builder.query({
      query: () => ({
        url: "posts/get-all-posts",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    createPost: builder.mutation({
      query: (postData) => ({
        url: "posts/create-post",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useAllPostQuery, useCreatePostMutation } = postApi;
