import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css'; // Załóżmy, że stylowanie jest w tym pliku

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label">Followers </span>
        <br />
        <span className="quantity">{stats.followers}</span>
        <br />
      </li>
      <li>
        <span className="label">Views </span>
        <br />
        <span className="quantity">{stats.views}</span>
        <br />
      </li>
      <li>
        <span className="label">Likes </span>
        <br />
        <span className="quantity">{stats.likes}</span>
        <br />
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
