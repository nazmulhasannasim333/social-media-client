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
        console.log(userId);
        return {
          url: `/users/user-info/${userId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetMeQuery, useGetUserInfoQuery } = userApi;
