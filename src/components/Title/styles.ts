import styled from "styled-components";
import {getRemsFromPixels} from "../../Global";

export const SecondaryTitle = styled.h2`
    text-align: center;
    font-size: ${getRemsFromPixels(22)};
    margin: ${getRemsFromPixels(20)} 0;
`;
