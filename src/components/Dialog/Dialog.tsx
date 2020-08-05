import React from "react";
import {Overlay, DialogWrapper, Line, GroupButtons, Button} from "./styles";
import {PropsDialog} from "../../interfaces";

const Dialog: React.FC<PropsDialog> = ({guest, onChangeStatus}) => {
    return (
        <Overlay>
            <DialogWrapper>
                <Line>{guest.name}</Line>
                <Line>{guest.email}</Line>
                <Line>{guest.status ? 'Will come' : 'Will not come'}</Line>
                <GroupButtons>
                    <Button onClick={() => onChangeStatus(true, guest)} action={'accept'}>Accept</Button>
                    <Button onClick={() => onChangeStatus(false, guest)}  action={'decline'}>Decline</Button>
                </GroupButtons>
            </DialogWrapper>
        </Overlay>
    )
};

export default Dialog;
