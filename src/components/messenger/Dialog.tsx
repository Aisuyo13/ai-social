import React from "react";

import s from './messenger.module.css'

const Dialog = (props: any) => {

    if (props.state) {
        const messages = props.state.map((message: any) => {
            return (
                <div>{message.text}</div>
            )
        })
    }
    
    return (
        <div className={s.wrapper}>
            Dialog
        </div>
    )
}

export default Dialog