import React from "react";
import s from './login.module.css';
import { useForm } from 'react-hook-form';

const Login = (props: any) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data: any) => {
        props.login(data.email, data.password, data.rememberMe);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm} action="">
                <input id="email" {...register("email", { required: "Почта или логин" })} type="text" placeholder="Почта" />
                {/* {errors.email && <span className={s.error}>{errors.email.message}</span>} */}

                <input id="password" {...register("password", { required: "Пароль" })} type="password" placeholder="Пароль" />
                {/* {errors.password && <span className={s.error}>{errors.password.message}</span>} */}

                <input {...register("rememberMe")} type="checkbox" id="rememberMe"/>
                <label htmlFor="rememberMe">Запомнить меня</label>
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;