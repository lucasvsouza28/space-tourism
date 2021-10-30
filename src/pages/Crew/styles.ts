import styled from 'styled-components';
import {
    Heading3,
} from '../../common/components/typography';

export const Container = styled.div`
    display: flex;
    margin: 5% auto 0 auto;
    width: 70%;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    margin-right: 144px;
    position: relative;
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
    
    margin-bottom: 15px;
`;

export const Name = styled(Heading3)`    
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    position: absolute;
    bottom: 300px;
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
    /* flex-direction: column;
    align-items: flex-end; */
`;

export const CrewMateImage = styled.img`
`;

