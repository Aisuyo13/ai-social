import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
// import {GlobalStateType} from "../../redux/redux-store";

// let mapStateToProps = (state: GlobalStateType) => {
//     return {
//         postsGenerate: <state className="profile">{state.profile.posts.map((obj) => {
//             return <div>{obj.text}</div>
//         })}</state>
//     }
// }

const PostsContainer = connect()(Posts)

export default PostsContainer