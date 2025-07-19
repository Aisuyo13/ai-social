import { usersApi } from "../../api/API";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {AppDispatchType} from "../redux-store";

export type UserType = {
    id: number;
    name: string;
    followed: boolean;
    status: string;
    photos: {
        small: string | null;
        large: string | null;
    };
};

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageCount: 1,
    pageSize: 20,
    followingUsers: [] as Array<number>
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersAc(state, action: PayloadAction<Array<UserType>>) {
            state.users = action.payload;
        },
        setTotalUsersCountAc(state, action: PayloadAction<number>) {
            state.totalUsersCount = action.payload;
        },
        followUnfollowFlowAc(state, action: PayloadAction<number>) {
            const user = state.users.find(user => user.id === action.payload);
            if (user) {
                user.followed = !user.followed;
            }
        },
        toggleFollowingProgressAc(state, action: PayloadAction<number>) {
            if (state.followingUsers.includes(action.payload)) {
                state.followingUsers = state.followingUsers.filter(id => id !== action.payload);
            } else {
                state.followingUsers.push(action.payload);
            }
        }
    }
});

export const setUsers = (currentPage: number, pageSize?: number) => {
    return async (dispatch: AppDispatchType) =>  {
        try {
            const res = await usersApi.getUsers(currentPage, pageSize)
            dispatch(setUsersAc(res.items))
            dispatch(setTotalUsersCountAc(res.totalCount))
        } catch (error) {
            console.error(error);
        }
    }
}

export const followUnfollowFlow = (user: UserType) => {
    return async (dispatch: AppDispatchType) =>  {
        try {
            dispatch(toggleFollowingProgressAc(user.id))
            let res
            if (!user.followed) {
                res = await usersApi.follow(user.id)
            }
            if (user.followed) {
                res = await usersApi.unfollow(user.id)
            }
            if (res && res.resultCode === 0) {
                dispatch(followUnfollowFlowAc(user.id))
            }
            dispatch(toggleFollowingProgressAc(user.id))
        } catch (error) {
            console.error(error);
        }
    }
}

export const { setUsersAc, setTotalUsersCountAc, followUnfollowFlowAc, toggleFollowingProgressAc } = usersSlice.actions;
export default usersSlice.reducer;