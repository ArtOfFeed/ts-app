import React from "react";
import {GuestProps} from "../../interfaces";
import GuestItem from "../GuestItem/GuestItem";

const GuestList: React.FC<GuestProps> = ({guests, onManage}) => {
    return (
        <>
            {guests.map((guest) => <GuestItem onManage={onManage} key={guest.id} guest={guest} />)}
        </>
    )
};

export default GuestList;
