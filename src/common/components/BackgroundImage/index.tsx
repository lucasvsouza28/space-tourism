import bgHome from '../../../assets/bg-home.jpg';
import bgHomeMobile from '../../../assets/bg-home-mobile.png';
import {
    Container,
} from './styles';

type Props = {
    image?: string;
    imageMobile?: string;
}

export const BackgroundImage = ({
    image,
    imageMobile
}: Props) => {
    return (
        <Container
            className="animate__animated animate__fadeIn"
            image={image || bgHome}
            imageMobile={imageMobile || bgHomeMobile}
        >
        </Container>
    )
}
