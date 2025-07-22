import React from "react";
import { useAppSelector } from "../../redux/hooks";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/reducer/auth-reducer";
import { getAuth } from "../../redux/selector/auth-selector"
import { useThunkWrap } from "../../redux/hooks";

const LoginContainer = () => {

    const wrap = useThunkWrap();
    const isAuth = useAppSelector(getAuth);

    return isAuth
        ? <Navigate to="/profile" />
        : <Login login={wrap(login)} />
}

export default LoginContainer