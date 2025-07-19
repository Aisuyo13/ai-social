import React from "react";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { GlobalStateType } from "../../redux/redux-store";

const actionCreatorEditTextArea = (value: any) => {
    return {
        type: 'EDIT_TEXT',
        value: value
    }
}

const actionCreatorAddPost = (value: any) => {
    return {
        type: 'ADD_POST',
        value: value
    }
}


const mapStateToProps = (state: GlobalStateType) => {
    return {
        textPost: state.profile.status
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddPost: (text: string) => {
            dispatch(actionCreatorAddPost(text))
            dispatch(actionCreatorEditTextArea(''))
        },
        onChangeTextArea: (text: string) => {
            dispatch(actionCreatorEditTextArea(text))
        }
    }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)


export default PostFormContainer