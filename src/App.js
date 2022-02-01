import './App.css';
import LeftScreen from './components/left_screen/LeftScreen';
import RightScreen from './components/right_screen/RightScreen';

/*
  Structure
    App.js
      LeftScreen.js
        UserProfile.js
        SearchContacts.js
        Contacts.js
      RightScreen.js
        ChatProfile.js
        Chat.js
        UserInputArea.js
*/

function App() {
  return (
    <div className='main-container'>
      <LeftScreen/>
      <RightScreen/>
    </div>
  );
}

export default App;
