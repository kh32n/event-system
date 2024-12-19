import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignupPage';
import CreateEvent from './pages/CreateEventPage';
import EventList from './pages/EventListPage';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import { AuthProvider } from './context/AuthContext.js';
function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
