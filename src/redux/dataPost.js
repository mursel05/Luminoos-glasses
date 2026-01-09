import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../supabase";

const initialState = {
  blogs: [],
  products: [],
  codes: [],
  faq: [],
  loading: false,
};

export const getData = createAsyncThunk(
  "fetchData/getData",
  async (thunkApi) => {
    const { data, error } = await supabase
      .from("Products")
      .select("*")
      .order("id", { ascending: true });
    if (error) throw error;
    return data;
  }
);

export const getFaq = createAsyncThunk("fetchData/getFaq", async (thunkApi) => {
  const { data, error } = await supabase
    .from("FAQ")
    .select("*")
    .order("id", { ascending: true });
  if (error) throw error;
  return data;
});

export const getCodes = createAsyncThunk(
  "fetchData/getCodes",
  async (thunkApi) => {
    const { data, error } = await supabase.from("promo-code").select("*");
    if (error) throw error;
    return data;
  }
);

export const getBlogs = createAsyncThunk(
  "fetchData/getBlogs",
  async (thunkApi) => {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) throw error;
    return data;
  }
);

export const allSlice = createSlice({
  name: "fetchData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload && payload.length > 0) {
          state.products = payload;
        }
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getCodes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCodes.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload && payload.length > 0) {
          state.codes = payload;
        }
      })
      .addCase(getCodes.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload && payload.length > 0) {
          state.blogs = payload;
        }
      })
      .addCase(getBlogs.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFaq.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload && payload.length > 0) {
          state.faq = payload;
        }
      })
      .addCase(getFaq.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const fetchReducer = allSlice.reducer;
