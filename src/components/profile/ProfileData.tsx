import React, { useRef } from "react";
import defaultUserPhoto from "../../assets/svg/avatar-default-svgrepo-com.svg";
import ProfileStatus from './ProfileStatus'
import s from './profile.module.css';
import { ProfileType } from "../../redux/reducer/profile-reducer";

type PropsType = {
    setProfilePhoto: (file: File) => void
    deleteProfilePhoto: () => void
    profile: ProfileType
    status: string
    setStatus: (status: string) => void
    goToEditMode: () => void
    isOwner: boolean
}

const ProfileData = (props: PropsType) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
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
                    {Object.entries(props.profile.contacts).map(([key, value]: [string, string | null]) => (
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