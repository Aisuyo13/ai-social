import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import Users from "./Users"
import { setUsers, followUnfollowFlow } from "../../redux/reducer/users-reducer"
import { getFollowingProgress, getPageCount, getTotalUsersCount, getUsers } from "../../redux/selector/users-selector"

const UsersContainer = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(getUsers);
    const totalUsersCount = useAppSelector(getTotalUsersCount);
    const followingProgress = useAppSelector(getFollowingProgress);
    const pageCount = useAppSelector(getPageCount);

    const onSetUsers = (page: number, pageSize: number) => {
        dispatch(setUsers(page, pageSize))
    }

    const onFollowUnfollowFlow = (userId: number) => {
        dispatch(followUnfollowFlow(userId))
    }

    useEffect(() => {
        dispatch(setUsers(pageCount, 20))
    }, [pageCount, dispatch])

    return <Users
        users={users}
        totalUsersCount={totalUsersCount}
        followingProgress={followingProgress}
        setUsers={onSetUsers}
        followUnfollowFlow={onFollowUnfollowFlow}
    />
}

export default UsersContainer