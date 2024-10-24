import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getMeal: any = createAsyncThunk(
  "data/fetchMeal",
  async (query: any, thunkAPI) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=`+query.category);
      const { meals } = await res.json();
      return { status: true, data: meals };
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
  name: "meals",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeal.pending, () => {
        return { status: null, data: null };
      })
      .addCase(getMeal.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getMeal.rejected, (state) => {
        return { status: false, data: null };
      });
  },
});

const actions = itemsSlice.actions;
const reducerMeal = itemsSlice.reducer;

export { reducerMeal, actions, getMeal };
