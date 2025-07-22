import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { profileApi } from "../../api/API"
import {AppDispatchType} from "../redux-store"
import { ProfileType } from "../types"

let initialState = {
    profile: null as ProfileType | null,
    status: '' as string
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileAc(state, action: PayloadAction<ProfileType>) {
            state.profile = action.payload
        },
        setStatusAc(state, action: PayloadAction<string>) {
            state.status = action.payload
        },
    },
})

export const requestProfile = (profileId?: number) => {
    return async (dispatch: AppDispatchType) => {
        try {
            const response = await profileApi.getProfile(profileId)
            dispatch(setProfileAc(response))
        } catch (error) {
            console.log(error)
        }
    }
}

export const setProfileData = (profile: ProfileType) => {
    return async (dispatch: AppDispatchType) => {
        try {
            await profileApi.setProfileData(profile)
            dispatch(requestProfile())
        } catch (error) {
            console.log(error)
        }
    }
}

export const requestStatus = (userId?: number) => {
    return async (dispatch: AppDispatchType) => {
        try {
            const res = await profileApi.getStatus(userId)
            dispatch(setStatusAc(res))
        } catch (error) {
            console.log(error)
        }
    }
}

export const setStatus = (status: string) => {
    return async (dispatch: AppDispatchType) => {
        try {
            const res = await profileApi.setStatus(status)
            if (res.resultCode === 0) {
                dispatch(requestStatus())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const setProfilePhoto = (file: any) => {
    return async (dispatch: AppDispatchType) => {
        try {
            const response = await profileApi.setProfilePhoto(file)
            if (response.resultCode === 0) {
                dispatch(requestProfile())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteProfilePhoto = () => {
    return async (dispatch: AppDispatchType) => {
        try {
            const response = await profileApi.deleteProfilePhoto()
            if (response.resultCode === 0) {
                dispatch(requestProfile())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const { setProfileAc, setStatusAc } = profileSlice.actions
export default profileSlice.reducer