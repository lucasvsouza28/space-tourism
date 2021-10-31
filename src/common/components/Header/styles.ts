import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    padding-right: 24px;

    @media (min-width: 767px) {
        padding: 0;
    }
`;

export const HeaderNav = styled.nav`
    height: 100%;    
    align-items: center;
    justify-content: center;
    
    position: relative;
    
    margin-top: 40px;
    gap: 37px;
    padding: 38px 46px;

    display: none;

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

    @media (min-width: 767px) {
        display: flex;
    }

    @media (min-width: 1024px) {
        gap: 82px;
        padding: 38px 120px;
    }
`;

type BlurProps = {
    active: boolean;
};

export const Blur = styled.div<BlurProps>`
    position: absolute;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(10.5485px);
    height: 101vh;
    width: 254px;
    z-index: 1;
    right: 0px;
    top: 0;
    display: ${ props => props.active ? 'flex' : 'none' };
    flex-direction: column;

    @media(min-width: 767px) {
        height: 100%;
        width: 100%;
        right: initial;
        top: initial;
    }
`;

export const Number = styled.div`
    margin-right: 0.5rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: block;

    @media (min-width: 767px) and (max-width: 1023px) {
        display: none;
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

export const HeaderNavMobile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 2;
        
    a {
        font-family: Barlow Condensed;
        text-decoration: none;
        color: #FFF;

        display: flex;
        height: 19px;
        align-items: center;
        
        &.active span{
            display: block;
        }

        &:hover span {
            display: block;
            opacity: 0.5;
        }
    }

    svg:active {
        transform: scale(0.9);
    }


    @media(min-width: 767px) {
        display: none;
    }

`;

export const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    padding: 1rem 1rem;
    margin-bottom: 65px;
`;

export const NavLinkContainer = styled.div`
    padding: 0 32px;
    display: flex;
    gap: 32px;
    flex-direction: column;
`;
