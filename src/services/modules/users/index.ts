import { api } from '../../api';

export type User = {
  id: number;
  name: string;
};

export type ProductList = {
  name: string;
};

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: build.query<{}, {}>({
      query: name => `${name}`,
    }),
    getProductDetails: build.query<{}, {}>({
      query: id => `${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyFetchOneQuery, useLazyGetProductDetailsQuery } = userApi;
