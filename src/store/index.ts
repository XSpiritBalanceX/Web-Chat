import { configureStore } from "@reduxjs/toolkit";
import webChatSlice from "./webChatSlice";

export const store = configureStore({
  reducer: {
    webChat: webChatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
