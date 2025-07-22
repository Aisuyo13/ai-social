import {RootStateType} from "../redux-store" 
import {UserType} from "../types";

export const getUsers = (state: RootStateType): Array<UserType> => {
    return state.users.users;
}
export const getTotalUsersCount = (state: RootStateType): number => {
    return state.users.totalUsersCount;
}
export const getPageCount = (state: RootStateType): number => {
    return state.users.pageCount;
}
export const getFollowingProgress = (state: RootStateType): number[] => {
    return state.users.followingUsers;
}