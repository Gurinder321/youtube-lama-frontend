import './topbar.css';

import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaBeer />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaBeer />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaBeer />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBeer />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          {/* FIXME: NOT WORKING */}
          {/* <img
          src={`https://localhost:3000/assets/${user.profilePicture} ? https://localhost:3000/assets/${user.profilePicture} ? https://localhost:3000/assets/${user.profilePicture} : https://localhost:3000/assets/person/noAvatar.png  `}
          alt=""
          className="topbarImg"
        /> */}
          <p>hello, {user.username}</p>
        </Link>
      </div>
    </div>
  );
}
