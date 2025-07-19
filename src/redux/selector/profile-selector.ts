import { GlobalStateType } from "../redux-store";
import {ProfileType} from "../reducer/profile-reducer";

export const getProfile = (state: GlobalStateType): ProfileType | null => {
    return state.profile.profile;
}
export const getStatus = (state: GlobalStateType): string => {
    return state.profile.status;
}