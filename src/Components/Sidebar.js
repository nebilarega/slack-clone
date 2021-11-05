import React from 'react'
import './Sidebar.css'
import { useState, useEffect } from 'react'
import SidebarOption from './SidebarOption'
import FiberManualRecordeIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import db  from './firebase'
import { rooms } from './firebase'
import { collection, getDoc, doc, onSnapshot} from 'firebase/firestore'



export default function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(()=>{
        onSnapshot(rooms, snapshots=>{
            setChannels(
                snapshots.docs.map(doc => ({
                        id: doc.id,
                        name: doc.data().name,
                    }
                ))
            );
        })
    },[])
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="siderbar__info">
                    <h2 className="nebil__arega">
                        Nebil Arega
                    </h2>
                    <h3>
                        <FiberManualRecordeIcon />
                        Nebil
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title={"Snake"}/>  
            <SidebarOption Icon={InboxIcon} title={"Mentions & Reactions"}/>
            <SidebarOption Icon={DraftsIcon} title={"Saved Items"}/>
            <SidebarOption Icon={BookmarkBorderIcon} title={"Channel Browser"}/>
            <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"}/>
            <SidebarOption Icon={AppsIcon} title={"Apps"}/>
            <SidebarOption Icon={FileCopyIcon} title={"File browser"}/>
            <SidebarOption Icon={ExpandLessIcon} title={"Show less"}/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption="Something" title="Add Channel"/>
            <hr />
            <div className="somecontainer">
                {channels.map((channel, id) => {
                    return (
                        <SidebarOption title={channel.name} key={id} id={channel.id}/>
                    )
                    }
                )}
            </div>
        </div>
    )
}
