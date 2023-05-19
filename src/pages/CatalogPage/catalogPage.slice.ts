import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';

const tempProducts = [
  {
    id: 1,
    categoryId: 1,
    title: 'Product 1',
    imageColor: 'red',
    colors: ['black', 'orange'],
    sizes: ['XS', 'S', 'L'],
    price: 1000,
  },
  {
    id: 2,
    categoryId: 2,
    title: 'Product 2',
    imageColor: 'yellow',
    colors: ['black', 'white'],
    sizes: ['S', 'L'],
    price: 200,
  },
  {
    id: 3,
    categoryId: 3,
    title: 'Product 3',
    imageColor: 'green',
    colors: ['red', 'white'],
    sizes: ['L', 'XL'],
    price: 400,
  },
  {
    id: 4,
    categoryId: 1,
    title: 'Product 4',
    imageColor: 'blue',
    colors: ['orange'],
    sizes: ['XS', 'S'],
    price: 500,
  },
  {
    id: 5,
    categoryId: 2,
    title: 'Product 5',
    imageColor: 'deepskyblue',
    colors: ['white'],
    sizes: ['XS', 'L'],
    price: 1000,
  },
  {
    id: 6,
    categoryId: 3,
    title: 'Product 6',
    imageColor: 'lightgreen',
    colors: ['black', 'blue'],
    sizes: ['L'],
    price: 600,
  },
  {
    id: 7,
    categoryId: 1,
    title: 'Product 7',
    imageColor: 'purple',
    colors: ['white', 'green', 'yellow'],
    sizes: ['XS', 'S', 'L', 'XL'],
    price: 700,
  },
  {
    id: 8,
    categoryId: 2,
    title: 'Product 8',
    imageColor: 'tomato',
    colors: ['red', 'orange'],
    sizes: ['M'],
    price: 200,
  },
];

interface CatalogPageState {
  products: Product[];
  filteredProducts: Product[];
}

const initialState: CatalogPageState = {
  products: tempProducts,
  filteredProducts: tempProducts,
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
  },
});

export const { filter } = catalogPageSlice.actions;

export const catalogPageReducer = catalogPageSlice.reducer;
