import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchSingleProduct } from "../async/products";
import { IProduct, IProductState } from "../../../types";

const initialState: IProductState = {
  all: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "",
  },
  single: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "",
  },
  cart: [],
  whiteList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart(
      state,
      action: PayloadAction<{ product: IProduct; quantity?: number }>
    ) {
      const quantity = action.payload?.quantity ?? 1;
      const findItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (findItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.product.id === findItem.product.id)
            return { ...item, quantity: item.quantity + quantity };
          return item;
        });
        state.cart = updatedCart;
      } else {
        state.cart = [
          ...state.cart,
          { product: action.payload.product, quantity },
        ];
      }
    },
    removeProductFromCart(
      state,
      action: PayloadAction<{ product: IProduct; quantity?: number }>
    ) {
      const quantity = action.payload?.quantity ?? 0;
      const findItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (findItem) {
        if (findItem.quantity === 1 || quantity === 0) {
          const filterCart = state.cart.filter(
            (item) => item.product.id !== findItem.product.id
          );
          state.cart = filterCart;
          return;
        }
        const updatedCart = state.cart.map((item) => {
          if (item.product.id === findItem.product.id)
            return { ...item, quantity: item.quantity - quantity };
          return item;
        });
        state.cart = updatedCart;
      }
    },
    addProductToWhitelist(state, action: PayloadAction<IProduct>) {
      state.whiteList = [...state.whiteList, action.payload];
    },
    removeProductFromWhitelist(state, action: PayloadAction<IProduct>) {
      const filterWhitelist = state.whiteList.filter(
        (item) => item.id !== action.payload.id
      );
      state.whiteList = filterWhitelist;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.all.isLoading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.all.isLoading = false;
      state.all.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.all.isError = true;
      state.all.errorMessage = "Could not fetch all products";
    });
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.single.isLoading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.single.isLoading = false;
      state.single.data = action.payload;
    });
    builder.addCase(fetchSingleProduct.rejected, (state) => {
      state.single.isError = true;
      state.single.errorMessage = "Could not fetch this product";
    });
  },
});

export const {
  removeProductFromCart,
  addProductToCart,
  addProductToWhitelist,
  removeProductFromWhitelist,
} = productsSlice.actions;

export default productsSlice.reducer;
