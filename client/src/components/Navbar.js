import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import LogoutButton from './LogoutButton.js';
import { AuthContext } from '../context/AuthContext.js';

function Navbar() {
  const { isLogin } = useContext(AuthContext);

  return (

    <div className="auth-status">
      {isLogin ? (
        <>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/create-event">CreateEvent</Link></li>
              <li><Link to="/events">EventList</Link></li>
            </ul>
            <p>ログイン中</p>
            <LogoutButton />
          </nav>
        </>
      ) : (
        <>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/create-event">CreateEvent</Link></li>
              <li><Link to="/events">EventList</Link></li>
            </ul>
            <p>未ログイン</p>
          </nav>
        </>
      )
      }
    </div >
  );
}

export default Navbar;
