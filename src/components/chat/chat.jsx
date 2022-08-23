import React, { useEffect, useState } from "react";
import MyInput from "../UI/input/MyInput";
import send from "../../assets/send.png";
import "./Chat.scss";
import dateFormat from 'dateformat';
import { useSelector } from "react-redux";
import axios from "axios";

const Chat = ({ allMessages, setAllMessages, contactsList, setContactsList }) => {
  const [value, setValue] = useState("");
  const selectUser = useSelector(state => state.contactsReducer.selectedUser);

  const fromMe = [];
  const ToMe = [];
  const [myMess, setMyMess] = useState(fromMe);
  const [userMess, setUserMess] = useState(ToMe);

  allMessages.map((msg) => {
    if (msg.contactSendId === selectUser.id && msg.contactReceiveId === 0) {
      fromMe.push(msg);
    }
    if (msg.contactSendId === 0 && msg.contactReceiveId === selectUser.id) {
      ToMe.push(msg);
    }
    return msg;
  });

  const messagesChannel = [...fromMe, ...ToMe].sort((a, b) => a.id - b.id);

  function sendMessage() {
    const newMessage = {
      id: allMessages[allMessages.length - 1].id + 1,
      text: value,
      contactSendId: 0,
      contactReceiveId: selectUser.id,
      timeadded: Date.now(),
    };
    const updated = contactsList.map((contact) =>{
      if (contact.id === selectUser.id) {
        contact.lastMesTime = Date.now();
        contact.lastText = value;
      }
      return contact;
    })
    setContactsList(
      updated.sort((a, b) => b.lastMesTime - a.lastMesTime)
    );
    setMyMess([...myMess, newMessage]);
    setAllMessages([...allMessages, newMessage]);
    setValue("");
  }

  const sendOnEnterKey = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (allMessages[allMessages.length - 1].contactSendId === 0) {
      setTimeout(getChuckJoke, 10000);
    }
  }, [allMessages.length]);

  const getChuckJoke = () => {
    axios("https://api.chucknorris.io/jokes/random").then(({ data }) => {
      console.log(data.value)
      const joke = {
        id: allMessages[allMessages.length - 1].id + 1,
        text: data.value,
        contactSendId: selectUser.id,
        contactReceiveId: 0,
        timeadded: Date.now(),
      };
      setUserMess([...userMess, joke]);
      setAllMessages([...allMessages, joke]);
      const updatedContacts = contactsList.map((contact) => {
        if (contact.id === selectUser.id) {
          contact.lastMesTime = Date.now();
          contact.lastText = data.value;
        }
        return contact;
      });
      setContactsList(
        updatedContacts.sort((a, b) => b.lastMesTime - a.lastMesTime)
      );
    });
  };

  return (
    <div className="chat">
      <div className="chat__top">
        {Object.keys(selectUser).length !== 0 ? 
          <div className="chat__top-row">
            <div className="chat__img ibg">
              <img src={selectUser.img} alt="avatar" />
            </div>
            <p className="chat__name">{selectUser.name}</p>
          </div>
         : 
          null
        }
      </div>
      <div className="chat__body">
        {messagesChannel.map((messageData) => (
          <div
            className={
              messageData.contactSendId === 0 
              ? "chat__message-container chat__message-container-your" 
              : 'chat__message-container chat__message-container-contact'
            }
            key={messageData.timeadded}
          >
            {messageData.contactSendId === 0 
              ? 
              null
              :
              <img src={selectUser.img} alt={selectUser.alt} />
            }
            <div className="chat__message">
              <div
                className={messageData.contactSendId === 0 ? 'chat__your-message' : 'chat__contact-message'}
              >
                {messageData.text}
              </div>
              <span className="chat__data">
                {dateFormat(messageData.timeadded, "paddedShortDate")}
                {", "}
                {dateFormat(messageData.timeadded, "shortTime")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="chat__footer">
        {selectUser ? (
          <MyInput
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={sendOnEnterKey}
            value={value}
            icon={send}
            description="Type your message"
            message={sendMessage}
          />
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default Chat;
