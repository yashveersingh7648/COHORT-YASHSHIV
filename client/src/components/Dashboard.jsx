import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <img 
        src={user.picture} 
        alt="Profile" 
        style={{ borderRadius: '50%', width: '100px' }} 
      />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;