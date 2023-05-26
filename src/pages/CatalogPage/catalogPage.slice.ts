import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';

interface CatalogPageState {
  products: Product[];
  filteredProducts: Product[];
}

const initialState: CatalogPageState = {
  products: [],
  filteredProducts: [],
};

interface FilterPayload {
  priceFrom: number;
  priceTo: number;
  category: number;
  size: string;
}

export const catalogPageSlice = createSlice({
  name: 'catalogPage',
  initialState: initialState,
  reducers: {
    filter: (state, action: PayloadAction<FilterPayload>) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          ((action.payload.priceFrom && product.price >= action.payload.priceFrom) ||
            !action.payload.priceFrom) &&
          ((action.payload.priceTo && product.price <= action.payload.priceTo) || !action.payload.priceTo) &&
          ((action.payload.category && product.categoryId === action.payload.category) ||
            !action.payload.category) &&
          ((action.payload.size && product.sizes.indexOf(action.payload.size) > -1) || !action.payload.size),
      );
    },
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
  },
});

export const { filter, getProducts } = catalogPageSlice.actions;

export const catalogPageReducer = catalogPageSlice.reducer;
