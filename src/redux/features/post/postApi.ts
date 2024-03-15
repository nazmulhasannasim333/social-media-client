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
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/delete-post/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
    updatePost: builder.mutation({
      query: (post) => {
        console.log(post);
        return {
          url: `posts/update-post/${post.postId}`,
          method: "PUT",
          body: post.postText,
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useAllPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
