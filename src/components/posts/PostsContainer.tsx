import React, { useEffect } from "react";
import PostForm from './PostForm';
import Posts from './Posts';
import { requestPosts } from "../../redux/reducer/posts-reducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPosts } from "../../redux/selector/posts-selector";

type PostsContainerPropsType = {
    isOwner: boolean;
}

const PostsContainer = (props: PostsContainerPropsType) => {

    const dispatch = useAppDispatch();

    const id: number | undefined = useAppSelector(state => state.profile.profile?.userId)

    useEffect(() => {
        dispatch(requestPosts(id));
    } , [dispatch, id]);

    const posts = useAppSelector(getPosts)

    return (
        <div>
            {props.isOwner && <PostForm />}
            <Posts posts={posts} />
        </div>
    )

}

export default PostsContainer