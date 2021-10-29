import { ReactNode } from "react";
import { BackgroundImage } from "../../common/components/BackgroundImage";
import bgDestination from '../../assets/bg-destination.jpg';
import bgCrew from '../../assets/bg-crew.png';
import bgTechnology from '../../assets/bg-technology.png';

export enum PageType {
    Home = 1,
    Destination = 2,
    Crew = 3,
    Technology = 4
}

type Props = {
    type?: PageType;
    children: ReactNode;
};

export const PageWithBackground = ({
    type = PageType.Home,
    children
}: Props) => {

    const getImage = () => {
        const images = {
            [PageType.Destination]: <BackgroundImage image={bgDestination} />,
            [PageType.Crew]: <BackgroundImage image={bgCrew} />,
            [PageType.Technology]: <BackgroundImage image={bgTechnology} />,
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