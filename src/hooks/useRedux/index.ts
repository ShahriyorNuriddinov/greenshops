import type { RootStore, DispatchType } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
// useSelector
// useDispatch

export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useReduxDispatch = () => useDispatch<DispatchType>();