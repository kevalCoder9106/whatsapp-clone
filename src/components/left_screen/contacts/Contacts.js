import './Contacts.css'
import ContactChatSlot from './contact_chat_slot/ContactChatSlot'

/*
    temporary imports
*/
import chat_pfp from './img/pfp.jpg'

const Contacts = () => {
    return(
        <div className='contacts-container'>
            <div className='contacts-list-container'>
                <ContactChatSlot chat_pfp={chat_pfp} chat_name={"Keval"} recent_msg={{msg:"Hi",time:"09:45"}} />
                <ContactChatSlot chat_pfp={chat_pfp} chat_name={"Keval"} recent_msg={{msg:"Hi",time:"09:45"}} />
                <ContactChatSlot chat_pfp={chat_pfp} chat_name={"Keval"} recent_msg={{msg:"Hi",time:"09:45"}} />
                <ContactChatSlot chat_pfp={chat_pfp} chat_name={"Keval"} recent_msg={{msg:"Hi",time:"09:45"}} />
            </div> 
        </div>
    )
}

export default Contacts