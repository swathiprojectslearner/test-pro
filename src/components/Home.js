// Home.js

import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login page upon successful logout
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
