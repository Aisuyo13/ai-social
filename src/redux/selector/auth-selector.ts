import { GlobalStateType } from "../redux-store";

export const getAuth = (state: GlobalStateType): boolean => {
    return state.auth.isAuth;
}