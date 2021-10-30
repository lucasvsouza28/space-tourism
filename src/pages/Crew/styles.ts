import styled from 'styled-components';
import {
    BodyText,
    Heading3, PageHeader,
} from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto 0 auto;
    width: 100%;
    height: 100vh;

    padding: 0 155px;
    
    @media(min-width: 1024px) {
        margin-bottom: 154px;
        width: 70%;
        margin: 5% auto 0 auto;
        flex-direction: row;
        padding: 0;
    }
`;

export const PageHeaderStyled = styled(PageHeader)`
    margin-bottom: 60px;

    @media(min-width: 1024px) {
        margin-bottom: 154px;
    }
`;

export const LeftContainer = styled.div`    
    position: relative;
    
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
    font-size: 32px;
    line-height: 37px;    
    text-transform: uppercase;
    
    mix-blend-mode: normal;

    opacity: 0.5;
    
    margin-bottom: 8px;

    text-align: center;

    @media(min-width: 1024px){
        text-align: initial;
        margin-bottom: 15px;
    }
`;

export const Name = styled(Heading3)`
    text-align: center;
    font-size: 40px;
    line-height: 46px;
    margin-bottom: 16px;

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

    @media(min-width: 1024px){
        text-align: initial;
        margin-bottom: 120px;
    }
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: center;
    margin-bottom: 40px;
    
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
    display: flex;
`;

export const CrewMateImage = styled.img`
`;