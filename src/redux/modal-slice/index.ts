import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  openAuthorisationModalVisiblty: boolean;
  openOrderModal: boolean;
  orderData: any | null; 
  openDeleteOrderModal: boolean; 
  deleteOrderId: string | null;  
}

const initialState: InitialStateType = {
  openAuthorisationModalVisiblty: false,
  openOrderModal: false,
  orderData: null,
  openDeleteOrderModal: false,
  deleteOrderId: null,
};

const modalSlice = createSlice({
  name: "modal-slice",
  initialState,
  reducers: {
    setOpenAuthoritastionModalVisiblity(state) {
      state.openAuthorisationModalVisiblty = !state.openAuthorisationModalVisiblty;
    },
    setOpenOrderModal(state, action: PayloadAction<boolean>) {
      state.openOrderModal = action.payload;
    },
    setOrderData(state, action: PayloadAction<any>) {
      state.orderData = action.payload;
    },
    setOpenDeleteOrderModal(state, action: PayloadAction<{open: boolean, id?: string}>) {
      state.openDeleteOrderModal = action.payload.open;
      state.deleteOrderId = action.payload.id || null;
    }
  },
});

export const { 
  setOpenAuthoritastionModalVisiblity, 
  setOpenOrderModal, 
  setOrderData,
  setOpenDeleteOrderModal 
} = modalSlice.actions;

export default modalSlice.reducer;