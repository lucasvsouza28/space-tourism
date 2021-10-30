import styled from 'styled-components';
import { PageHeader } from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    flex: 1;
    width: 70%;
    margin: 5% auto 0 auto;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;

    text-transform: uppercase;
    font-family: Barlow Condensed;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    gap: 4rem;

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

export const Content = styled.div``;

export const Name = styled.div`
    font-family: Bellefair;
    font-size: 100px;
    line-height: 115px;
    text-transform: uppercase;
    margin-bottom: 14px;
`;

export const Description = styled.div`
    font-family: Barlow;
    font-size: 18px;
    line-height: 32px;
    color: ${ props => props.theme.color.secondary };
    margin-bottom: 54px;
`;

export const InfoContainer = styled.div`
    border-top: 2px solid #979797;
    padding-top: 27px;
    display: flex;
    gap: 100px;
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
