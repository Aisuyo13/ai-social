import React, { useRef, useState } from "react";
import defaultUserPhoto from "../../assets/svg/avatar-default-svgrepo-com.svg";
import ProfileStatus from './ProfileStatus'
import { ProfileType } from "../../redux/types"
import { buttonStyle } from "../../shared/styles/tailWindStyles";

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

    const [isExpanded, setIsExpanded] = useState(false)

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
        <div className="mb-10">
            {props.isOwner && (
                <div 
                    className="flex justify-end mb-4">

                    <h2 className="text-2xl font-semibold">{props.profile?.fullName}</h2>

                    <button className={buttonStyle.primary + " ml-auto"} onClick={props.goToEditMode}>
                        Редактировать профиль
                    </button>

                </div>
            )}
            <div className=" mb-7">
                <img
                    className="max-w-[200px] rounded-[65px] -ml-6"
                    src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto}
                    alt="фото профиля"
                />
                {props.isOwner && (
                    <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 hidden flex-col gap-[5px] bg-black/60 p-2 rounded group-hover:flex">
                        <button onClick={handleButtonClick}>Сменить фото</button>
                        <button onClick={props.deleteProfilePhoto}>Удалить</button>

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>)}
            </div>
            <ProfileStatus isOwner={props.isOwner} setStatus={props.setStatus} status={props.status}/>
            <div className="mb-5">
                <h4 className="font-semibold text-gray-500 mb-3">Описание</h4>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div className="mb-5">
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden transform ${
                      isExpanded ? "opacity-100 max-h-[500px] scale-100" : "opacity-0 max-h-0 scale-95"}`}>
                  <div className="mb-10">
                    <h4 className="font-semibold text-gray-500 mb-3 flex items-center gap-2">
                        Навки:
                        <span className="text-gray-600 ">{props.profile.lookingForAJob ? "В поисках работы!" : "Не в поисках работы!"}</span>
                    </h4>
                    {props.profile.lookingForAJob && (
                    <p className="mb-1">{props.profile.lookingForAJobDescription || "Нет информации"}</p>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500 mb-3">Контакты:</h4>
                    <ul>
                        {Object.entries(props.profile.contacts).map(([key, value]: [string, string | null]) => {
                            if (!value) return null;
                            return (
                                <li key={key} className="mb-2 flex">
                                    <span className="font-semibold min-w-[120px]">{key}:</span> {value}
                                </li>
                            );
                        })}
                    </ul>
                  </div>
                </div>
                <button className={buttonStyle.ghost} onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Скрыть" : "Показать"} дополнительные сведения
                </button>
            </div>
        </div>
    )
}

export default ProfileData;