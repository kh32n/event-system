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

    const [events,setEvents] = useState("")

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

    useEffect(() => {

        const getEventData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/api/event/user_list',{user_id});
                setEvents(response.data);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        getEventData();
    }, []);

    const Delete = (event_id) => {
        axios.post(`http://localhost:3001/api/event/delete`, { user_id,event_id })
            .then(() => {
                setEvents(events.filter(event => event.id !== event_id));
            })
            .catch((err) => {
                console.error("Error canceling event participation", err);
            });
    }

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

            <div className="event-list-container">
            <h1 className='list_title'>参加イベント一覧</h1>

            {events.length > 0 ? (
                <ul className='list_ul'>
                    {events.map((event) => (
                        <li className="list_li" key={event.id}>
                            <h3 className='list_h3'>{event.name}</h3>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                            <p>{event.description}</p>
                            <div className='button-container'>
                            <button onClick={() => Delete(event.id)} >参加取り消し</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>現在、イベントはありません。</p>
            )}
        </div>
        </div>
    );
}



export default UserProfile;
