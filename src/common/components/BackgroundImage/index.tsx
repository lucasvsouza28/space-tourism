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
        <div
            className="bg animate__animated animate__fadeIn"
            style={{
                backgroundImage: `url('${ image || bgHome }')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '150%',
                height: '150%',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: -1
            }}
        >
        </div>
    )
}
