import React, { useMemo, useState } from "react";
import iconSearch from "../../assets/search1.png";
import MyInput from "../UI/input/MyInput";
import personal from "../../assets/personal.jpg";
import "./Contacts.scss";
import ChatItem from "../chatItem/ChatItem";

const Contacts = ({ contactsList, allMessages }) => {
  const [searchQuery, setSeachQuery] = useState("");
  const searchContacts = useMemo(() => {
    if (searchQuery) {
      return [...contactsList].filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return [...contactsList].sort((a, b) => b.lastMesTime - a.lastMesTime);
  }, [searchQuery, contactsList]);

  return (
    <div className="contacts">
      <div className="contacts__main">
        <div className="contacts__img ibg">
          <img src={personal} alt="personal avatar" />
        </div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSeachQuery(e.target.value)}
          icon={iconSearch}
          description="Search or start new contacts"
        />
      </div>
      <div className="contacts__contacts">
        <h2 className="contacts__title">Chats</h2>
        <div className="contacts__list">
          {searchContacts.length ? (
            searchContacts.map((el) => (
              <ChatItem item={el} allMessages={allMessages} key={el.id} />
            ))
          ) : (
            <h2 className="contacts__err">Contacts not found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
