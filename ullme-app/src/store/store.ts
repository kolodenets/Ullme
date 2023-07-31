import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "./slices/formsSlice";
import popupReducer from "./slices/popupsSlice";

export const store = configureStore({
  reducer: {
    forms: formsReducer,
    popups: popupReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;