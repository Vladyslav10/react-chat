import React from 'react';
import './App.css';
import Chat from './components/chat/Chat.jsx';
import Contacts from './components/contacts/Contacts.jsx';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="row">
          <div className="row__column row__column-contacts">
            <Contacts/>
          </div>
          <div className="row__column row__column-chat">
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
