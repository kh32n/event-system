import { useState } from "react";
import '../styles/EventForm.css';

function EventForm({ addUser }) {

    const [eventname, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [locate, setLocate] = useState('');
    const [detail, setDetail] = useState("");
    const [errors, setErrors] = useState({ eventname: '', date: "", locate: '', detail: '' });


    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        const newErrors = { eventname: '', data: "", locate: '', detail: '' };

        if (!eventname.trim()) {
            newErrors.eventname = 'ユーザーIDを入力してください。';
            isValid = false;
        }

        if (!date.trim()) {
            newErrors.date = '日時を入力してください。';
            isValid = false;
        }

        if (!locate.trim()) {
            newErrors.locate = '場所を入力してください。';
            isValid = false;
        }
        if (!detail.trim()) {
            newErrors.detail = '詳細を入力してください。';
            isValid = false;
        }
        setErrors(newErrors);

        if (isValid) {
            alert("OK")
        }
    };

    return (
        <div className="formContainer">
            <h1 className="title">イベント作成</h1>
            <hr />
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputField">
                    <label htmlFor="eventname">イベント名：</label>
                    <input
                        type="text"
                        id="eventname"
                        value={eventname}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    {errors.eventname && <p className="error">{errors.eventname}</p>}
                </div>
                <div className="inputField">
                    <label htmlFor="date">日時：</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    {errors.date && <p className="error">{errors.date}</p>}
                </div>
                <div className="inputField">
                    <label htmlFor="locate">場所：</label>
                    <input
                        type="text"
                        id="locate"
                        value={locate}
                        onChange={(e) => setLocate(e.target.value)}
                    />
                    {errors.locate && <p className="error">{errors.locate}</p>}
                </div>
                <div className="detailField">
                    <label htmlFor="detail">詳細：</label>
                    <textarea
                        id="detail"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        rows="7"  // 高さを指定
                        cols="63" // 幅を指定
                    />
                    {errors.detail && <p className="error">{errors.detail}</p>} {/* エラーメッセージは別の要素で表示 */}
                </div>
                <div className="buttonContainer">
                    {/* ボタンをクリックしてフォーム送信が行われるようにする */}
                    <button className="signup" type="submit">登録</button>
                </div>
            </form>
        </div>
    );
}

export default EventForm;
