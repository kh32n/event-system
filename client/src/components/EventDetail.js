import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function EventDetailPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const getEvent = () => {
            Axios.get(`http://localhost:3001/api/event/detail/${id}`)
                .then((res) => {
                    setEvent(res.data[0]); // Assuming the response contains the event data
                })
                .catch((err) => {
                    console.error("Error fetching event details", err);
                });
        };

        getEvent();
    }, [id]); // Re-fetch event details if `id` changes

    useEffect(() => {
        // console.log('Event updated:', event); // eventが更新された時にログ
    }, [event]); // eventが変わった時に実行


    if (!event) {
        return <div>Loading...</div>; // Display loading state while data is being fetched
    }

    return (
        <div>
            {console.log(event)}
            <h1>{event.name}</h1>
            <p>{event.description}</p> {/* Display other event details as needed */}
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            {/* You can display other event fields here */}
        </div>
    );
}

export default EventDetailPage;

