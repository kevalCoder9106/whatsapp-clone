import './UserProfile.css'
import status_icon from './img/status.png'
import chat_icon from './img/chat2.png'
import options_icon from './img/options2.png'

/* 
    temporary import
*/
import pfp from './img/pfp2.jpg'

const UserProfile = () => {
    return(
        <div className='profile-container'>
            <img src={pfp} className='img-pfp'></img>
            <div className='other-options'>
                <button>
                    <img src={status_icon} alt='status' className='icon'></img>
                </button>
                <button>
                    <img src={chat_icon} alt='contacts' className='icon'></img>
                </button>
                <button>
                    <img src={options_icon} alt='other' className='icon'></img>
                </button>
            </div>
        </div>
    )
}

export default UserProfile