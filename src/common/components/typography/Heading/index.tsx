import { CSSProperties, ReactNode } from 'react';
import {
    Heading1Container,
    Heading2Container,
    Heading3Container,
    Heading4Container,
} from './styles';

type HeadingProps = {
    children: ReactNode;
    style?: CSSProperties;
}

export const Heading1 = ({
    children,
    style
}: HeadingProps) => {
    return (
        <Heading1Container style={style}>
            {children}
        </Heading1Container>        
    );
}

export const Heading2 = ({
    children,
    style
}: HeadingProps) => {
    return (
        <Heading2Container style={style}>
            {children}
        </Heading2Container>        
    );
}

export const Heading3 = ({
    children,
    style
}: HeadingProps) => {
    return (
        <Heading3Container style={style}>
            {children}
        </Heading3Container>
    );
}
export const Heading4 = ({
    children,
    style
}: HeadingProps) => {
    return (
        <Heading4Container style={style}>
            {children}
        </Heading4Container>        
    );
}