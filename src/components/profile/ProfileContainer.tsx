import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Profile from "./Profile";
import { requestProfile, requestStatus, setStatus,
    setProfilePhoto, deleteProfilePhoto, setProfileData } from "../../redux/reducer/profile-reducer";
import { getProfile, getStatus } from "../../redux/selector/profile-selector";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { useParams } from "react-router-dom";
import { useThunkWrap } from "../../redux/hooks";

const ProfileContainer = () => {
    
    const dispatch = useAppDispatch();
    const wrap = useThunkWrap();

    const profile = useAppSelector(getProfile);
    const status = useAppSelector(getStatus);
    const { userId } = useParams<{ userId: string }>();
    const userIdNumber = Number(userId);
    const isOwner: boolean = !userId;
    // Если userId не указан в URL, значит, это профиль текущего пользователя

    useEffect(() => {
        if (isOwner) {
            dispatch(requestProfile());
            dispatch(requestStatus());
        } else {
            dispatch(requestProfile(userIdNumber));
            dispatch(requestStatus(userIdNumber));
        }
    }, [userIdNumber, dispatch, isOwner])
    
    return <Profile
        profile={profile}
        status={status} isOwner={isOwner}
        setStatus={wrap(setStatus)}
        setProfilePhoto={wrap(setProfilePhoto)}
        deleteProfilePhoto={wrap(deleteProfilePhoto)}
        setProfileData={wrap(setProfileData)}
    />
};

const ProfileContainerWithAuthRedirect = withAuthRedirect(ProfileContainer);

export default ProfileContainerWithAuthRedirect;
