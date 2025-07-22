export type UserType = {
    id: number;
    name: string;
    followed: boolean;
    status: string;
    photos: {
        small: string | null;
        large: string | null;
    }
}


type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    aboutMe: string | null
    contacts: ContactsType
    photos: PhotosType
}

// Type for posts

export type PostsType = {
    id: number
    authorId: number
    date: string
    text: string
    photo: string | null
}
