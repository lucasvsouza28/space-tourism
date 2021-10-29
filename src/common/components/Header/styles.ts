import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 70px;
`;

export const HeaderNav = styled.nav`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    
    margin-top: 40px;
    gap: 2rem;
    
    a {
        font-family: 'Barlow Condensed', serif;
        text-decoration: none;
        color: #FFF;
        z-index: 2;

        display: flex;
        height: 100%;
        align-items: center;
        
        &.active {
            border-bottom: 2px solid #FFF;
        }

        &:hover {
            border-bottom: 2px solid #FFF;
            border-bottom-color: rgba(255, 255, 255, 50%);
        }
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
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
`;
