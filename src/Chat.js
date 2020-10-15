import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader.js'
import Message from './Message.js'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setinput] = useState('');
    const [messages, setmessages] = useState([]);
    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(Snapshot => (
                setmessages(Snapshot.docs.map((doc) => doc.data()))
            ))
        }

    }, [channelId])
    const sendMesasges = e => {
        e.preventDefault();
        if(input===' '){

        }else{
            db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        }

        

        setinput('')
    }
    return (
        <div className='chat' >
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {messages.map((messages) => (
                    <Message
                        message= {messages.message}
                        user= {messages.user}
                        timestamp= {messages.timestamp}
                    />
                ))}

            </div>
            <div className="chat__input">
                <AddCircleOutlineRoundedIcon />
                <form>
                    <input value={input} onChange={e => setinput(e.target.value)} disabled={!channelId} placeholder="Type a message" />
                    <button disabled={!input} onClick={sendMesasges} type="submit">Send</button>
                </form>
                <div className="chat__messageicon">
                    <CardGiftcardRoundedIcon />
                    <GifRoundedIcon />
                    <EmojiEmotionsOutlinedIcon />
                </div>
            </div>

        </div>
    )
}

export default Chat
