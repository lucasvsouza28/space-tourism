import styled from 'styled-components';
import { BodyText, Heading3, PageHeader } from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    
    flex-direction: column;
    
    @media(min-width: 768px) {
        margin-top: 40px;
    }

    @media(min-width: 1024px) {
        padding-left: 165px;
        margin-top: 5%;
        flex-direction: row;
    }
`;

export const PageHeaderStyled = styled(PageHeader)`
    @media(min-width: 1024px) {
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

    margin-bottom: 26px;
    
    @media(min-width: 768px) {
        margin-bottom: 44px;
    }

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
    text-align: center;
    
    border-radius: 50%;
    cursor: pointer;

    font-family: Bellefair;    
    text-align: center;
    color: ${ props => props.active ? '#0B0D17' : '#FFFFFF' };

    opacity: ${ props => props.active ? '1' : '0.25' };
    border: 1px solid #FFFFFF;

    background-color: ${ props => props.active ? '#FFF' : '' };

    &:hover {
        opacity: 1;
    }
    
    width: 40px;
    height: 40px;
    font-size: 16px;
    line-height: 18px;

    @media(min-width: 768px) {
        width: 60px;
        height: 60px;
        font-size: 24px;
        line-height: 28px;        
    }

    @media(min-width: 1024px) {
        width: 80px;     
        height: 80px;
        font-size: 32px;
        line-height: 37px;
    }
`;

export const Terminology =  styled.div`
    font-family: Barlow Condensed;    
    text-transform: uppercase;
    margin-bottom: 9px;

    color: ${ props => props.theme.color.secondary };

    text-align: center;

    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    
    @media(min-width: 768px) {
        margin-bottom: 11px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
    }

    @media(min-width: 1024px) {
        text-align: initial;
    }
`;

export const SlideHeading = styled(Heading3)`
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;

    @media(min-width: 768px) {
        font-size: 40px;
        line-height: 46px;
    }

    @media(min-width: 1024px) {
        text-align: initial;
        font-size: 56px;
        line-height: 64px;  
        margin-bottom: 17px;
    }
`;

export const SlideImage = styled.img`
    height: 170px;
    margin-bottom: 34px;

    @media(min-width: 768px) {
        margin-bottom: 56px;
        height: initial;
    }

    @media(min-width: 1024px) {
        margin-bottom: 0;
    }
`;

export const BodyTextStyled = styled(BodyText)`
    text-align: center;    
    font-size: 15px;
    line-height: 25px;
    padding: 0 24px;

    @media(min-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        padding: 0 155px;
    }

    @media(min-width: 1024px) {
        padding: 0;
        text-align: initial;
        font-size: 18px;
        line-height: 32px;
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