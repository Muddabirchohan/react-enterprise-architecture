import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    currentTab: "Products"
};


export const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: initialStateValue,
  reducers: {
    setCurrentView: (state, action) => {
      if (action.payload) {
        state.currentTab = action.payload;
      }
    },

  },



  extraReducers: (builder) => {

  },
});

export const { setCurrentView } = sideBarSlice.actions;

export default sideBarSlice.reducer;
