import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function LogoutButton() {
    const navigate = useNavigate();
    const { setIsLogin } = React.useContext(AuthContext);
    const handleLogout = () => {
        const token = localStorage.getItem("token");
        // alert(`JWT Token: ${token}`);
        localStorage.removeItem("token");

        setIsLogin(false)
        alert("ログアウトしました");


        navigate("/login");
    };
    return (
        <button onClick={handleLogout}>
            ログアウト
        </button>
    );
}

export default LogoutButton;
