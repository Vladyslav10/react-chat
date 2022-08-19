import React, { useMemo, useState } from "react";
import iconSearch from "../../assets/search1.png";
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
    }, [searchQuery, contactsList]);

  return (
    <div className="chat">
        <div className="chat__main">
            <div className="chat__img ibg">
                <img src={personal} alt="personal avatar" />
            </div>
            <MyInput 
                value={searchQuery} 
                onChange={e => setSeachQuery(e.target.value)} 
                icon={iconSearch} 
                description="Search or start new chat" 
            />
        </div>
        <div className="chat__contacts">
            <h2 className="chat__title">Chats</h2>
            <div className="chat__list">
                {searchContacts.length
                    ?
                    searchContacts.map((el) => (
                        <div className="chat__row" key={el.id} id={el.id}>
                            <div className="chat__column">
                                <div className="chat__column-avatar ibg">
                                    <img src={el.img} alt={el.alt} />
                                </div>
                            </div>
                            <div className="chat__column">
                                <h2 className="chat__column-title">{el.name}</h2>
                            </div>
                        </div>
                    ))
                    :
                    <h2 className="chat__err">Posts not found</h2>
                }
            </div>
        </div>
    </div>
  );
};

export default Contacts;
