import React from "react";
import './RightScreen.css'
import ChatProfile from "./chat_profile/ChatProfile";
import Chat from "./chat/Chat";
import UserInput from "./user_input_area/UserInput";

const RightScreen = () => {
    return(
        <div className="right-container">
            <ChatProfile/>
            <Chat/>
            <UserInput/>
        </div>
    )
}

export default RightScreen