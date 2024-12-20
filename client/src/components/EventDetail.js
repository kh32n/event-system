import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/EventDetail.css';

function EventDetailPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [isJoin, setIsJoin] = useState(false);

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
        //TODO;参加を押した際にデータベースに保存
        //id,user_id,event_id,registered_at(参加した時間),unique_user_event


        //TODO:キャンセルを押したらデータベースから削除unique_user_eventを参照して
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
