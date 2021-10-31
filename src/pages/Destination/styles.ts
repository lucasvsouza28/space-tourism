import styled from 'styled-components';
import { PageHeader } from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    flex-direction: column;

    @media(min-width: 768px) {
        margin: 40px auto 0 auto;
    }
    
    @media(min-width: 1024px) {
        justify-content: space-between;
        margin: 5% auto 0 auto;
        padding: 0;
        flex-direction: row;

        width: 70%;
    }
`;

export const PageHeaderStyled = styled(PageHeader)`

    font-size: 16px;
    line-height: 19px;

    margin-bottom: 32px;
    
    @media(min-width: 768px){
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 60px;
    }

    @media(min-width: 769px){
        margin-bottom: 97px;
    }

    @media(min-width: 1024px){
        font-size: 28px;
        line-height: 34px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    @media(min-width: 1024px) {
        align-items: initial;
    }
`;

export const PlanetImage = styled.img`
    height: 170px;
    width: 170px;

    margin-bottom: 26px;
    
    @media(min-width: 768px) {
        height: 300px;
        width: 300px;
        margin-bottom: 53px;
    }

    @media(min-width: 1024px) {
        height: auto;
        width: auto;
        margin-bottom: 0;
    }

`;

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media(min-width: 1024px) {
        width: 40%;
        justify-content: initial;
    }
`;

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    text-transform: uppercase;
    font-family: Barlow Condensed;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    gap: 26px;

    margin-bottom: 20px;
    
    @media(min-width: 768px) {
        gap: 35px;
        margin-bottom: 32px;
    }

    @media(min-width: 1024px) {     
        justify-content: initial;
        margin-bottom: 37px;
    }
`;

type TabProps = {
    isSelected: boolean;
}
export const TabName = styled.div<TabProps>`
    border-bottom: ${ props => props.isSelected ? '3px solid #FFF' : '' };
    color: ${ props => props.isSelected ? '#FFF' : '#D0D6F9' };
    cursor: pointer;
    height: 42px;
    
    &:hover {
        border-bottom: 3px solid #FFF;
        opacity: 0.5;        
    }
`;

export const Content = styled.div`
    
    @media (min-width: 768px) {
        padding: 0 50px;
    }

    @media (min-width: 1024px) {
        padding: 0;
    }
`;

export const Name = styled.div`
    font-family: Bellefair;    
    text-transform: uppercase;
    margin-bottom: 14px;
    text-align: center;

    font-size: 56px;
    line-height: 64px;

    @media (min-width: 768px) {
        font-size: 80px;
        line-height: 92px;
    }
    
    @media (min-width: 1024px) {
        text-align: initial;
        font-size: 100px;
        line-height: 115px;
    }
`;

export const Description = styled.div`
    font-family: Barlow;
    color: ${ props => props.theme.color.secondary };
    text-align: center;
    
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 32px;

    @media (min-width: 768px) {        
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 49px;
    }
    
    @media (min-width: 1024px) {
        text-align: initial;
        margin-bottom: 54px;
    }
`;

export const InfoContainer = styled.div`
    border-top: 2px solid #979797;
    padding-top: 27px;
    display: flex;

    gap: 32px;

    justify-content: center;
    flex-direction: column;

    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 100px;
    }
    
    @media (min-width: 1024px) {
        justify-content: initial;
        text-align: initial;
    }
`;

export const Info = styled.div`
    text-transform: uppercase;
`;

export const InfoTitle = styled.div`
    font-family: Barlow Condensed;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: ${ props => props.theme.color.secondary };
    margin-bottom: 12px;
`;

export const InfoValue = styled.div`
    font-family: Bellefair;
    font-size: 28px;
    line-height: 32px;    
`;
