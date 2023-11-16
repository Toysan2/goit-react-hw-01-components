import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt={`Avatar of ${name}`} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
