import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    getUserInfo: builder.query({
      query: (userId) => {
        return {
          url: `/users/user-info/${userId}`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    updateUSerProfile: builder.mutation({
      query: ({ userData, userId }) => {
        console.log({ userData, userId });
        return {
          url: `/users/update-profile/${userId}`,
          method: "PUT",
          body: userData,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useGetUserInfoQuery,
  useUpdateUSerProfileMutation,
} = userApi;
