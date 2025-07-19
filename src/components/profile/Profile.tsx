import React from "react";
// import PostFormContainer from '../posts/PostFormContainer'
// import PostsContainer from '../posts/PostsContainer'
import ProfileInfo from './ProfileInfo'
import Preloader from "../common/Preloader";
import { ProfileType } from "../../redux/reducer/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    setStatus: (status: string) => void
    setProfileData: (formData: ProfileType) => Promise<void>
    setProfilePhoto: (file: File) => void
    deleteProfilePhoto: () => void
    isOwner: boolean
}

const Profile = (props: ProfilePropsType) => {

    if(props.profile) {
        return (
            <div>
                <ProfileInfo
                    setProfilePhoto={props.setProfilePhoto}
                    deleteProfilePhoto={props.deleteProfilePhoto}
                    profile={props.profile}
                    status={props.status}
                    setStatus={props.setStatus}
                    setProfileData={props.setProfileData}
                    isOwner={props.isOwner}
                />
                {/* <PostsContainer/> */}
            </div>
        )
    } else {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }
    
}

export default Profile