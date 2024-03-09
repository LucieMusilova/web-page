import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeMenuItem: string | null;
  activeBagButtonIndex: number;
  hamMenuOpen: boolean;
}

const initialState: MenuState = {
  activeMenuItem: null,
  activeBagButtonIndex: 0,
  hamMenuOpen: false,
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
    isHamMenuOpen: (state) => {
      state.hamMenuOpen = !state.hamMenuOpen;
    },
  },
});

export const { setActiveMenuItem, setActiveBagButtonIndex, isHamMenuOpen } =
  slice.actions;

export default slice.reducer;
