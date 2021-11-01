import styled from 'styled-components';
import {
    BodyText,
    Heading3, PageHeader,
} from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    
    padding: 0 24px;
    
    @media(min-width: 768px) {
        margin: 40px auto 0 auto;
        padding: 0 155px;        
    }
    
    @media(min-width: 1024px) {
        margin-bottom: 154px;
        width: 70%;
        margin: 5% auto 0 auto;
        flex-direction: row;
        padding: 0;
    }
`;

export const PageHeaderStyled = styled(PageHeader)`
`;

export const LeftContainer = styled.div`    
    position: relative;
    
    display: none;

    @media(min-width: 768px) {
        display: block;
    }
    
    @media(min-width: 1024px) {
        margin-right: 144px;
    }
`;

export const Title = styled.div`
    
`;

export const CrewMateInfoContainer = styled.div`
    
`;

export const Charge = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;    
    mix-blend-mode: normal;    
    opacity: 0.5;
    
    font-size: 16px;
    line-height: 18px;
    
    margin-bottom: 8px;
    text-align: center;

    @media(min-width: 768px){
        font-size: 32px;
        line-height: 37px;
    }
    
    @media(min-width: 1024px){
        text-align: initial;
        margin-bottom: 15px;
    }
`;

export const Name = styled(Heading3)`
    text-align: center;

    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
    
    @media(min-width: 768px){
        font-size: 40px;
        line-height: 46px;
    }

    @media(min-width: 1024px){
        text-align: initial;
        font-size: 56px;
        line-height: 64px;
        margin-bottom: 27px;
    }
`;

export const BodyTextStyled = styled(BodyText)`
    text-align: center;
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 25px;

    @media(min-width: 768px){
        font-size: 16px;
        line-height: 28px;
    }

    @media(min-width: 1024px){
        font-size: 18px;
        line-height: 32px;
        text-align: initial;
        margin-bottom: 120px;
    }
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: center;
    
    margin-bottom: 32px;

    @media(min-width: 1024px){
        margin-bottom: 40px;
    }

    @media(min-width: 1024px){
        justify-content: initial;
        position: absolute;
        bottom: 300px;
        margin-bottom: 0;
    }
`;

type SliderItemProps = {
    active: boolean;
}

export const SliderItem = styled.div<SliderItemProps>`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: ${ props => props.active ? '1' : '0.17' };
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;

export const RightContainer = styled.div`
    display: none;

    @media(min-width: 768px) {
        display: flex;
    }
`;

export const CrewMateImage = styled.img`
    height: 222px;

    @media(min-width: 768px) {
        width: auto;
        height: auto;
        margin: initial initial 40px initial;
    }
`;

export const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 768px) {
        display: none;
    }
`;

export const CrewMateImageContainer= styled.div`
    display: flex;
    flex: 1;
    border-bottom: 1px solid #383B4B;
    margin-bottom: 32px;
    justify-content: center;
`;