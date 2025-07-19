import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { requestProfile, requestStatus, setStatus, setProfilePhoto, deleteProfilePhoto, setProfileData } from "../../redux/reducer/profile-reducer";
import { getProfile, getStatus } from "../../redux/selector/profile-selector";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { GlobalStateType } from "../../redux/redux-store";
import {useLocation} from "react-router-dom";
import { ProfileType } from "../../redux/reducer/profile-reducer";

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    requestProfile: (userId?: number) => void
    requestStatus: (userId?: number) => void
    setStatus: (status: string) => void
    setProfilePhoto: (file: File) => void
    deleteProfilePhoto: () => void
    setProfileData: (profile: ProfileType) => Promise<void>
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

const ProfileContainer = (props: ProfileContainerPropsType) =>{

    const location = useLocation();
    const userId: number = Number(location.pathname.split("/")[2]);
    const { requestProfile, requestStatus } = props;

    useEffect(() => {
        requestProfile(userId)
        requestStatus(userId)
    }, [userId, requestProfile, requestStatus])

    const isOwner: boolean = !location.pathname.split("/")[2]

    return <Profile {...props} isOwner={isOwner} />;
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
    }
}

const mapDispatchToProps = {
    requestProfile,
    requestStatus,
    setStatus,
    setProfilePhoto,
    deleteProfilePhoto,
    setProfileData
}

const ProfileContainerWithAuthRedirect = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithAuthRedirect);