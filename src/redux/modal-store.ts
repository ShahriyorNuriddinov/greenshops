import {createSlice} from "@reduxjs/toolkit"
interface InitialStateType{
    authorizationModalVisiblity:boolean;
}
const initialState:InitialStateType ={
    authorizationModalVisiblity:true,
};
export const modalSlice = createSlice({
     name: "modal-slice",
     initialState,
     reducers:{
        setAuthorizationModalVisiblity(state){
            state.authorizationModalVisiblity = !state.authorizationModalVisiblity;
        },
     },
});
export const {setAuthorizationModalVisiblity} = modalSlice.actions;
export default modalSlice.reducer