import React, { useRef } from "react";
import defaultUserPhoto from "../../assets/svg/avatar-default-svgrepo-com.svg";
import ProfileStatus from './ProfileStatus'
import s from './profile.module.css';

const ProfileData = (props: any) => {

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

    return (
        <div>
            {props.isOwner && (<button onClick={props.goToEditMode}>Редактировать профиль</button>)}
            <h2>{props.profile?.fullName}</h2>
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
            <ProfileStatus isOwner={props.isOwner} setStatus={props.setStatus} status={props.status}/>
            <div>
                <h3>Описание</h3>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div>
                <h5>{props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}</h5>
                {props.profile.lookingForAJob && (
                    <p><strong>Навки:</strong> {props.profile.lookingForAJobDescription || "Нет информации"}</p>
                )}
            </div>
            <div>
                <h3>Контакты</h3>
                <ul>
                    {Object.entries(props.profile.contacts).map(([key, value]: [string, any]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value || "Нет информации"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProfileData;