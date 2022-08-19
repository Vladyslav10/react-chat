import React from "react";
import MyInput from "../UI/input/MyInput";
import send from '../../assets/send.png';
import './chat.scss';
import { useSelector } from "react-redux";

const Chat = (props) => {
    const contactsList = useSelector((state) => state.contactsReducer.contacts);
    const contactId = useSelector((state) => state.contactsReducer.id);
    const curContact = contactsList[contactId - 1];

    return (
        <div className="chat">
            <div className="chat__top">
                {contactId > 0
                    ?
                    <div className="chat__top-row">
                        <div className="chat__img ibg">
                            <img src={curContact.img} alt="avatar" />
                        </div>
                        <p className="chat__name">{curContact.name}</p>
                    </div>
                    :
                    <div className="chat__top-row"></div>
                }
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">
                {contactId > 0
                    ?
                    <MyInput    
                        icon={send} 
                        description="Type your message" 
                    />
                    :
                    <div></div>
                } 
            </div>
        </div>
    )
}

export default Chat;