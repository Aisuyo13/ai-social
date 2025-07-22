import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootStateType, AppDispatchType } from "./redux-store";

// Типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>();

// Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

// Хук для обёртки thunk-функций в dispatch
export const useThunkWrap = () => {
  const dispatch = useAppDispatch();

  return function wrapThunk<T extends (...args: any[]) => any>(thunk: T) {
    return (...args: Parameters<T>) => dispatch(thunk(...args));
  };
};