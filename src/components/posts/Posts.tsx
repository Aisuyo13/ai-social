import React from "react";
import { PostsType } from "../../redux/types";

type PostsPropsType = {
    posts: Array<PostsType>
}

const Posts = (props: PostsPropsType) => {
    if (props.posts.length === 0) {
        return <div className="text-center text-gray-500">Нет постов"_"</div>;
    }
    return (
        <div>
            {props.posts.map((post: PostsType) => (
                <div key={post.id} className="mb-4 p-4 border rounded-lg bg-white dark:bg-gray-800">
                    <p className="text-gray-700 dark:text-gray-300">{post.text}</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Автор: {post.id}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Дата: {new Date(post.date).toLocaleDateString()}</span>
                    {post.photo && (
                        <img src={post.photo} alt="Пост" className="mt-2 max-w-full h-auto rounded-lg" />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Posts