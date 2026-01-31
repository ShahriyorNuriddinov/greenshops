import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { AuthType } from "../../@types";

interface InitialStateType {
  user: AuthType | null;
  isAuth: boolean;
}

const getInitialUser = (): AuthType | null => {
  const userCookie = Cookies.get("user");
  if (!userCookie || userCookie === "undefined" || userCookie === "null") return null;
  try {
    return JSON.parse(userCookie);
  } catch (error) {
    return null;
  }
};

const initialState: InitialStateType = {
  user: getInitialUser(),
  isAuth: !!getInitialUser(),
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<AuthType>) {
      if (action.payload && action.payload._id) {
        state.user = action.payload;
        state.isAuth = true;  
         Cookies.set("user", JSON.stringify(action.payload),);
      }
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
      Cookies.remove("user");
      Cookies.remove("token");
    }
  },
});

export const { getUser, logout } = userSlice.actions;
export default userSlice.reducer;