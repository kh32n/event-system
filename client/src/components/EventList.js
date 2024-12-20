import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "../styles/EventList.css"
import { Link } from 'react-router-dom';
///////****** */
function EventList() {
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        // イベントリストを取得
        Axios.get('http://localhost:3001/api/event/list')
            .then((res) => {
                setEvents(res.data);  // 取得したイベントリストをステートに保存
            })
            .catch((err) => {
                if (err.response) {
                    setErrorMessage(`サーバーエラー: ${err.response.data?.error || '不明なエラー'}`);
                } else if (err.request) {
                    setErrorMessage('サーバーからの応答がありません。インターネット接続を確認してください。');
                } else {
                    setErrorMessage(`エラー: ${err.message}`);
                }
                console.error(err);
            });
    }, []);

    return (
        <div className='container'>
            <h1>イベント一覧</h1>

            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

            {events.length > 0 ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <h3>{event.name}</h3>
                            <Link to={`/event/${event.id}`}>詳細を見る</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>現在、イベントはありません。</p>
            )}
        </div>
    );
}

export default EventList;
