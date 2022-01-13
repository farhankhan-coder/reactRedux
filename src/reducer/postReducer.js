import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk(
  "posts/userRegister",
  async (item) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    return fetch("/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
export const userLogin = createAsyncThunk("posts/userLogin", async (item) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "  /json" },
    body: JSON.stringify(item),
  };
  return fetch("/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
});
export const profileView = createAsyncThunk(
  "posts/profileView",
  async (token) => {
    return fetch("/myProfile", {
      method: "GET",
      headers: { "x-access-token": token },
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: "idle",
  },
  extraReducers: {
    [userRegister.pending]: (state, action) => {
      state.status = "loading";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [userRegister.rejected]: (state, action) => {
      state.status = "faield";
    },
    [userLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [userLogin.rejected]: (state, action) => {
      state.status = "faield";
    },
    [profileView.pending]: (state, action) => {
      state.status = "loading";
    },
    [profileView.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [profileView.rejected]: (state, action) => {
      state.status = "faield";
    },
  },
});

export default postSlice.reducer;