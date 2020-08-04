import React, {useEffect, useState} from "react";
import Title from "../Title/Title";
import GuestList from "../GuestList/GuestList";
import {IEvent} from "../../interfaces";
import Dialog from "../Dialog/Dialog";

type EventsProps = {
    eventSoon: any[]
}

const EventWrapper: React.FC<EventsProps> = ({eventSoon}) => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setEvents(events);
    }, [events]);

    return (
        <>
            {eventSoon.map((list) => (
                <div key={list.title}>
                    <Title title={list.title} />
                    <GuestList guests={list.guests} />
                </div>
            ))}
            {open && <Dialog />}

        </>
    )
};

export default EventWrapper;