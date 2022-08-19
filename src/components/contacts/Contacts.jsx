import React, { useMemo, useState } from "react";
import iconSearch from "../../assets/search1.png";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../UI/input/MyInput";
import personal from '../../assets/personal.jpg'
import "./Contacts.scss";
import { setId } from "../../store/contactsReducer";

const Contacts = () => {
  const dispatch = useDispatch()
  const contactsList = useSelector((state) => state.contactsReducer.contacts);
  const [searchQuery, setSeachQuery] = useState('');
  const searchContacts = useMemo(() => {
        if(searchQuery) {
            return [...contactsList].filter(el => el.name.toLowerCase().includes(searchQuery.toLowerCase()));
        } return contactsList;
    }, [searchQuery, contactsList]);

  return (
    <div className="contacts">
        <div className="contacts__main">
            <div className="contacts__img ibg">
                <img src={personal} alt="personal avatar" />
            </div>
            <MyInput 
                value={searchQuery} 
                onChange={e => setSeachQuery(e.target.value)} 
                icon={iconSearch} 
                description="Search or start new contacts" 
            />
        </div>
        <div className="contacts__contacts">
            <h2 className="contacts__title">Chats</h2>
            <div className="contacts__list">
                {searchContacts.length
                    ?
                    searchContacts.map((el) => (
                        <div onClick={() => dispatch(setId(el.id))} className="contacts__row" key={el.id} id={el.id}>
                            <div className="contacts__column">
                                <div className="contacts__column-avatar ibg">
                                    <img src={el.img} alt={el.alt} />
                                </div>
                            </div>
                            <div className="contacts__column contacts__column-text">
                                <div className="">
                                    <h2 className="contacts__column-title">{el.name}</h2>
                                    <p className="contacts__last-message-time">Hello</p>
                                </div>
                                <p className="contacts__last-message-time">
                                    {new Date().getDay()}/{new Date().getMonth()}/{(new Date().getFullYear())}
                                </p>
                            </div>
                        </div>
                    ))
                    :
                    <h2 className="contacts__err">Posts not found</h2>
                }
            </div>
        </div>
    </div>
  );
};

export default Contacts;
