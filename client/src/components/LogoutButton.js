import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // トークンを削除
        const token = localStorage.getItem("token");
        // alert(`JWT Token: ${token}`);
        localStorage.removeItem("token");

        // ログアウト後の通知
        alert("ログアウトしました");

        // ログインページにリダイレクト
        navigate("/login");
    };
    return (
        <button onClick={handleLogout}>
            ログアウト
        </button>
    );
}

export default LogoutButton;
