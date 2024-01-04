import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponse, userSliceType } from "types/index";

const initialState: userSliceType = {
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserResponse>) => {
      const { token } = action.payload;

      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;
export default userSlice.reducer;
