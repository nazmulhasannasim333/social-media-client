import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
    getUserInfo: builder.query({
      query: (userId) => {
        return {
          url: `/users/user-info/${userId}`,
          method: "GET",
        };
      },
    }),
    updateUSerProfile: builder.mutation({
      query: ({ userId, userData }) => {
        return {
          url: `/users/update-profile/${userId}`,
          method: "PUT",
          body: userData,
        };
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useGetUserInfoQuery,
  useUpdateUSerProfileMutation,
} = userApi;
