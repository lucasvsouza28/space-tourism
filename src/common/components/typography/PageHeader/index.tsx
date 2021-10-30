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
}

export const PageHeader = ({
    number,
    text,
    style
}: Props) => {
    return (
        <Container style={style}>
            <Number>{ number }</Number>
            <Text>{ text }</Text>
        </Container>
    );
}