import React, { useState } from 'react';
import { json } from 'react-router-dom';

const SignUp = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSignUp = () => {
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setError('User with this email already exists.');
    } else {
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      onClose();
      setName("")
      setEmail("")
      setPassword("")
    }

  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <div>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;        