import styled from 'styled-components';

type ContainerProps = {
    color: string;
}

export const Container = styled.div<ContainerProps>`
    color: ${ props => props.theme.color[props.color]};
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
`;
