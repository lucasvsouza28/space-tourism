import styled from 'styled-components';
import { BodyText, Heading3, PageHeader } from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    margin-top: 40px;

    flex-direction: column;

    @media(min-width: 1024px) {
        padding-left: 165px;
        margin-top: 5%;
        flex-direction: row;
    }
`;

export const PageHeaderStyled = styled(PageHeader)`
    margin-bottom: 60px;

    @media(min-width: 1024px) {
        margin-bottom: 0;

        justify-content: flex-start;
    }
`;

export const LeftContainer =  styled.div`
`;

export const InfoContainer =  styled.div`
    display: none;

    width: 70%;
    flex-direction: column;    
    
    @media(min-width: 1024px) {
        display: flex;
        flex-direction: row;
        margin-top: 137px;
    }
`;

export const Slider =  styled.div`
    display: flex;
    flex-direction: row;    
    gap: 16px;
    justify-content: center;

    margin-bottom: 44px;
    
    @media(min-width: 1024px) {
        justify-content: initial;
        flex-direction: column;
        gap: 32px;

        margin-right: 80px;
        margin-bottom: 0;
    }
`;

type SliderItemProps = {
    active: boolean;
}
export const SliderItem =  styled.div<SliderItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 50%;

    cursor: pointer;

    font-family: Bellefair;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 2px;
    color: ${ props => props.active ? '#0B0D17' : '#FFFFFF' };

    opacity: ${ props => props.active ? '1' : '0.25' };
    border: 1px solid #FFFFFF;

    background-color: ${ props => props.active ? '#FFF' : '' };

    &:hover {
        opacity: 1;
    }

    @media(min-width: 1024px) {
        width: 80px;
        height: 80px;
    }
`;

export const Terminology =  styled.div`
    font-family: Barlow Condensed;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin-bottom: 11px;

    color: ${ props => props.theme.color.secondary };

    text-align: center;

    @media(min-width: 1024px) {
        text-align: initial;
    }
`;

export const SlideHeading = styled(Heading3)`

    text-align: center;

    @media(min-width: 1024px) {
        text-align: initial;
        margin-bottom: 17px;  
    }
`;

export const SlideImage = styled.img`
    margin-bottom: 56px;

    @media(min-width: 1024px) {
        margin-bottom: 0;
    }
`;

export const BodyTextStyled = styled(BodyText)`
    text-align: center;
    padding: 0 155px;

    @media(min-width: 1024px) {
        padding: 0;
        text-align: initial;
    }
`;

export const RightContainer =  styled.div`
    display: none;

    @media(min-width: 1024px) {
        display: block;
    }
`;

export const MobileInfoContainer =  styled.div`
    display: block;

    @media(min-width: 1024px) {
        display: none;
    }
`;