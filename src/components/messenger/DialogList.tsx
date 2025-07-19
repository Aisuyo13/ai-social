import React from "react";

import s from './messenger.module.css';

const DialogList = (props: any) => {
    return (
        <div className={s.wrapper}>
            <ul className={s.dialogsList}>
                {props.state.map((userName: any, index: number) => {
                    return <li key={index} onClick={() => props.setMessages(userName)}>{userName}</li>
                })}
            </ul>
        </div>
    )
}

export default DialogList