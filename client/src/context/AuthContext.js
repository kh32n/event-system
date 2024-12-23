import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //現在ログインしているユーザーIDを保存
    const [userID,setUserID] = useState("")
    //現在ログインしているかの状態を保存
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        //トークンを保存
        const token = localStorage.getItem("token");
        if (token) {
            //ログイン状態を保存
            setIsLogin(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
