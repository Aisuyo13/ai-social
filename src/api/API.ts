import axios from "axios";
import { AxiosResponse } from 'axios';
import {ProfileType} from "../redux/reducer/profile-reducer";
import {UserType} from "../redux/reducer/users-reducer";

type APIResponseType<T> = {
    resultCode: number
    messages: string[]
    fieldsErrors: Array<{ field: string; error: string }>
    data: T
}

type GetUsersResponseType = {
    error: null | string
    totalCount: number
    items: Array<UserType>
}

type AuthResponseType = {
    id: number
    email: string
    login: string
}

type EmptyResponse = APIResponseType<{}>;

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4f51ac17-594c-46ff-a3c3-25a4ef18bf27"
    }
})

export const usersApi = {
    async getUsers(currentPage = 1, pageSize = 20) {
        const res: AxiosResponse<GetUsersResponseType> = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return res.data
    },
    async follow(userId: number): Promise<EmptyResponse> {
        const res: AxiosResponse<EmptyResponse> = await instance.post(`follow/${userId}`)
        return res.data
    },
    async unfollow(userId: number): Promise<EmptyResponse> {
        const res: AxiosResponse<EmptyResponse> = await instance.delete(`follow/${userId}`)
        return res.data
    },
}

export const profileApi = {

    async getProfile(userId: number | null = null) {
        if (!userId) {
            const res: AxiosResponse = await instance.get("auth/me")
            const userId: string = res.data.data.id;
            const res2: AxiosResponse = await instance.get("profile/" + userId)
            return res2.data;
        } else {
            const res: AxiosResponse = await instance.get("profile/" + userId)
            return res.data;
        }
    },

    async setProfileData(profile: ProfileType) {
        const res: AxiosResponse<EmptyResponse> = await instance.put(`profile`, profile)
        return res.data;
    },

    async getStatus(userId: number | null = null): Promise<string> {
        if (!userId) {
            const res: AxiosResponse = await instance.get("auth/me")
            const userId: string = res.data.data.id;
            const res2: AxiosResponse<string> = await instance.get(`profile/status/${userId}`)
            return res2.data;
        }
        const res: AxiosResponse<string> = await instance.get(`profile/status/${userId}`)
            return res.data;
    },

    async setStatus(status: string) {
        const res: AxiosResponse<EmptyResponse> = await instance.put(`profile/status`, {status: status})
        return res.data;
    },

    async setProfilePhoto(photo: File) {
        const formData = new FormData();
        formData.append("image", photo);
        const res: AxiosResponse<EmptyResponse> = await instance.put(`profile/photo`, formData)
        return res.data;
    },

    async deleteProfilePhoto() {
        const res: AxiosResponse<EmptyResponse> = await instance.delete(`profile/photo`)
        return res.data;
    }

}

export const authApi = {
    async getAuth() {
        const res: AxiosResponse<APIResponseType<AuthResponseType>> = await instance.get("auth/me")
        return res.data;
    },
    async login(email: string, password: string, rememberMe = false) {
        const res: AxiosResponse<APIResponseType<AuthResponseType>> = await instance.post("auth/login", {email, password, rememberMe})
        return res.data;
    },
    async logout() {
        const res: AxiosResponse<EmptyResponse> = await instance.delete("auth/login")
        return res.data;
    }
}