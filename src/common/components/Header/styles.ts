import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 70px;
`;

export const HeaderNav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    
    margin-top: 40px;
    gap: 37px;
    padding: 38px 46px;

    a {
        font-family: 'Barlow Condensed', serif;
        text-decoration: none;
        color: #FFF;
        z-index: 2;
        position: relative;

        display: flex;
        height: 73px;
        align-items: center;
        
        &.active span{
            display: block;
        }

        &:hover span {
            display: block;
            opacity: 0.5;
        }
    }

    @media (min-width: 1024px) {
        gap: 82px;
        padding: 38px 120px;
    }
`;

export const Blur = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(10.5485px);
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Number = styled.div`
    margin-right: 0.5rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: none;

    @media (min-width: 1024px) {
        display: block;            
    }
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
`;

export const BottomBar = styled.span`
    display: none;
    width: 100%;
    height: 2px;
    background-color: #FFF;
    position: absolute;
    bottom: 0;
`;