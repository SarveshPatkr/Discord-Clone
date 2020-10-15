import React from 'react';
import './ChatHeader.css'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';


function ChatHeader( { channelName }) {
    return (
        <div className='chatheader' >
            <div className="chatheader__left">
            <h4><span className="chatheader__hash">#</span>{channelName}</h4>
            </div>
            <div className="chatheader__right">
                <NotificationsOffIcon/>
                <LocationOffIcon/>
                <PeopleAltRoundedIcon/>
                <div className="chatheader__search">
                    <input type="text" placeholder="Search (Do not work yet)" />
                    <SearchIcon/>
                </div>
                <SendIcon/>
                <HelpIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
