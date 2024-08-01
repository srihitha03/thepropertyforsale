import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Sign.css"

const SignIn = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const handleSignIn = () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      onLogin(user.name);
      onClose();
    } else {
      alert('Invalid credentials');
      setError('Invalid credentials');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {location.pathname === '/signin' &&
        <div className="modal">
          <div className="modal-content">
            <h2>Sign In</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <div>
              <button onClick={handleSignIn}>Sign In</button>
              <button onClick={onClose}>Close</button>
            </div>
          </div>

        </div>
      }
    </>
  );
};

export default SignIn;
