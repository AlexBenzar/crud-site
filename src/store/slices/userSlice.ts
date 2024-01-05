import Cookies from "universal-cookie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "types/index";

const cookies = new Cookies();

console.log(cookies.get("token"));

const initialState: UserResponse = cookies.get("token") ?? {
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
