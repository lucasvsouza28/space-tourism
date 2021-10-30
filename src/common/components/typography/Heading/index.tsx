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
    className?: string;
}

export const Heading1 = ({
    children,
    style,
    className
}: HeadingProps) => {
    return (
        <Heading1Container className={className} style={style}>
            {children}
        </Heading1Container>        
    );
}

export const Heading2 = ({
    children,
    style,
    className,
}: HeadingProps) => {
    return (
        <Heading2Container className={className} style={style}>
            {children}
        </Heading2Container>        
    );
}

export const Heading3 = ({
    children,
    style,
    className,
}: HeadingProps) => {
    return (
        <Heading3Container className={className} style={style}>
            {children}
        </Heading3Container>
    );
}
export const Heading4 = ({
    children,
    style,
    className,
}: HeadingProps) => {
    return (
        <Heading4Container className={className} style={style}>
            {children}
        </Heading4Container>        
    );
}