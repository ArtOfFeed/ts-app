import styled from "styled-components";
import {globalConst, rgba, getRemsFromPixels} from "../../Global";

interface ActionPropsBtn {
    action?: string
}

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background: ${rgba(globalConst.black, 0.8)}
`;

export const DialogWrapper = styled.div`
    position: absolute;
    width: 90%;
    background: ${globalConst.white};
    padding: ${getRemsFromPixels(30)};
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    @media (min-width: 568px) {
      width: ${getRemsFromPixels(400)};
    }
`;

export const Line = styled.p`
    margin: ${getRemsFromPixels(15)} 0;
    text-align: center;
    font-size: ${getRemsFromPixels(18)};
    font-weight: 500;
`;

export const GroupButtons = styled.div`
    margin: ${getRemsFromPixels(30)} 0 0;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.span<ActionPropsBtn>`
    background: ${({action}) => action === 'accept' ? rgba(globalConst.green, 0.75) : rgba(globalConst.red, 0.75)};
    color: ${globalConst.white};
    padding: ${getRemsFromPixels(10)} ${getRemsFromPixels(30)};
    font-size: ${getRemsFromPixels(16)};
    border-radius: ${getRemsFromPixels(4)};
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
        background: ${({action}) => action === 'accept' ? rgba(globalConst.green, 0.9) : rgba(globalConst.red, 0.9)};
    }
`;
