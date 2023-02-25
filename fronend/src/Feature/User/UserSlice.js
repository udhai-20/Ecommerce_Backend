import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (thunkAPI) => {
    try {
    } catch (err) {}
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: "",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
