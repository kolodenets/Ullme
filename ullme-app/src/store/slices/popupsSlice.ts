import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopupState {
  activeThanksPopup: boolean;
  activeSharePopup: boolean;
  activePostResultPopup: boolean;
  activeSendLinkPopup: boolean;
}

const initialState: PopupState = {
  activeThanksPopup: false,
  activeSharePopup: false,
  activePostResultPopup: false,
  activeSendLinkPopup: false,
};

export const PopupSlice = createSlice({
  name: "popupSlice",
  initialState,
  reducers: {
    toggleThanksPopup: (state, action: PayloadAction<boolean>) => {
      state.activeThanksPopup = action.payload;
    },
    toggleSharePopup: (state, action: PayloadAction<boolean>) => {
      state.activeSharePopup = action.payload;
    },
    togglePostResultPopup: (state, action: PayloadAction<boolean>) => {
      state.activePostResultPopup = action.payload;
    },
    toggleSendLinkPopup: (state, action: PayloadAction<boolean>) => {
      state.activeSendLinkPopup = action.payload;
    },
  },
});

export const { toggleThanksPopup, toggleSharePopup, togglePostResultPopup, toggleSendLinkPopup } = PopupSlice.actions;
export default PopupSlice.reducer;
