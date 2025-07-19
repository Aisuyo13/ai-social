import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import Users from "./Users";
import { GlobalStateType } from "../../redux/redux-store";
import { setUsers, followUnfollowFlow } from "../../redux/reducer/users-reducer";
import { getFollowingProgress, getPageCount, getTotalUsersCount, getUsers } from "../../redux/selector/users-selector";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        followingProgress: getFollowingProgress(state),
        pageCount: getPageCount(state),
    }
}

const mapDispatchToProps = {
    setUsers,
    followUnfollowFlow
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const UsersContainer = (props: PropsFromRedux) => {

    const { pageCount, setUsers } = props;

    useEffect(() => {
        setUsers(pageCount, 20);
    }, [pageCount, setUsers]);

    return <Users
        users={props.users}
        totalUsersCount={props.totalUsersCount}
        followingProgress={props.followingProgress}
        setUsers={props.setUsers}
        followUnfollowFlow={props.followUnfollowFlow}
    />
}

export default connector(UsersContainer);