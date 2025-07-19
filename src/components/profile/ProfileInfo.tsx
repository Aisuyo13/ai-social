import React, { useState } from "react"
import ProfileData from './ProfileData'
import ProfileForm from './ProfileForm'
import { ProfileType } from "../../redux/reducer/profile-reducer"  

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    setStatus: (status: string) => void
    setProfilePhoto: (file: File) => void
    deleteProfilePhoto: () => void
    setProfileData: (formData: ProfileType) => Promise<void>
};

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false);

    return editMode 
    ? <ProfileForm
        onCancel={() => setEditMode(false)}
        setProfilePhoto={props.setProfilePhoto}
        deleteProfilePhoto={props.deleteProfilePhoto}
        profile={props.profile}
        setProfileData={props.setProfileData}
        />
    : <ProfileData
            setProfilePhoto={props.setProfilePhoto}
            deleteProfilePhoto={props.deleteProfilePhoto}
            profile={props.profile}
            status={props.status}
            setStatus={props.setStatus}
            goToEditMode={() => setEditMode(true)}
            isOwner={props.isOwner}
        />
}

export default ProfileInfo