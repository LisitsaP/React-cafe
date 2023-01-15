import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "популярности", sortProperty: "raiting" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log("action setCategoryId", action);
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;

console.log(setCategoryId, "SLICE");
