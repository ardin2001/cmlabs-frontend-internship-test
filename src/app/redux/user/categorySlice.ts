import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCategory: any = createAsyncThunk(
  "data/fetchCategory",
  async (query: any, thunkAPI) => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const { categories } = await res.json();
      return { status: true, data: categories };
    } catch (e) {
      return { data: null, status: false };
    }
  }
);

const initialState: any = [
  {
    status: null,
    data: [],
  },
];
const itemsSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, () => {
        return { status: null, data: null };
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getCategory.rejected, (state) => {
        return { status: false, data: null };
      });
  },
});

const actions = itemsSlice.actions;
const reducerCategory = itemsSlice.reducer;

export { reducerCategory, actions, getCategory };
