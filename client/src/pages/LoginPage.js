import React from 'react';
import LoginForm from '../components/LoginForm';
import Axios from 'axios';
function LoginPage() {
    const LoginUser=({username,password}) => {
        Axios.post('http://localhost:3001/api/login/user', { username, password })
            .then(() => {
                alert("ログインに成功しました");
            })
            .catch(err => {
                alert(err.response?.data?.error);
            });
        };
    

    return (
        <div>
            <LoginForm LoginUser={LoginUser}/>
        </div>
    )
}

export default LoginPage;
