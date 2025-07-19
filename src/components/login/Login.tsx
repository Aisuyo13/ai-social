import React from "react";
import s from './login.module.css';
import { useForm } from 'react-hook-form';

type LoginFormData = {
    email: string;
    password: string;
    rememberMe: boolean;
};

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: PropsType) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const onSubmit = (data: LoginFormData) => {
        props.login(data.email, data.password, data.rememberMe)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm} action="">
                <input id="email" {...register("email", { required: "Введите почту или логин" })} type="text" placeholder="Почта" />
                {errors.email && <span className={s.error}>{errors.email.message}</span>}

                <input id="password" {...register("password", { required: "Введите пароль" })} type="password" placeholder="Пароль" />
                {errors.password && <span className={s.error}>{errors.password.message}</span>}

                <input {...register("rememberMe")} type="checkbox" id="rememberMe"/>
                <label htmlFor="rememberMe">Запомнить меня</label>
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;