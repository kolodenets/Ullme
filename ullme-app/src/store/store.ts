import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "./slices/formsSlice";
import popupReducer from "./slices/popupsSlice";
import tokensReducer from "./slices/tokensSlice"
import photosReducer from "./slices/photosSlice"

export const store = configureStore({
  reducer: {
    forms: formsReducer,
    popups: popupReducer,
    tokens: tokensReducer,
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;