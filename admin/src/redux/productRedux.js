import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    isError: false,
  },
  reducers: {
    getProductsStart:(state)=>{
        state.isFetching = true
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      console.log("game",action.payload);
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { getProductsFailure, getProductsSuccess, getProductsStart } = productSlice.actions;
export default productSlice.reducer;
