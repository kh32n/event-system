import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ("../styles/UserProfile.css")


function UserProfile() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const user_id = localStorage.getItem("userID")
    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/api/profile/get',{user_id});
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="profile-container">
            <h1>プロフィールページ</h1>
            <div className="profile-header">
                <h2>{userData.username}</h2>
            </div>

            <div className="profile-info">
                <h3>メールアドレス:</h3>
                <p>{userData.email}</p>
            </div>
            <p><Link to="/user-profile/edit" >編集</Link></p>
        </div>
    );
}



export default UserProfile;
