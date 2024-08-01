import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [userId, setUserId] = useState(null); // State to store the user ID
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      setUserId(auth.currentUser.uid); // Set the user ID if the user is logged in
    }
  }, []);

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
      {userId && <p>User ID: {userId}</p>} {/* Display the user ID */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
