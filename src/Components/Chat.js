import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StartBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db, { rooms } from "./firebase";
import {
  collection,
  getDoc,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  useEffect(() => {
    getDoc(doc(db, "rooms", roomId)).then((docSnap) => {
      if (docSnap) {
        setRoomDetails(docSnap.data());
      }
    });
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StartBorderOutlinedIcon />
          </h4>
        </div>
        <div className="char__headerRight">
          <InfoOutlinedIcon />
          <div> Details </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
