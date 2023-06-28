import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState<T> {
  loading: boolean;
  products: Array<T>;
  errors: string;
  cart: Array<T>;
  total: number;
  wishlist: Array<string>;
  singleProduct: object;
  loadingSingle: boolean;
  errorSingle: string;
  category: string;

}

const initialStateValue: IState<[]> = {
  loading: false,
  products: [],
  errors: "",
  cart: [],
  total: 0,
  wishlist: [],
  singleProduct: {},
  loadingSingle: false,
  errorSingle: "",
  category: ""
};

export const fetchProducts = createAsyncThunk("products/fetch", async (category?: string) => {

  const url = category ? `https://fakestoreapi.com/products/category/${category}` : "https://fakestoreapi.com/products";

  const response = await fetch(url);
  console.log("res",response)
  const data = await response.json();
  return data;
});

export const fetchSingle = createAsyncThunk(`products/single`, async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});


const calcTotal = (cart) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState: initialStateValue,
  reducers: {
    setSingleProduct: (state, action) => {
      if (action.payload) {
        state.singleProduct = state.products.find(
          (item) => item.id === action.payload
        );
      }
    },

    clearCart: (state, action) => {
        state.cart = []
    },

    addToCart: (state, action) => {
      if (action.payload) {
        action.payload.quantity = 1;
        state.cart = [...state.cart, action.payload];
        const total = calcTotal(state.cart);
        state.total = total;
      }
    },

    addToWishLists: (state, action) => {
      if (action.payload) {
        // action.payload.quantity = 1;
        state.wishlist = [...state.wishlist, action.payload];
        // const total = calcTotal(state.cart)
        // state.total = total
      }
    },

    removeFromWishlist: (state, action) => {
      if (action.payload) {
        state.wishlist = state.wishlist.filter(
          (item: any) => item.id !== action.payload.id
        );
      }
    },

    icreaseQuantity: (state, action) => {
      if (action.payload) {
        state.cart = state.cart.map((obj) =>
          obj.id === Number(action.payload.id)
            ? { ...obj, quantity: action.payload.quantity }
            : obj
        );
        const total = calcTotal(state.cart);
        state.total = total;
      }
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item: any) => item.id !== action.payload);
      const total = calcTotal(state.cart);
      state.total = total;
    },

    setCat: (state, action) => {
      if(action.payload){
        state.category = action.payload
      }
    },
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






    builder.addCase(fetchSingle.pending, (state) => {
      state.loadingSingle = true;
    });

    builder.addCase(fetchSingle.fulfilled, (state, action) => {
      state.loadingSingle = false;
      state.singleProduct = action.payload;
      state.errorSingle = "";
    });

    builder.addCase(fetchSingle.rejected, (state, action) => {
      state.loadingSingle = false;
      state.singleProduct = [];
      state.errorSingle = action.error.message;
    });


  },
});

export const {
  addToCart,
  icreaseQuantity,
  deleteFromCart,
  setSingleProduct,
  addToWishLists,
  removeFromWishlist,
  clearCart,
  setCat
  
} = productSlice.actions;

export default productSlice.reducer;
