import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/create-event">CreateEvent</Link>
        </li>
        <li>
          <Link to="/events">EventList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
