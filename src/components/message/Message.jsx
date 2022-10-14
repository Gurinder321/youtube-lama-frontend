import './message.css';
import { format } from 'timeago.js';

import React from 'react';

const Message = ({ message, own }) => {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
