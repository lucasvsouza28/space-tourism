import styled from 'styled-components';
import { PageHeader } from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    margin: 40px auto 0 auto;
    padding: 0 2rem;
    flex-direction: column;
    
    @media(min-width: 1024px) {
        justify-content: space-between;
        margin: 5% auto 0 auto;
        padding: 0;
        flex-direction: row;

        width: 70%;
    }
`;

export const PageHeaderStyled = styled(PageHeader)`
    margin-bottom: 60px;

    @media(min-width: 769px){
        margin-bottom: 97px;
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
    height: 300px;
    width: 300px;
    margin-bottom: 53px;

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

    gap: 4rem;

    @media(min-width: 1024px) {
        justify-content: initial;
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
    margin-bottom: 37px;

    &:hover {
        border-bottom: 3px solid #FFF;
        opacity: 0.5;        
    }
`;

export const Content = styled.div`
    padding: 0 50px;

    @media (min-width: 1024px) {
        padding: 0;
    }    
`;

export const Name = styled.div`
    font-family: Bellefair;
    font-size: 100px;
    line-height: 115px;
    text-transform: uppercase;
    margin-bottom: 14px;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: initial;
    }
`;

export const Description = styled.div`
    font-family: Barlow;
    font-size: 18px;
    line-height: 32px;
    color: ${ props => props.theme.color.secondary };
    margin-bottom: 54px;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: initial;
    }
`;

export const InfoContainer = styled.div`
    border-top: 2px solid #979797;
    padding-top: 27px;
    display: flex;
    gap: 100px;

    justify-content: center;

    @media (min-width: 1024px) {
        justify-content: initial;
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
