import { PageType, PageWithBackground } from "../PageWithBackground";
import douglasHurleyImg from '../../assets/crew/douglas-hurley.png';
import markImg from '../../assets/crew/mark.png';
import victorImg from '../../assets/crew/victor.png';
import anoushehImg from '../../assets/crew/anousheh.png';
import {
    Container,
    LeftContainer,
    Title,
    CrewMateInfoContainer,
    Charge,
    Name,
    Description,
    Slider,
    SliderItem,
    RightContainer,
    CrewMateImage,
} from './styles';
import { useState } from "react";

type CrewMate = {
    charge: string;
    name: string;
    image: string;
    description: string;
}

export const Crew = () => {
    const crewMates: CrewMate[] = [
        {
            charge: 'commander',
            name: 'douglas hurley',
            image: douglasHurleyImg,
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        },
        {
            charge: 'Mission Specialist ',
            name: 'MARK SHUTTLEWORTH',
            image: markImg,
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        },
        {
            charge: 'PILOT',
            name: 'Victor Glover',
            image: victorImg,
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        },
        {
            charge: 'Flight Engineer',
            name: 'Anousheh Ansari',
            image: anoushehImg,
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        },
    ];

    const [selected, setSelected] = useState<CrewMate>(crewMates[0]);

    return (
        <PageWithBackground type={PageType.Crew}>
            <Container>

                <LeftContainer>

                    <Title></Title>

                    { crewMates.map(c => (
                        <CrewMateInfoContainer
                            key={c.name}
                        >
                            <Charge>{ c.charge }</Charge>
                            <Name>{ c.name }</Name>
                            <Description>{ c.description }</Description>
                        </CrewMateInfoContainer>
                    )) }

                    <Slider>
                        <SliderItem />
                    </Slider>

                </LeftContainer>

                <RightContainer>
                    { selected && <CrewMateImage src={selected.image} alt={selected.name} /> }
                </RightContainer>

            </Container>
        </PageWithBackground>
    );
} 