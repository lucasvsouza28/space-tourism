import { useState } from 'react';
import './styles.css';
import bgHome from '../../../assets/bg-home.jpg';

type Props = {
    image?: string;
}

export const BackgroundImage = ({
    image
}: Props) => {
    return (
        <img className="animate__animated animate__fadeIn" src={image || bgHome} style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: -1
        }} />
    )
}
