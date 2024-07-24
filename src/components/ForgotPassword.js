// ForgotPassword.js

import React, { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
      setTimeout(() => navigate('/'), 3000); // Redirect to login after 3 seconds
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        default:
          setError('Error sending password reset email.');
      }
    }
  };

  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <form onSubmit={handlePasswordReset}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
