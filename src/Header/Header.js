import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from "../SignInUp/SignIn";
import SignUp from '../SignInUp/SignUp';
import "./Header.css"
const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const handleSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
    navigate("/signin");

  };

  const handleSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
    navigate("/signup");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
  };

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  return (
    <>
      <div className='header-wrapper'>
        <header>
          <div className='header-wrapper-inside'>
            <div className="logo">
              <h4>The Property For Sale</h4>
              {/* <img src="/path/to/logo.png" alt="Logo" /> */}
            </div>
            <nav className="navbar">
              <ul className="nav-links">
                <li><Link className="Header-Menu " to="/">Home</Link></li>
                <li><Link className="Header-Menu " to="/about">About</Link></li>
                <li className="dropdown">
                  <a className="Header-Menu ">Dropdown</a>
                  <div className="dropdown-content">
                    <Link className="dropdown-menu" to="/Images">Images</Link>
                    <Link className="dropdown-menu" to="/Products">Products</Link>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="auth-buttons">
              {isLoggedIn ? (
                <>
                  <span className='name-display'>Hello, {username}</span>
                  <button onClick={handleSignOut}>Logout</button>
                </>
              ) : (
                <>
                  <button onClick={handleSignIn}>Sign In</button>
                  <button onClick={handleSignUp}>Sign Up</button>

                </>
              )}

            </div>
          </div>
        </header>

      </div>
      {/* <Link className="dropdown-menu" to="/Products">Products</Link> */}
      <Sig nIn isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} onLogin={handleLogin} />
      <SignUp isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </>
  );
}

export default Header;
