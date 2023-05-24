import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  loading: false,
  products: [],
  errors: "",
  cart: [],
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const productSlice = createSlice({
  name: "productSlice",
  initialState: initialStateValue,
  reducers: {
    setProducts: (state, action) => {
      if (action.payload) {
        state.value = action.payload;
      }
    },
    addToCart: (state, action) => {
        if (action.payload) {
          state.cart = [...state.cart, action.payload];
        }
      }
  },



  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.errors = "";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.errors = action.error.message;
    });
  },
});

export const { setProducts,addToCart } = productSlice.actions;

export default productSlice.reducer;
