import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding-left: 165px;
    margin-top: 5%;
`;

export const LeftContainer =  styled.div`
`;

export const InfohContainer =  styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-top: 137px;
`;

export const Slider =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-right: 80px;
`;

type SliderItemProps = {
    active: boolean;
}
export const SliderItem =  styled.div<SliderItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;

    cursor: pointer;

    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
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
`;

export const Terminology =  styled.div`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin-bottom: 11px;

    color: ${ props => props.theme.color.secondary };
`;

export const RightContainer =  styled.div`

`;
