import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TokensState {
  token1: string | null;
  token2: string | null;
}

const initialState: TokensState = {
  token1: null,
  token2: null,
};

export const TokensSlice = createSlice({
  name: "tokensSlice",
  initialState,
  reducers: {
    setToken1: (state, action: PayloadAction<string | null>) => {
      state.token1 = action.payload;
    },
    setToken2: (state, action: PayloadAction<string | null>) => {
      state.token2 = action.payload;
    },
  },
});

export const { setToken1, setToken2 } = TokensSlice.actions;
export default TokensSlice.reducer;
