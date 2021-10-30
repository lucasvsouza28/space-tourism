import { BodyText, Heading3, PageHeader } from "../../common/components/typography";
import { PageType, PageWithBackground } from "../PageWithBackground";
import slide1Img from '../../assets/technology/slide-1.png';
import slide2Img from '../../assets/technology/slide-2.png';
import slide3Img from '../../assets/technology/slide-3.png';
import {
    Container,
    LeftContainer,
    InfohContainer,
    Slider,
    SliderItem,
    Terminology,
    RightContainer,
} from './styles';
import { useState } from "react";

type Slide = {
    heading: string;
    text: string;
    image: string;
}

export const Technology = () => {
    const slides: Slide[] = [
        {
            heading: 'LAUNCH VEHICLE',
            text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            image: slide1Img,
        },
        {
            heading: 'SPACEPORT',
            text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            image: slide2Img,
        },
        {
            heading: 'SPACE CAPSULE',
            text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
            image: slide3Img,
        },
    ];

    const [selected, setSelected] = useState(slides[0]);

    const isSelected = (slide: Slide) => slide.heading === selected.heading;

    return (
        <PageWithBackground type={PageType.Technology}>
            <Container>
                <LeftContainer>
                    <PageHeader number="03" text="space launch 101" style={{ justifyContent: 'flex-start' }} />

                    <InfohContainer className="animate__animated animate__fadeIn">
                        <Slider>
                            { slides.map((s, i) => (
                                <SliderItem
                                    key={s.heading}
                                    active={isSelected(s)}
                                    onClick={() => setSelected(s)}
                                >{ i + 1 }</SliderItem>
                            )) }
                        </Slider>

                        { selected && (
                            <div>
                                <Terminology>the terminology...</Terminology>
                                <Heading3 style={{marginBottom: '17px'}}>{ selected.heading }</Heading3>
                                <BodyText color="secondary">{ selected.text }</BodyText>
                            </div>
                        ) }
                    </InfohContainer>
                </LeftContainer>
                <RightContainer>
                    { selected && <img src={selected.image} alt={selected.heading} /> }
                </RightContainer>
            </Container>
        </PageWithBackground>
    );
}