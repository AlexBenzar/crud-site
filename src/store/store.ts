import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import { profileApi } from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, profileApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
