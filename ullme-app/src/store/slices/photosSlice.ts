import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PhotosState {
  photo1: string | null,
  photo2: string | null,
}

const initialState: PhotosState = {
  photo1: null,
  photo2: null,
}


export const PhotosSlice = createSlice({
  name: 'photosSlice',
  initialState,
  reducers: {
    setPhoto1: (state, action: PayloadAction<string>) => {state.photo1 = action.payload},
    setPhoto2: (state, action: PayloadAction<string>) => {state.photo2 = action.payload},
  },
})

export const { setPhoto1, setPhoto2 } = PhotosSlice.actions;
export default PhotosSlice.reducer