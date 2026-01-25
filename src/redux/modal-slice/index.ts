import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  openAuthorisationModalVisiblty: boolean;
}
const initialState: InitialStateType = {
  openAuthorisationModalVisiblty: false,
};

const modalSlice = createSlice({
  name: "modal-slice",
  initialState,
  reducers: {
    setOpenAuthoritastionModalVisiblity(state) {
      state.openAuthorisationModalVisiblty =
        !state.openAuthorisationModalVisiblty;
    },
  },
});

export const { setOpenAuthoritastionModalVisiblity } = modalSlice.actions;
export default modalSlice.reducer;
