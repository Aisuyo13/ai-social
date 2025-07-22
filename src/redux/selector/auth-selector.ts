import { RootStateType } from "../redux-store";

export const getAuth = (state: RootStateType): boolean => {
    return state.auth.isAuth;
}