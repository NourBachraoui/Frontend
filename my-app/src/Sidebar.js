import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Cohorts</a></li>
        <li><a href="#">Students</a></li>
        <li><a href="#">Admin</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;