import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Headers
const cryptoApiHeader = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

// Request
const createRequest = (url) => ({ url, headers: cryptoApiHeader });
// Reducer
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi', //  name of the api
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }), //  Url
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCoinsDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCoinsHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinsDetailsQuery,
  useGetCoinsHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
