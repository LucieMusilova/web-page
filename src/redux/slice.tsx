import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeMenuItem: string | null;
  activeBagButtonIndex: number;
}

const initialState: MenuState = {
  activeMenuItem: null,
  activeBagButtonIndex: 0,
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload;
    },
    setActiveBagButtonIndex: (state, action: PayloadAction<number>) => {
      state.activeBagButtonIndex = action.payload;
    },
  },
});

export const { setActiveMenuItem, setActiveBagButtonIndex } = slice.actions;

export default slice.reducer;
