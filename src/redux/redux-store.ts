import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducer/profile-reducer";
import usersReducer from "./reducer/users-reducer";
import messengerReducer from "./reducer/messenger-reducer";
import authReducer from "./reducer/auth-reducer";
import appReducer from "./reducer/app-reducer";
import postsReducer from "./reducer/posts-reducer";

const store = configureStore({
    reducer: {
        profile: profileReducer,
        users: usersReducer,
        messenger: messengerReducer,
        auth: authReducer,
        app: appReducer,
        posts: postsReducer
    },
})


export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store