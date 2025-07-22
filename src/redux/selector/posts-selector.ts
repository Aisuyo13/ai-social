import { RootStateType } from "../redux-store";


export const getPosts = (state: RootStateType) => {
    return state.posts.posts;
}