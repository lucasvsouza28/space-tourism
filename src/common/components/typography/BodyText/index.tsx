import React , { CSSProperties, ReactNode } from 'react'
import {
    Container,
} from './styles';

type Props = {
    children: ReactNode;
    style?: CSSProperties;
    color?: 'primary' | 'secondary'
}

export const BodyText = ({
    children,
    style,
    color = 'primary'
}: Props) => {
    return (
        <Container style={style} color={color}>
            { children }            
        </Container>
    )
}
