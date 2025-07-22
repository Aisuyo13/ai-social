import React from "react";
import { useRef } from "react";
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
    }, [props.profile, reset]);

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
        <form className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md mb-8" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl">Редактировать профиль</h2>
            <button
                type="button"
                onClick={props.onCancel}
                className="self-start text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition"
            >
                Отменить
            </button>
            <input
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-base w-full box-border bg-white dark:bg-gray-700 text-black dark:text-white font-sans shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                {...register("fullName")}
                placeholder="Имя"
            />
            <div className="relative inline-block w-fit group">
                <img
                    className="w-[300px] h-[300px]"
                    src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto}
                    alt="фото профиля"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col gap-1 bg-black/60 p-2 rounded-lg">
                    <button
                      type="button"
                      onClick={handleButtonClick}
                      className="bg-white border-none px-3 py-1.5 rounded text-sm cursor-pointer transition-colors hover:bg-gray-200"
                    >
                      Сменить фото
                    </button>
                    <button
                      onClick={props.deleteProfilePhoto}
                      className="bg-white border-none px-3 py-1.5 rounded text-sm cursor-pointer transition-colors hover:bg-gray-200"
                    >
                      Удалить
                    </button>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <textarea
                {...register("aboutMe")}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-base bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition font-sans shadow"
                placeholder="Обо мне"
                rows={4}
            />
            <div>
                <label className="inline-flex items-center space-x-2 text-gray-800 dark:text-gray-100 font-sans">
                    <input
                        type="checkbox"
                        {...register("lookingForAJob")}
                        className="form-checkbox h-5 w-5 text-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span>Ищу работу</span>
                </label>
            </div>
            <textarea
                {...register("lookingForAJobDescription")}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-base bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition font-sans shadow"
                placeholder="Описание работы, которую ищете"
                rows={4}
            />
            <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100 font-sans">Контакты</h3>
                {Object.keys(props.profile.contacts).map((key) => (
                    <div key={key} className="mb-2 flex flex-col">
                        <label className="mb-1 text-sm text-gray-600 dark:text-gray-300 font-sans">{key}:</label>
                        <input
                            type="text"
                            {...register(`contacts.${key}`)}
                            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition font-sans shadow"
                        />
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="self-end bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 font-sans shadow"
            >
                Сохранить
            </button>
        </form>
    );
}

export default ProfileForm;