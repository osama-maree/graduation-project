import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taboJsonApi = createApi({
  reducerPath: "taboJsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/tabo",
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) headers.set("token", `osama__${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    useLogin: builder.query({
      query: () => "/user/userdata",
    }),
    getLand: builder.query({
      query: () => "/user/getland",
    }),
    createSale: builder.mutation({
      query: (formData) => ({
        url: "/user/create_land_sale",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }),
    }),
    getSaleTranaction: builder.query({
      query: () => "/user/land_sale",
    }),
    gerLandMortgaga: builder.query({
      query: () => "/user/Mortgaga_trans",
    }),
    getLandFragment: builder.query({
      query: () => "/user/land_fragmentation",
    }),
    getLandInhertTransfer: builder.query({
      query: () => "/user/tnheritance_transfer",
    }),
    getSortingTransaction: builder.query({
      query: () => "/user/land_sorting",
    }),
    getSingleTransaction: builder.query({
      query: (params) => `/user/${params.type}/${params.id}`,
    }),
    getLastNews: builder.query({
      query: () => "/user/getNew",
    }),
    getModal: builder.query({
      query: () => `/user/getmodal`,
    }),
    SendCode: builder.mutation({
      query: (data) => ({
        url: "/auth/sendCode",
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    veriFyCode: builder.mutation({
      query: (data) => ({
        url: "/auth/verifyCode",
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/changePassword",
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),

    getCustomTranaction: builder.query({
      query: (params) => `/employee/trans/${params.type}/${params.id}`,
    }),
    customUpdate: builder.mutation({
      query: (data) => ({
        url: `/employee/updatetrans/${data.type}/${data._id}`,
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }), ////
    paidFees: builder.mutation({
      query: (data) => ({
        url: `/employee/updateFeesDone/${data.type}/${data._id}`,
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    createAccountForUser: builder.mutation({
      query: (data) => ({
        url: "/employee/signup",
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    getUser: builder.query({
      query: (params) => `/employee/getUser/${params.id}`,
    }),
    customUpdateAccount: builder.mutation({
      query: (data) => ({
        url: `/employee/updateinfor/${data.id}`,
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    getUserIntior: builder.query({
      query: (params) => `/admin/internal/getintier/${params.id}`,
    }),
    getOter: builder.query({
      query: (params) => `/admin/internal/getouter/${params.id}`,
    }),
    getTax: builder.query({
      query: (params) => `/admin/internal/gettax/${params.id}`,
    }),
    getMunicipal: builder.query({
      query: (params) => `/admin/internal/getmuni/${params.id}`,
    }),
    getLandMuni: builder.mutation({
      query: (data) => ({
        url: `/admin/internal/getlandmuni`,
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),

    getAreaDep: builder.mutation({
      query: (data) => ({
        url: `/admin/internal/getsurvy`,
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `/admin/signup`,
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    getEmployee: builder.query({
      query: () => `/admin/getemployee`,
    }),
    getManagerTrans: builder.query({
      query: (params) => `/admin/gettrans/${params.type}/${params.id}`,
    }),
    getEmployeeId: builder.query({
      query: (params) => `/admin/getEmp/${params.id}`,
    }),
    giveVacation: builder.mutation({
      query: (data) => ({
        url: "/admin/giveVacation",
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    createNews: builder.mutation({
      query: (data) => ({
        url: "/employee/addNews",
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    getLandForEmp: builder.mutation({
      query: (data) => ({
        url: "/employee/getLandFor",
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
    freezLand: builder.mutation({
      query: (data) => ({
        url: "/employee/freezLand",
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useUseLoginQuery,
  useGerLandMortgagaQuery,
  useGetSaleTranactionQuery,
  useCreateSaleMutation,
  useGetLandQuery,
  useGetLandFragmentQuery,
  useGetLandInhertTransferQuery,
  useGetSortingTransactionQuery,
  useGetSingleTransactionQuery,
  useGetLastNewsQuery,
  useGetModalQuery,
  useSendCodeMutation,
  useVeriFyCodeMutation,
  useChangePasswordMutation,
  useGetCustomTranactionQuery,
  useCustomUpdateMutation,
  usePaidFeesMutation,
  useCreateAccountForUserMutation,
  useGetUserQuery,
  useCustomUpdateAccountMutation,
  useGetUserIntiorQuery,
  useGetOterQuery,
  useGetTaxQuery,
  useGetMunicipalQuery,
  useGetLandMuniMutation,
  useGetAreaDepMutation,
  useCreateAdminMutation,
  useGetEmployeeQuery,
  useGetManagerTransQuery,
  useGetEmployeeIdQuery,
  useGiveVacationMutation,
  useCreateNewsMutation,
  useGetLandForEmpMutation,
  useFreezLandMutation
} = taboJsonApi;
