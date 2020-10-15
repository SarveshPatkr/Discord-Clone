import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({ message, timestamp, user }) {
    return (
        <div className='message' >
            <Avatar src={user.photo} />
            <div className="message__info">
                <p>
                    {user.displayName}
                    <span className="message__timestamp">{
                        new Date(timestamp?.toDate()).toUTCString()
                    }</span>
                </p>
                <h3>{message}</h3>
            </div>
        </div>
    )
}

export default Message
