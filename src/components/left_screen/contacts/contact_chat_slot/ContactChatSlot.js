import React, {useState} from 'react'
import './ContactChatSlot.css'

const ContactChatSlot = (props) => {
    const [chat_pfp,updateChatPfp] = useState(props.chat_pfp)
    const [chat_name,updateChatName] = useState(props.chat_name)
    const [recent_msg,updateChatRecentMsg] = useState(props.recent_msg)

    const DebugChatInfo = () => {
        console.log(chat_name,recent_msg)
    }

    return(
        <div className='contact-chat-slot-container'>
            <div className='chat-pfp'>
                <img src={chat_pfp}></img>
            </div>
            <div className='chat-name'>{chat_name}</div>
            <div className='recent-msg'>{recent_msg.msg}</div>
            <div className='time'>{recent_msg.time}</div>
            <div className='border'></div>
        </div>
    )
}

export default ContactChatSlot