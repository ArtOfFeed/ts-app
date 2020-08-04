import React from "react";
import {IGuest} from "../../interfaces";
import GuestItem from "../GuestItem/GuestItem";

type GuestProps = {
    guests: IGuest[]
}

const GuestList: React.FC<GuestProps> = ({guests}) => {
    return (
        <>
            {guests.map((guest) => <GuestItem key={guest.id} id={guest.id} name={guest.name} status={guest.status} />)}
        </>
    )
};

export default GuestList;