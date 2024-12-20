import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // CSSファイルをインポート
import LogoutButton from './LogoutButton.js';
import { AuthContext } from '../context/AuthContext.js';

function Navbar() {
  const { isLogin } = useContext(AuthContext);

  return (
    <div className="auth-status">
      {isLogin ? (
        <>
          <nav className="nav">
            <ul className='nav_ul'>
              <li className='nav_li'><Link to="/">ホーム</Link></li>
              <li className='nav_li'><Link to="/signup">新規登録</Link></li>
              <li className='nav_li'><Link to="/create-event">イベント作成</Link></li>
              <li className='nav_li'><Link to="/events">イベント一覧</Link></li>
            </ul>
            <div className='lb'>
              <LogoutButton /> {/* ログインしている場合にのみ表示 */}
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav">
            <ul className="nav_ul">
              <li className='nav_li'><Link to="/">ホーム</Link></li>
              <li className='nav_li'><Link to="/login">ログイン</Link></li>
              <li className='nav_li'><Link to="/signup">新規登録</Link></li>
              <li className='nav_li'><Link to="/create-event">イベント作成</Link></li>
              <li className='nav_li'><Link to="/events">イベント一覧</Link></li>
            </ul>
            <p className='nav_p'>未ログイン</p>
          </nav>
        </>
      )}
    </div>
  );
}

export default Navbar;
