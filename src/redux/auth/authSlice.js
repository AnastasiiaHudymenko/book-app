import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser, googleAuth } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  sid: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.refreshToken = action.payload.newRefreshToken;
      state.token = action.payload.newAccessToken;
      state.sid = action.payload.newSid;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [googleAuth.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
  },
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(register, (state, action) => {
//         state.user = action.payload.userData;
//         state.token = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//         state.sid = action.payload.sid;
//         state.isLoggedIn = true;
//       })
//       You can chain calls, or have separate `builder.addCase()` lines each time
//       .addCase(logIn, (state, action) => {
//         state.user = action.payload.userData;
//         state.token = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//         state.sid = action.payload.sid;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut, (state, action) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.refreshToken = null;
//         state.sid = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser, (state, action) => {
//         state.refreshToken = action.payload.newRefreshToken;
//         state.token = action.payload.newAccessToken;
//         state.sid = action.payload.newSid;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addMatcher(
//         (action) => [register.type, logIn.type].includes(action.type),
//         (state, action) => {
//           state.user = action.payload.userData;
//           state.token = action.payload.accessToken;
//           state.refreshToken = action.payload.refreshToken;
//           state.sid = action.payload.sid;
//           state.isLoggedIn = true;
//         }
//       );
//   },
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(logOut, (state, action) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.refreshToken = null;
//         state.sid = null;
//         state.isLoggedIn = false;
//       })
//       .addMatcher(
//         (action) => [register.type, logIn.type].includes(action.type),
//         (state, action) => {
//           state.user = action.payload.userData;
//           state.token = action.payload.accessToken;
//           state.refreshToken = action.payload.refreshToken;
//           state.sid = action.payload.sid;
//           state.isLoggedIn = true;
//         }
//       )
//       .addMatcher(
//         (action) => action.type === refreshUser.type,
//         (state, action) => {
//           state.refreshToken = action.payload.newRefreshToken;
//           state.token = action.payload.newAccessToken;
//           state.sid = action.payload.newSid;
//           state.isLoggedIn = true;
//           state.isRefreshing = false;
//         }
//       );
//   },
// });

export const authReducer = authSlice.reducer;
