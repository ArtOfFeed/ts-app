import React from "react";
import {SecondaryTitle} from "./styles";
import { TitleProps } from "../../interfaces";

const Title: React.FC<TitleProps> = ({title}) => {
    return (
        <SecondaryTitle>{title}</SecondaryTitle>
    )
};

export default Title;
