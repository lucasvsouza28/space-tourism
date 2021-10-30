import React , { CSSProperties, ReactNode } from 'react'
import {
    Container,
} from './styles';

type Props = {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
    color?: 'primary' | 'secondary';
}

export const BodyText = ({
    children,
    style,
    className,
    color = 'primary'
}: Props) => {
    return (
        <Container className={className} style={style} color={color}>
            { children }            
        </Container>
    )
}
