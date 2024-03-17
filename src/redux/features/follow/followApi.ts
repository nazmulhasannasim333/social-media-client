import { baseApi } from "../../api/baseApi";

const followApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllComment: builder.query({
    //   query: (postId: string) => ({
    //     url: `/comments/get-all-comment/${postId}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["comments"],
    // }),
    // totalComments: builder.query({
    //   query: (postId: string) => {
    //     return {
    //       url: `comments/get-total-comment/${postId}`,
    //       method: "GET",
    //     };
    //   },
    //   providesTags: ["comments"],
    // }),
    createFollow: builder.mutation({
      query: (followData) => ({
        url: "/follows/create-follow",
        method: "POST",
        body: followData,
      }),
      invalidatesTags: ["follow"],
    }),
    removeFollow: builder.mutation({
      query: (followData) => {
        return {
          url: `follows/remove-follow/${followData.followingUserId}/${followData.followerUserId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["follow"],
    }),
    checkFollow: builder.query({
      query: (followingUserId: string) => {
        return {
          url: `/follows/check-follow/${followingUserId}`,
          method: "GET",
        };
      },
      providesTags: ["follow"],
    }),
  }),
});

export const {
  useCreateFollowMutation,
  useCheckFollowQuery,
  useRemoveFollowMutation,
} = followApi;
