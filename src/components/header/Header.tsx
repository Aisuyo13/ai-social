import React from "react"
import { NavLink } from "react-router-dom"
import { buttonStyle } from "../../shared/styles/tailWindStyles"

export type HeaderPropsType = {
    isAuth: boolean
    id: number | null
    email: string | null
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md dark:bg-gray-800 rounded-xl px-5">
            <div className="flex items-center p-1">
                <img className="mr-[100px] max-w-[60px]"
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
                alt="logo" />
                <nav className="mr-auto">
                    <ul className="list-none flex items-center gap-[35px]">
                        <li className="header__list-item">
                            <NavLink to='/profile'>Профиль</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to='/messenger'>Сообщения</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to='/friends'>Друзья</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to='/media'>Медиа</NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to='/users'>Пользователи</NavLink>
                        </li>
                    </ul>
                </nav>
                {props.isAuth 
                ? <div className="gap-3 flex items-center"><span>{props.login}</span><button className={buttonStyle.danger + " py-1 px-3"} onClick={props.logout}>Выход</button></div> 
                : <div className="header__login">Login</div>}
            </div>
        </header>
    )
}

export default Header