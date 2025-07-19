import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { GlobalStateType } from "../redux/redux-store";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        if (!props.isAuth) {
            return <Navigate to='/login' replace />;
        }
        return <Component {...props} />;
    };

    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;