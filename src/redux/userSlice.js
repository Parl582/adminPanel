import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "../BaseUrl";

export const GetUser = createAsyncThunk("user/getUser", async () => {
  return fetch(`${BASE_URL}/users`).then((res) => res.json());
});

export const DeleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ id }) => {
    return fetch(`${BASE_URL}/user/${id}`, { method: "DELETE" }).then(
      (res) => res.id
    );
  }
);

// create User

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ userInfo }) => {
    return fetch(`${BASE_URL}/user/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
  }
);
// update user

export const UpdateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userInfo, id }) => {
    return fetch(`${BASE_URL}/user/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: false,
  },
  extraReducers: {
    [GetUser.pending]: (state, action) => {
      state.loading = true;
    },
    [GetUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [GetUser.rejected]: (state, action) => {
      state.error = true;
    },
    // delete user ================================>
    [DeleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [DeleteUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteUser.rejected]: (state, action) => {
      state.error = true;
    },

    // create post ===============================>

    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createUser.rejected]: (state, action) => {
      state.error = true;
    },

    // update user ============================>

    [UpdateUser.pending]: (state, action) => {
      state.loading = true;
    },
    [UpdateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = [action.payload];
    },
    [UpdateUser.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export default userSlice.reducer;
