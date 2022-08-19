import React, { useMemo, useState } from "react";
import iconSearch from "../../assets/search.jpg";
import { useSelector } from "react-redux";
import MyInput from "../UI/input/MyInput";
import personal from '../../assets/personal.jpg'
import "./Contacts.scss";

const Contacts = () => {
  const contactsList = useSelector((state) => state.contactsReducer.contacts);
  const [searchQuery, setSeachQuery] = useState('');
  const searchContacts = useMemo(() => {
    if(searchQuery) {
        return [...contactsList].filter(el => el.name.toLowerCase().includes(searchQuery.toLowerCase()));
    } return contactsList;
}, [searchQuery, posts]);
  console.log(searchContacts)

  return (
    <div className="chat">
        <div className="chat__main">
            <div className="chat__img ibg">
                <img src={personal} alt="personal avatar" />
            </div>
            <MyInput value={seachQuery} onChange={e => setSeachQuery(e.target.value)} icon={iconSearch} description="Search or start new chat" />
        </div>
        <div className="chat__contacts">
            <h2 className="chat__title">Chats</h2>
            <div className="chat__list">
                
            </div>
        </div>
    </div>
  );
};

export default Contacts;
