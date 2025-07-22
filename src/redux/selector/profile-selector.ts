import { RootStateType } from "../redux-store";
import {ProfileType} from "../types";

export const getProfile = (state: RootStateType): ProfileType | null => {
    return state.profile.profile;
}
export const getStatus = (state: RootStateType): string => {
    return state.profile.status;
}