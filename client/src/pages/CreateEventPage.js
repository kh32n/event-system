import React from 'react';
import EventForm from "../components/EventForm"
import Axios from 'axios';


function CreateEvent() {
    const CreateEv = ({ eventname, date, locate, detail }) => {
        Axios.post('http://localhost:3001/api/event/create', {})
            .then((res) => { })
            .catch(err => {
                alert(err.response?.data?.error);
            });
    }

    return (
        <EventForm />
    )
}

export default CreateEvent;
