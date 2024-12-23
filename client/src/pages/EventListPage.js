import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/EventList.css'; // CSSファイルをインポート

function EventListPage() {
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/api/event/list')
            .then((res) => {
                setEvents(res.data);  // 取得したイベントをステートにセット
            })
            .catch((err) => {
                setErrorMessage('イベント一覧の取得中にエラーが発生しました。');
                console.error(err);
            });
    }, []);

    return (
        <div className="event-list-container">
            <h1 className='list_title'>イベント一覧</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {events.length > 0 ? (
                <ul className='list_ul'>
                    {events.map((event) => (
                        <li className="list_li" key={event.id}>
                            <h3 className='list_h3'>{event.name}</h3>
                            <Link to={`/event-detail/${event.id}`}>詳細を見る</Link> {/* 詳細ページへのリンク */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>現在、イベントはありません。</p>
            )}
        </div>
    );
}

export default EventListPage;
