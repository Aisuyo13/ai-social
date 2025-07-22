import React from "react";
import { buttonStyle } from "../../shared/styles/tailWindStyles";

const PostForm = () => {

    return (
        <div className="mb-5">
            <div className="flex items-center justify-between">
                <h5 className="font-semibold text-3xl">Создать пост</h5>
            </div>
            <form className="mt-4">
                <textarea
                    className="w-full p-3 border bg-gray-100 dark:border-gray-600 rounded-3xl
                    dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-500 placeholder-gray-400 dark:placeholder-gray-500 transition"
                    placeholder="Напишите что-нибудь..."
                    rows={4}
                />
                <div className="mt-4 flex justify-end">
                    <button type="submit" className={buttonStyle.fancy}>
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostForm