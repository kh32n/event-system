import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/EventDetail.css';
import axios from 'axios';

function EventDetailPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [isJoin, setIsJoin] = useState(false);

    //イベント詳細情報の取得
    useEffect(() => {
        const getEvent = () => {
            Axios.get(`http://localhost:3001/api/event/detail/${id}`)
                .then((res) => {
                    setEvent(res.data[0]);
                })
                .catch((err) => {
                    console.error("Error fetching event details", err);
                });
        };

        getEvent();
    }, [id]);

    // 参加ボタンをクリックしたときの処理
    const handleParticipationToggle = () => {
        setIsJoin(!isJoin);
        const userID = localStorage.getItem("userID");
        if (!isJoin){
            axios.post(`http://localhost:3001/api/event/join/${id}`, { userID})
            .catch((err) => {
                console.error("Error fetching event details", err);
                alert("すでに参加しています")
            });
        }
    //キャンセルボタンを押したときの処理
        if (isJoin){
            axios.post(`http://localhost:3001/api/event/cancel/${id}`, { userID})
            .catch((err) => {
                console.error("Error fetching event details", err);
            });
        }
    };

    if (!event) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="event-detail-container">
            <h1 className="event-title">イベント名：{event.name}</h1>
            <p className="event-description">詳細：{event.description}</p>
            <p className="event-date"><strong>日時:</strong> {event.date}</p>
            <p className="event-location"><strong>場所：</strong> {event.location}</p>

            <button onClick={handleParticipationToggle}>
                {isJoin ? 'キャンセル' : '参加'}
            </button>
        </div>
    );
}

export default EventDetailPage;
