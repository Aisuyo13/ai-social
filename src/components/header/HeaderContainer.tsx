import React from "react"
import Header from "./Header"
import { logout } from "../../redux/reducer/auth-reducer"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"

const HeaderContainer = () => {

    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const id = useAppSelector(state => state.auth.id);
    const email = useAppSelector(state => state.auth.email);
    const login = useAppSelector(state => state.auth.login);

    return <Header isAuth={isAuth} id={id} email={email}
        login={login} logout={() => dispatch(logout())} />

}

export default HeaderContainer