import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopupState {
  activeThanksPopup: boolean;
}

const initialState: PopupState = {
  activeThanksPopup: false,
};

export const PopupSlice = createSlice({
  name: "popupSlice",
  initialState,
  reducers: {
    toggleThanksPopup: (state, action: PayloadAction<boolean>) => {
      state.activeThanksPopup = action.payload;
    },
  },
});

export const { toggleThanksPopup } = PopupSlice.actions;
export default PopupSlice.reducer;
