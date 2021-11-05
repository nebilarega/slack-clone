import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db, { rooms } from "./firebase";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { uuid } from "uuidv4";

export default function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const setChannel = () => {
    if (id) {
      history.push(`/rooms/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = (channelName) => {
    setDoc(doc(db, "rooms", uuid()), {
      name: channelName,
    });
    if (channelName != null) {
      console.log("Not null");
    }
  };
  return (
    <div
      className="sidebarOptions"
      onClick={() => {
        if (addChannelOption) {
          const channelName = prompt("Please Enter Channel Name");
          addChannel(channelName);
        } else {
          setChannel();
        }
      }}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}
