import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/chat/Chat.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import { contacts } from './utils/contact';
import { getLocalStorageItem, setLocalStorageItem } from './utils/loacalStorage';
import { contactsChat } from './utils/messages'


function App() {
  const [allMessages, setAllMessages] = useState(
    getLocalStorageItem("messages") || contactsChat
  );
  const [contactsList, setContactsList] = useState(
    getLocalStorageItem("contacts") || contacts
  );

  useEffect(() => {
    setLocalStorageItem("messages", allMessages);
  }, [allMessages]);

  useEffect(() => {
    setLocalStorageItem("contacts", contactsList);
  }, [contactsList]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="row">
          <div className="row__column row__column-contacts">
            <Contacts
              contactsList={contactsList}
              allMessages={allMessages}
            />
          </div>
          <div className="row__column row__column-chat">
            <Chat
              allMessages={allMessages}
              setAllMessages={setAllMessages}
              contactsList={contactsList}
              setContactsList={setContactsList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
