import React from 'react';
import EventForm from "../components/EventForm"
import Axios from 'axios';


function CreateEvent() {
    //イベントの追加処理
    const addEvent = ({ name, date, location, description }) => {
        const userID = localStorage.getItem("userID");
        Axios.post('http://localhost:3001/api/event/create', {name,date,location,description,userID})
            .then((res) => {
                alert("イベントを作成しました")
             })
            .catch(err => {
                alert(err.response?.data?.error);
            });
    }

    return (
        
        <EventForm addEvent={addEvent}/>
    )
}

export default CreateEvent;
