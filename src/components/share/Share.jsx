import './share.css';

import { FaBeer } from 'react-icons/fa';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="What's in your mind Safak?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FaBeer />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <FaBeer />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <FaBeer />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <FaBeer />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
