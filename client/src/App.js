import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignupPage';
import CreateEvent from './pages/CreateEventPage';
import EventList from './pages/EventListPage';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import { AuthProvider, AuthContext } from './context/AuthContext.js';

function App() {

  // PrivateRouteの定義
  const PrivateRoute = ({ element, ...rest }) => {
    const { isLogin } = React.useContext(AuthContext);

    if (!isLogin) {
      alert("ログインしてください");
      return <Navigate to="/login" />;
    }

    return element;
  };

  return (
    <div>
      <AuthProvider>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          {/* PrivateRouteを使って認証されたユーザーのみイベント作成ページにアクセス */}
          <Route
            path="/create-event"
            element={<PrivateRoute element={<CreateEvent />} />}
          />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
