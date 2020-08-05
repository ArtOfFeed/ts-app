import React, {useEffect, useState} from "react";
import Title from "../Title/Title";
import GuestList from "../GuestList/GuestList";
import {IEvent, IGuest, EventsProps} from "../../interfaces";
import Dialog from "../Dialog/Dialog";
import { EventInner } from "./styles";

const EventWrapper: React.FC<EventsProps> = ({eventSoon}) => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [open, setOpen] = useState<IGuest | null>(null);

    useEffect(() => {
        setEvents(eventSoon);
    }, [eventSoon]);

    const manageHandle = (guest: IGuest) => {
        setOpen(guest);
    };

    const changeStatusHandle = (acceptedStatus: boolean, member: IGuest) => {
        // we can change 0 index on ID, if we will have multiple events
        let arrGuests = events[0].guests.map((guest) => {
            if (guest.id === member.id) {
                guest.status = acceptedStatus;
            }
            return guest;
        });
        let newEvents = [...events];
        newEvents[0].guests = arrGuests;
        setEvents(newEvents);
        setOpen(null);
    };

    return (
        <>
            {events.map(({title, guests}) => (
                <EventInner key={title}>
                    <Title title={title} />
                    <GuestList guests={guests} onManage={manageHandle} />
                </EventInner>
            ))}
            {open && <Dialog onChangeStatus={changeStatusHandle} guest={open} />}

        </>
    )
};

export default EventWrapper;
