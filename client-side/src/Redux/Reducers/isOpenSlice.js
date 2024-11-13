import { createSlice } from "@reduxjs/toolkit";

const isOpenSlice = createSlice({
  name: "isOpen",
  initialState: { status: true },
  reducers: {
    isOpen: (state) => {
      state.status = true;
    },
    onClose: (state) => {
      state.status = false;
    },
  },
});

export const { isOpen, onClose } = isOpenSlice.actions;
export default isOpenSlice.reducer;
