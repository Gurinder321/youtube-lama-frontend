import axios from 'axios';
import { useEffect, useState } from 'react';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = 'https://localhost:3000/assets/';

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        // const res = await axios('/users?userId=' + friendId);
        // const res = await axios('/users/userId=' + friendId);
        const res = await axios('/users/' + friendId);
        setUser(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      {/* FIXME: image not working */}
      <img
        className="conversationImg"
        src={user?.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
      {/* <span className="conversationName">eric</span> */}
    </div>
  );
}
