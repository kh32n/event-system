import { useState } from "react";
import '../styles/EventForm.css';

function EventForm({ addEvent }) {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({ name: '', date: "", location: '', description: '' });

    //ボタンを押したときの処理
    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        const newErrors = { name: '', data: "", location: '', description: '' };

        if (!name.trim()) {
            newErrors.name = 'イベント名を入力してください。';
            isValid = false;
        }

        if (!date.trim()) {
            newErrors.date = '日時を入力してください。';
            isValid = false;
        }

        if (!location.trim()) {
            newErrors.location = '場所を入力してください。';
            isValid = false;
        }
        if (!description.trim()) {
            newErrors.description = '詳細を入力してください。';
            isValid = false;
        }
        setErrors(newErrors);

        if (isValid) {
            addEvent({name,date,location,description})
        }
    };

    return (
        <div className="formContainer">
            <h1 className="title">イベント作成</h1>
            <hr />
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputField">
                    <label htmlFor="name">イベント名：</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
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
                    <label htmlFor="location">場所：</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    {errors.location && <p className="error">{errors.location}</p>}
                </div>
                <div className="descriptionField">
                    <label htmlFor="description">詳細：</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="7"
                        cols="63"
                    />
                    {errors.description && <p className="error">{errors.description}</p>} {/* エラーメッセージは別の要素で表示 */}
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
