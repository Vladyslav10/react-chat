import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import send from "../../assets/send.png";
import "./Chat.scss";
import { useSelector } from "react-redux";
//import {} from '';
import { db } from "../..";

const Chat = (props) => {
  const contactsList = useSelector((state) => state.contactsReducer.contacts);
  const [value, setValue] = useState('');
  const contactId = useSelector((state) => state.contactsReducer.id);
  const curContact = contactsList[contactId - 1];

  /*
  const [messages, loading] = (
    db.collection('messages').orderBy('createdAt')
  );
  */
  function sendMessage() {
    /*
    firestore.collection('messages').add({
      id: contactsList.id,
      name: contactsList.name,
      text: value,
      //createdAt: firebase.firestore.F
    })
    */
   console.log(value);
    setValue('');
  }; 

  return (
    <div className="chat">
      <div className="chat__top">
        {contactId > 0 ? (
          <div className="chat__top-row">
            <div className="chat__img ibg">
              <img src={curContact.img} alt="avatar" />
            </div>
            <p className="chat__name">{curContact.name}</p>
          </div>
        ) : (
          <div className="chat__top-row"></div>
        )}
      </div>
      <div className="chat__body">
            {contactsList.map(el =>(
                <div 
                    key={el.id} 
                    id={el.id} 
                    className={contactId === el.id ? "tabulation__block active" : "tabulation__block"}
                >
                </div>
            ))}
      </div>
      <div className="chat__footer">
        {contactId > 0 ? (
          <MyInput
            onChange={e => setValue(e.target.value)}
            value={value} 
            icon={send} 
            description="Type your message" 
            message={sendMessage}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Chat;
