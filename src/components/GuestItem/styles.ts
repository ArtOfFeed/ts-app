import styled from "styled-components";
import {globalConst, rgba} from "../Global";

interface StatusProps {
    status?: boolean
}

export const Guest = styled.div<StatusProps>`
    display: flex;
    border-bottom: 1px solid ${globalConst.grey};
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background: ${({status}) => status ? rgba(globalConst.green, 0.2) : rgba(globalConst.red, 0.2)}
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding-right: 3rem;
`;