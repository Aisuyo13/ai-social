import React from "react"
import { NavLink } from "react-router-dom"
import { HeaderPropsType } from "./HeaderContainer"

const Header = (props: HeaderPropsType) => {
    
    return (
        <header className="header">
            <div className="container header__container">
                <img className="header__logo" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt="logo" />
                <nav className="header__nav">
                    <ul className="header__nav-list">
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
                {props.isAuth ? <div><span>{props.login}</span><button onClick={props.logout}>Выход</button></div> : <div className="header__login">Login</div>}
            </div>
        </header>
    )
}

export default Header