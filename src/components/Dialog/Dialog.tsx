import React from "react";
import {Overlay, DialogWrapper, Line, GroupButtons, Button} from "./styles";

const Dialog = () => {
    return (
        <Overlay>
            <DialogWrapper>
                <Line>name</Line>
                <Line>mail</Line>
                <Line>status</Line>
                <GroupButtons>
                    <Button action={'accept'}>Accept</Button>
                    <Button action={'decline'}>Decline</Button>
                </GroupButtons>
            </DialogWrapper>
        </Overlay>
    )
};

export default Dialog;