import { ReactNode } from "react";
import { BackgroundImage } from "../../common/components/BackgroundImage";
import bgDestination from '../../assets/bg-destination.jpg';
import bgCrew from '../../assets/bg-crew.png';
import bgTechnology from '../../assets/bg-technology.png';

type Props = {
    type?: "home" | "destination" | "crew" | "technology";
    children: ReactNode;
};

export const PageWithBackground = ({
    type = "home",
    children
}: Props) => {

    const getImage = () => {
        const images = {
            "home": <BackgroundImage />,
            "destination": <BackgroundImage image={bgDestination} />,
            "crew": <BackgroundImage image={bgCrew} />,
            "technology": <BackgroundImage image={bgTechnology} />,
        }

        if (type in images) return images[type];

        return <BackgroundImage />
    }

    return (
        <>
            { getImage() }
            { children }
        </>
    );
}