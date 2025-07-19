import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/reducer/auth-reducer";
import { getAuth } from "../../redux/selector/auth-selector";
import { GlobalStateType } from "../../redux/redux-store";

export type LoginPropsType = {
    isAuth: boolean;
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginContainer = (props: LoginPropsType) => {
    return props.isAuth ? <Navigate to="/profile" /> : <Login login={props.login} />
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        isAuth: getAuth(state),
    };
}

export default connect(mapStateToProps, { login })(LoginContainer);