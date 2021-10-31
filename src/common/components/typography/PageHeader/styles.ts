import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-family: Barlow Condensed;
    letter-spacing: 4.725px;

    font-size: 16px;
    line-height: 19px;
    margin-bottom: 32px;

    @media(min-width: 768px){
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 60px;
    }

    @media(min-width: 1024px){
        font-size: 28px;
        line-height: 34px;
        margin-bottom: 97px;
    }
`;

export const Number = styled.div`
    margin-right: 28px;
    font-weight: bold;
    mix-blend-mode: normal;
    opacity: 0.25;
`;

export const Text = styled.div`
`;