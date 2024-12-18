import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import CreateEvent from './pages/CreateEventPage';
import EventList from './pages/EventListPage';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events" element={<EventList />} />
      </Routes>
    </div>
  );
}

export default App;
