import Cookies from "universal-cookie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "types/index";

const cookies = new Cookies();

const initialState: UserResponse = cookies.get("token") ?? {
  token: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserResponse>) => {
      const { token, role } = action.payload;

      state.token = token;
      state.role = role;
    },
    logOut: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;
export default userSlice.reducer;
