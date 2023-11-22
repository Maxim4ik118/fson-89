import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.productsStore.products;
export const selectProductIsLoading = state => state.productsStore.isLoading;
export const selectProductsError = state => state.productsStore.error;
export const selectProductsFilterTerm = state => state.productsStore.filterTerm;
export const selectFilteredProducts = createSelector(
  [selectProducts, selectProductsFilterTerm],
  (products, filterTerm) =>
    products.filter(
      ({ price, title }) =>
        title.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
        price.toString().includes(filterTerm.toLowerCase().trim())
    )
);
