import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormsState {
  activeLogin: boolean,
  activeRegistration: boolean,
}

const initialState: FormsState = {
  activeLogin: false,
  activeRegistration: false,
}


export const FormsSlice = createSlice({
  name: 'formsSlice',
  initialState,
  reducers: {
    toggleLogin: (state, action: PayloadAction<boolean>) => {state.activeLogin = action.payload},
    toggleRegistration: (state, action: PayloadAction<boolean>) => {state.activeRegistration = action.payload},
  },
})

export const { toggleLogin, toggleRegistration } = FormsSlice.actions;
export default FormsSlice.reducer