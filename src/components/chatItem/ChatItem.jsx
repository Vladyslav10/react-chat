import React from "react";
import { useDispatch } from "react-redux";
import dateFormat from "dateformat";
import { setSelectedUser } from "../../store/contactsReducer";

const ChatItem = ({ item, allMessages }) => {
  const dispatch = useDispatch();
  const allSelectedUserMess = allMessages.filter(
    (msg) => msg.contactSendId === item.id || item.id === msg.contactReceiveId
  );

  const lastMsg = allSelectedUserMess[allSelectedUserMess.length - 1];
  return (
    <div
      onClick={() => dispatch(setSelectedUser(item))}
      className="contacts__row"
      id={item.id}
    >
      <div className="contacts__column">
        <div className="contacts__column-avatar ibg">
          <img src={item.img} alt={item.alt} />
        </div>
      </div>
      <div className="contacts__column contacts__column-text">
        <div className="contacts__column-info">
          <h2 className="contacts__column-title">{item.name}</h2>
          <p className="contacts__last-message-time">
            {dateFormat(lastMsg.timeadded, "mediumDate") ||
              dateFormat(item.lastMesTime, "mediumDate")}
          </p>
        </div>
        <p className="contacts__last-message-show">
          {lastMsg.text || item.lastText}
        </p>
      </div>
    </div>
  );
};

export default ChatItem;
