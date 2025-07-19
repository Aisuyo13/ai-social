import { NavLink } from "react-router-dom";
import defaultPhoto from '../../assets/svg/avatar-default-svgrepo-com.svg'
import s from './users.module.css'
import {UserType} from "../../redux/reducer/users-reducer";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    followingProgress: Array<number>
    setUsers: (page: number, pageSize: number) => void
    followUnfollowFlow: (user: UserType) => void
}

const Users = (props: PropsType) => {
    return (
        <div>
            <h2>Users</h2>
            <ul className={s.pagination}>
                {Array.from({ length: 10 }, (_, i: number) => (
                    <li onClick={() => {props.setUsers(i + 1, 30)}} className={s.pagination_item} key={i}>{i + 1}</li>
                ))}
            </ul>
            {props.users.map((user: UserType) => {
                return (
                    <div key={user.id}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={s.user_photo} src={user.photos.small ? user.photos.small : defaultPhoto} alt="" />
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </NavLink>
                        {!user.followed
                            ? <button disabled={props.followingProgress.some((id: number) => id === user.id)}
                            onClick={() => {props.followUnfollowFlow(user)}}>follow</button>
                            
                            : <button disabled={props.followingProgress.some((id: number) => id === user.id)}
                            onClick={() => {props.followUnfollowFlow(user)}}>unfollow</button>}
                    </div>
                )
            })}
        </div>
    )
}

export default Users