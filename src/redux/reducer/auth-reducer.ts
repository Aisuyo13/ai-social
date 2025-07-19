import { authApi } from "../../api/API";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setInitialized } from "./app-reducer";
import {AppDispatchType} from "../redux-store";

const initialState = {
    isAuth: false,
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthAc(state, action: PayloadAction<{ id: number; email: string; login: string; isAuth: boolean }>) {
            state.isAuth = action.payload.isAuth;
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.login = action.payload.login;
        },
        loginAc(state, action: PayloadAction<{ id: number; email: string; login: string }>) {
            state.isAuth = true;
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.login = action.payload.login;
        },
        logoutAc(state) {
            state.isAuth = false;
            state.id = null;
            state.email = null;
            state.login = null;
        }
    }
});

export const requestAuth = () => {
    return async (dispatch: AppDispatchType) => {
        const res = await authApi.getAuth()
        if (res.resultCode === 0) {
            const { id, email, login } = res.data;
            dispatch(setAuthAc({ id, email, login, isAuth: true }));
        }
        dispatch(setInitialized(true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: AppDispatchType) => {
        const res = await authApi.login(email, password, rememberMe)
        if (res.resultCode === 0) {
            dispatch(loginAc({ id: res.data.id, email: res.data.email, login: res.data.login }));
        }
    }
}

export const logout = () => {
    return async (dispatch: AppDispatchType) => {
        const  res = await authApi.logout()
        if (res.resultCode === 0) {
            dispatch(logoutAc());
        }
    }
}

export const {setAuthAc, loginAc, logoutAc} = authSlice.actions;
export default authSlice.reducer;