import React from "react";
import {IEvent} from "../../interfaces";
import {SecondaryTitle} from "./styles";

const Title: React.FC<IEvent> = ({title}) => {
    return (
        <SecondaryTitle>{title}</SecondaryTitle>
    )
};

export default Title;