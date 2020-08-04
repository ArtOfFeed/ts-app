import React from "react";
import {IGuest} from "../../interfaces";
import {Text, ButtonManage} from "../Global";
import {Guest, Info} from "./styles";

const GuestItem: React.FC<IGuest> = ({id, name, status}) => {
    return (
        <Guest status={status}>
            <Info>
                <Text>{name}</Text>
                <Text>{status ? 'Yes' : 'No'}</Text>
            </Info>
            <ButtonManage>Manage</ButtonManage>
        </Guest>
    )
};

export default GuestItem;