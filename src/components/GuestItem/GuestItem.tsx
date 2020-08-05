import React from "react";
import {PropsGuest} from "../../interfaces";
import {Guest, Info} from "./styles";
import {ButtonManage, Text} from "../../Global";

const GuestItem: React.FC<PropsGuest> = ({guest, onManage}) => {
    return (
        <Guest status={guest.status}>
            <Info>
                <Text>{guest.name}</Text>
                <Text>{guest.status ? 'Yes' : 'No'}</Text>
            </Info>
            <ButtonManage onClick={() => onManage(guest)}>Manage</ButtonManage>
        </Guest>
    )
};

export default GuestItem;
