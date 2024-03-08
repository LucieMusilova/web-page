import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeMenuItem: string | null;
}

const initialState: MenuState = {
  activeMenuItem: null,
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { setActiveMenuItem } = slice.actions;

export default slice.reducer;

