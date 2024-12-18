import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { useState } from "react";
function Navbar() {
  const [isLogin,setIsLogin] = useState(false);

  function LoginNav({Login}){
    if(isLogin){
      return (
        <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
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
        <div className="auth-status">
          <p>ログイン中</p>
        </div>
      </nav>
      )
    } else {
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
        <div className="auth-status">
            <p>未ログイン</p>
        </div>
      </nav>
      )
    }
  }


  return (
    <div>
      <LoginNav Login={isLogin} />
    </div>
  );
}

export default Navbar;
