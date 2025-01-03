import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignupPage';
import CreateEvent from './pages/CreateEventPage';
import EventDetailPage from "./pages/EventDetailPage.js"
import EventList from './pages/EventListPage';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import { AuthProvider, AuthContext } from './context/AuthContext.js';
import UserProfile from './pages/UserProfilePage.js';
import Edit from "./pages/Edit.js"

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
          <Route path="/events" element={<PrivateRoute element={<EventList/>} />} />
          <Route path="/event-detail/:id" element={<PrivateRoute element={<EventDetailPage />} />} />
          <Route path="/user-profile" element={<PrivateRoute element={<UserProfile />} />} />
          <Route path="/user-profile/edit" element={<PrivateRoute element={<Edit />} />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
