import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: 15% auto 0 auto;
    display: flex;

    @media (max-width: 768px) {
        text-align: center;
    }

`;

export const ElementsContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const TextContainer = styled.div`

`;

export const Headline = styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;

    color: ${ props => props.theme.color.secondary };

    margin-bottom: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Highlight = styled.div`
    font-size: 150px;
    line-height: 172px;
    text-transform: uppercase;
`;

export const Description = styled.div`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;

    color: ${ props => props.theme.color.secondary };

    @media (max-width: 768px) {
        margin-bottom: 156px;
    }
`;

export const RoundButton = styled.button`
    border-radius: 50%;
    width: 274px;
    height: 274px;
    text-transform: uppercase;
    border: none;
    outline: 0ch;
    background-color: #FFF;
    color: #0B0D17;
    font-size: 32px;
    font-family: 'Bellefair', serif;
    cursor: pointer;
    align-self: flex-end;

    &:hover {
        outline: 88px solid #979797;
    }

    @media (max-width: 768px) {
        width: 242px;
        height: 242px;
        align-self: center;
    }
`;