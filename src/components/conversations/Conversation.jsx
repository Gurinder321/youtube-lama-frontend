import axios from 'axios';
import { useEffect, useState } from 'react';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const PF = 'http://localhost:3000/assets/';

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios('/users/' + friendId);
        setUser(res.data);
        // username showing up 21 times
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={user?.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
