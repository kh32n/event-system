import React from 'react';
import LoginForm from '../components/LoginForm';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

function LoginPage() {
    const navigate = useNavigate();
    const { setIsLogin } = React.useContext(AuthContext);
    const LoginUser = ({ username, password }) => {
        Axios.post('http://localhost:3001/api/login/user', { username, password })
            .then((res) => {
                alert("ログインに成功しました");
                const token = res.data.token;
                localStorage.setItem("token", token);
                // alert(`JWT Token: ${token}`);
                setIsLogin(true)
                navigate("/");

            })
            .catch(err => {
                alert(err.response?.data?.error);
            });
    };


    return (
        <div>
            <LoginForm LoginUser={LoginUser} />
        </div>
    )
}

export default LoginPage;
