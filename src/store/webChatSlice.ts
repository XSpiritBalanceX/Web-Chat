import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MainState = {
  locale: string;
};

const languageCurrent = localStorage.getItem("web_chat_lang");

const initialState: MainState = {
  locale: languageCurrent
    ? languageCurrent
    : navigator.language === "ru"
    ? "ru"
    : "en",
};

const webChatSlice = createSlice({
  name: "webChat",
  initialState,
  reducers: {
    changeLocale(state, action: PayloadAction<string>) {
      state.locale = action.payload;
      localStorage.setItem("web_chat_lang", action.payload);
    },
  },
});

export const { changeLocale } = webChatSlice.actions;

export default webChatSlice.reducer;
