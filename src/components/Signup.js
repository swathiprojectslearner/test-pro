// SignUp.js

import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to Home page upon successful sign-up
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email is already in use.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak.');
          break;
        default:
          setError('Error signing up.');
      }
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Log In</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;
