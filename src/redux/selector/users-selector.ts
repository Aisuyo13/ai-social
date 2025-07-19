import {GlobalStateType} from "../redux-store";
import {UserType} from "../reducer/users-reducer";

export const getUsers = (state: GlobalStateType): Array<UserType> => {
    return state.users.users;
}
export const getTotalUsersCount = (state: GlobalStateType): number => {
    return state.users.totalUsersCount;
}
export const getPageCount = (state: GlobalStateType): number => {
    return state.users.pageCount;
}
export const getFollowingProgress = (state: GlobalStateType): number[] => {
    return state.users.followingUsers;
}