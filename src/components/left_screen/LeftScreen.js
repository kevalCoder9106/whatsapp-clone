import './LeftScreen.css'
import UserProfile from './user_profile/UserProfile'
import SearchContacts from './search_contacts/SearchContacts'
import Contacts from './contacts/Contacts'

const LeftScreen = () => {
    return(
        <div className='left-container'>
            <div className='left-list-container'>
                <UserProfile/>
                <SearchContacts/>
                <Contacts/>
            </div>
            <div className='border'></div>
        </div>
    )
}

export default LeftScreen