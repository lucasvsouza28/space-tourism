import { PageWithBackground } from '../PageWithBackground';
import moon from '../../assets/planets/moon.png';
import mars from '../../assets/planets/mars.png';
import europa from '../../assets/planets/europa.png';
import titan from '../../assets/planets/titan.png';

import {
    Container,
    ImageContainer,
    TabsContainer,
    Tabs,
    TabName,
    Content,
    Name,
    Description,
    InfoContainer,
    Info,
    InfoTitle,
    InfoValue,
} from './styles';
import { useState } from 'react';
import { PageHeader } from '../../common/components/typography';

type Planet = {
    name: string;
    description: string;
    image: string;
    avgDistance: string;
    travelTime: string;
}

export const Destination = () => {
    const planets: Planet[] = [
        {
            name: 'moon',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            image: moon,
            avgDistance: '384.400 km',
            travelTime: '3 days'
        },
        {
            name: 'mars',
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            image: mars,
            avgDistance: '225.000 km',
            travelTime: '9 months'
        },
        {
            name: 'europa',
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            image: europa,
            avgDistance: '628.000 km',
            travelTime: '3 years'
        },
        {
            name: 'titan',
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            image: titan,
            avgDistance: '1.6 bil. km',
            travelTime: '7 years'
        },
    ];

    const [selected, setSelected] = useState<Planet>(planets[0]);

    const getIsSelected = (planet: Planet) => selected.name === planet.name;

    return (
        <PageWithBackground type="destination">
            <Container>
                <ImageContainer>
                    <PageHeader number="01" text="pick your destination" style={{ marginBottom: '97px' }} />
                    <img className="animate__animated animate__fadeIn" src={selected.image} />
                </ImageContainer>
                <TabsContainer>
                    <Tabs>
                        {
                            planets.map(p => (
                            <TabName
                                key={p.name + '_tab'}
                                isSelected={getIsSelected(p)}
                                onClick={() => setSelected(p)}
                            >{ p.name }</TabName>
                        ))}
                    </Tabs>

                    {
                        selected &&
                        <Content className="animate__animated animate__fadeIn">
                            <Name>{ selected.name }</Name>
                            <Description>{ selected.description }</Description>
                            <InfoContainer>
                                <Info>
                                    <InfoTitle>avg. distance</InfoTitle>
                                    <InfoValue>{ selected.avgDistance }</InfoValue>
                                </Info>
                                <Info>
                                    <InfoTitle>est. travel time</InfoTitle>
                                    <InfoValue>{ selected.travelTime }</InfoValue>
                                </Info>
                            </InfoContainer>
                        </Content>
                    }
                </TabsContainer>
            </Container>
        </PageWithBackground>
    )
}
