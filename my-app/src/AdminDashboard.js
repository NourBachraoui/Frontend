import React from 'react';
import './AdminDashboard.css';


import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        {/* Add your admin content here */}
      </div>
    </div>
  );
}

export default AdminDashboard;