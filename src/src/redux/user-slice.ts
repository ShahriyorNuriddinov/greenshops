import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { AuthType } from "../@types";
interface InitialStateType {
  user?: AuthType;
  usAuth: boolean;
}
const userCookie = Cookies.get("user");

const initialState: InitialStateType = {
  user: userCookie ? JSON.parse(userCookie) : null,
  usAuth: userCookie ? true : false,
};
export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    Getuser(state, action) {
      state.user = action.payload;
      state.usAuth = true;
    },
  },
});
export const { Getuser } = userSlice.actions;
export default userSlice.reducer;
