import styled from 'styled-components';

export const Container = styled.div`    
    margin: 40px auto 0 auto;
    display: flex;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: initial;
        margin: 15% auto 0 auto;
        width: 70%;
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
    font-size: 80px;
    line-height: 100px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 150px;
        line-height: 172px;
    }
`;

export const Description = styled.p`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    
    color: ${ props => props.theme.color.secondary };

    font-size: 15px;
    line-height: 25px;
    
    margin-bottom: 81px;

    padding: 0 24px;
    
    max-width: 450px;

    @media (min-width: 768px) {
        margin-bottom: 156px;
        font-size: 16px;
        line-height: 28px;
        padding: 0;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 32px;
        margin-bottom: initial;
    }
`;

export const RoundButton = styled.button`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    text-transform: uppercase;
    border: none;
    outline: 0ch;
    background-color: #FFF;
    color: #0B0D17;
    font-size: 32px;
    font-family: 'Bellefair', serif;
    cursor: pointer;
    
    &:hover {
        outline: 88px solid #979797;
    }
    
    @media (min-width: 768px) {
        width: 242px;
        height: 242px;
        align-self: center;
    }
    
    @media (min-width: 1024px) {
        width: 274px;
        height: 274px;
        align-self: flex-end;
    }
`;