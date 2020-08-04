import styled from "styled-components";

export const globalConst = {
    primary: '#007bff',
    white: '#ffffff',
    grey: '#dddddd',
    green: '#28a745',
    red: '#dc3545',
    black: '#000000'
};

const fontSizeNumber = 16;

export const getRemsFromPixels = (pixels: number) => {
    const numberRem = pixels / fontSizeNumber;
    return `${numberRem}rem`;
};

const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

const hexToRgb = (hex: string) => {
    const replacedHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(replacedHex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
};

export const rgba = (hex: string, alpha: number) => {
    const colorRgb: any = hexToRgb(hex);
    return `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${alpha})`;
};

export const isHex = (colorValue: string) => shorthandRegex.test(colorValue);


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    margin: 0 auto;
`;

export const MainTitle = styled.h1`
    text-align: center;
    font-size: 2.4rem;
    margin: 1rem 0;
`;

export const Text = styled.span`
    font-size: 1rem;
`;

export const ButtonManage = styled.span`
    background: ${rgba(globalConst.primary, 0.75)};
    color: ${globalConst.white};
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
        background: ${rgba(globalConst.primary, 0.9)};
    }
`;