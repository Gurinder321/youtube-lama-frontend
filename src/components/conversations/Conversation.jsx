import axios from 'axios';
import { useEffect, useState } from 'react';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = 'https://localhost:3000/assets/';

  // useEffect(() => {
  //   const friendId = conversation.members.find((m) => m !== currentUser._id);
  //   console.log(friendId);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios('/users?userId=' + friendId);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  const friendId = conversation.members.find((m) => m !== currentUser._id);
  console.log('current user', currentUser);

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