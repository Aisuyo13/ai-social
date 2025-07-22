import React, { useEffect, useState } from "react";

type PropsType = {
    isOwner: boolean
    setStatus: (status: string) => void
    status: string
}

const defaultStatus = "No status"

const ProfileStatus = (props: PropsType) => {
    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status ?? defaultStatus);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const toggleEditMode = () => {
        if (editMode) {
            props.setStatus(status.trim());
            setEditMode(false);
        } else {
            setEditMode(true);
        }
    };

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.value;
        setStatus(newStatus);
    }

    if (!props.isOwner) {
        return <span>{props.status || defaultStatus}</span>;
    }

    return (
        <div className="mb-4 p-2 w-[50%] bg-gray-100 rounded-xl">
            {editMode
            ? <input className="w-full rounded-xl border bg-gray-100 border-gray-100 focus:outline-none focus:ring-0 transition"
            onChange={onStatusChange} autoFocus={true} onBlur={toggleEditMode} value={status} />

            : <span className="inline-block w-full rounded-xl" onDoubleClick={toggleEditMode}>{status || defaultStatus}</span>
            }
        </div>
    );
}

export default ProfileStatus;