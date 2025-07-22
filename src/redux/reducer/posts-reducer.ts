import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {AppDispatchType} from "../redux-store"
import posts from "../../mooks/posts.json"
import { PostsType } from "../types"

const initialState = {
    posts: [] as Array<PostsType>,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostsAc(state, action: PayloadAction<Array<PostsType>>) {
            state.posts = action.payload
        },
        addPostAc(state, action: PayloadAction<any>) { // Replace 'any' with your post type
            state.posts.push(action.payload)
        },
    },
})

export const requestPosts = (id: number | undefined) => {
    const postsNew: Array<PostsType> = posts.filter(post => post.authorId === id)
    return (dispatch: AppDispatchType) => {
        dispatch(setPostsAc(postsNew))
    }
}

export const {setPostsAc, addPostAc} = postsSlice.actions
export default postsSlice.reducer