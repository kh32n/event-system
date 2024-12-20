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
        localStorage.removeItem("userID")

        setIsLogin(false)
        alert("ログアウトしました");

        
        navigate("/login");
    };
    return (
        <button className='logout-button' onClick={handleLogout}>
            ログアウト
        </button>
    );
}

export default LogoutButton;
