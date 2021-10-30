import { CSSProperties } from 'react';
import {
    Container,
    Number,
    Text,
} from './styles';

type Props = {
    number: string;
    text: string;
    style?: CSSProperties;
    className?: string;
}

export const PageHeader = ({
    number,
    text,
    style,
    className
}: Props) => {
    return (
        <Container className={className} style={style}>
            <Number>{ number }</Number>
            <Text>{ text }</Text>
        </Container>
    );
}