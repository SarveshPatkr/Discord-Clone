import React from 'react'
import './SidebarChannel.css';
import { setChannelInfo } from './features/appSlice';
import { useDispatch } from 'react-redux';

function SidebarChannel({ id, channelName, pass }) {
    const dispatch = useDispatch();
    const verify = () => {
        var password = prompt('Enter Room Pasword');
        console.log(password);
        console.log(pass);
        if (pass === password) {
            
            dispatch(setChannelInfo({
                channelId: id,
                channelName: channelName,
            }))
        } else {
            alert('Wrong Password');
        }

    }


    return (
        <div className="sidebar__channel" onClick={verify}>
            <h4><span className="sidebarchannel__hash">#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
