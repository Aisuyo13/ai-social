import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { logout } from "../../redux/reducer/auth-reducer"
import { GlobalStateType } from "../../redux/redux-store"

export type HeaderPropsType = {
    isAuth: boolean
    id: number | null
    email: string | null
    login: string | null
    logout: () => void
}

const HeaderContainer = (props: HeaderPropsType) => {

    return <Header {...props}/>

}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);