import React from "react";
import { useRef } from "react";
import s from './profile.module.css';
import defaultUserPhoto from "../../assets/svg/avatar-default-svgrepo-com.svg";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProfileForm = (props: any) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
      if (props.profile) {
        reset({
          fullName: props.profile.fullName || "",
          aboutMe: props.profile.aboutMe || "",
          lookingForAJob: props.profile.lookingForAJob || false,
          lookingForAJobDescription: props.profile.lookingForAJobDescription || "",
          contacts: props.profile.contacts || {},
        });
      }
    }, [props.profile]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            props.setProfilePhoto(file);
        }
    };

    const onSubmit = (data: any) => {
        props.setProfileData(data)
        props.onCancel();
    };

    return (
        <form className={s.profileForm} onSubmit={handleSubmit(onSubmit)}>
            <h2>Редактировать профиль</h2>
            <button type="button" onClick={props.onCancel}>Отменить</button>
            <input className={s.nameInput} type="text" {...register("fullName")} />
            <div className={s.photoWrapper}>
                <img
                    className={s.userPhoto}
                    src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto}
                    alt="фото профиля"
                />
                <div className={s.photoActions}>
                    <button onClick={handleButtonClick}>Сменить фото</button>
                    <button onClick={props.deleteProfilePhoto}>Удалить</button>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <textarea {...register("aboutMe")} />
            <div>
                <label>
                    <input type="checkbox" {...register("lookingForAJob")} />
                    Ищу работу
                </label>
            </div>
            <textarea {...register("lookingForAJobDescription")} />
            <div>
                <h3>Контакты</h3>
                {Object.keys(props.profile.contacts).map((key) => (
                    <div key={key}>
                        <label>{key}:</label>
                        <input
                            type="text"
                            {...register(`contacts.${key}`)}
                        />
                    </div>
                ))}
            </div>
            <button type="submit">Сохранить</button>
        </form>
    );
}

export default ProfileForm;