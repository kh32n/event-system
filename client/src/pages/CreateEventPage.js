import React from 'react';
import EventForm from "../components/EventForm"
import Axios from 'axios';


function CreateEvent() {
    const addEvent = ({ name, date, location, description }) => {
        Axios.post('http://localhost:3001/api/event/create', {name,date,location,description})
            .then((res) => {
                alert("addevent")
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
