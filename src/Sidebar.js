import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import { Avatar, IconButton } from '@material-ui/core';
import MicOffIcon from '@material-ui/icons/MicOff';
import HeadsetIcon from '@material-ui/icons/Headset';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import db, { auth } from './firebase';


function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setchannel] = useState([]);
    // const [pass, setpass] = useState('')

    useEffect(() => {
        db.collection('channels').onSnapshot(Snapshot => (
            setchannel(Snapshot.docs.map(docs => ({
                id: docs.id,
                channel: docs.data()
            })))
        ))
    }, [])
    const addChannel = e => {
        const channelName = prompt('Enter Channel Name');
        const password = prompt('Create Password');
        // setpass(password);

        // console.log(pass);

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
                pass: password
            })
        }

    }
    return (
        <div className='sidebar' >

            <div className='sidebar__top' >
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>
            <detail className="sidebar__channels">
                <summary className="sidebar__channelheader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={addChannel} className="sidebar__addchannel" />
                </summary>
                <div className="sidebar__channellist">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} pass={channel.pass} id={id} channelName={channel.channelName} />
                    ))}

                </div>
            </detail>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceicon" fontSize='large' />
                <div className="sidebar__voiceinfo">
                    <h3>Voice Not Connected</h3>
                    <p>Stream(Not Available)</p>
                </div>
                <div className="sidebar__voiceicons">
                    <InfoOutlinedIcon />
                    <CallRoundedIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src={user.photo} />
                <div className="sidebar__profileinfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 7)}</p>
                </div>

                <div className="sidebar__profileicons">
                    <MicOffIcon />
                    <HeadsetIcon />
                </div>
                <p className='logout' >
                    log out
                    <IconButton onClick={() => { auth.signOut() }}>

                        <ExitToAppOutlinedIcon />
                    </IconButton>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
