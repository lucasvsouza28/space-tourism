import { BodyText } from "../../common/components/typography";
import { PageWithBackground } from "../../common/components/PageWithBackground";
import slide1Img from '../../assets/technology/slide-1.png';
import slide2Img from '../../assets/technology/slide-2.png';
import slide3Img from '../../assets/technology/slide-3.png';

import slide1TabletImg from '../../assets/technology/tablet/slide-1.png';
import slide2TabletImg from '../../assets/technology/tablet/slide-2.png';
import slide3TabletImg from '../../assets/technology/tablet/slide-3.png';

import {
    Container,
    PageHeaderStyled,
    LeftContainer,
    InfoContainer,
    Slider,
    SliderItem,
    SlideHeading,
    SlideImage,
    BodyTextStyled,
    Terminology,
    RightContainer,
    MobileInfoContainer,
} from './styles';
import { useState } from "react";

type Slide = {
    heading: string;
    text: string;
    image: string;
    tabletImage: string;
}

export const Technology = () => {
    const slides: Slide[] = [
        {
            heading: 'LAUNCH VEHICLE',
            text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
            image: slide1Img,
            tabletImage: slide1TabletImg,
        },
        {
            heading: 'SPACEPORT',
            text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            image: slide2Img,
            tabletImage: slide2TabletImg,
        },
        {
            heading: 'SPACE CAPSULE',
            text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
            image: slide3Img,
            tabletImage: slide3TabletImg,
        },
    ];

    const [selected, setSelected] = useState(slides[0]);

    const isSelected = (slide: Slide) => slide.heading === selected.heading;

    return (
        <PageWithBackground type="technology">
            <Container>
                <LeftContainer>
                    <PageHeaderStyled number="03" text="space launch 101" />

                    <InfoContainer className="animate__animated animate__fadeIn">
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
                                <SlideHeading style={{}}>{ selected.heading }</SlideHeading>
                                <BodyTextStyled color="secondary">{ selected.text }</BodyTextStyled>
                            </div>
                        ) }
                    </InfoContainer>

                    <MobileInfoContainer>
                        { selected && <SlideImage src={selected.tabletImage} alt={selected.heading} /> }

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
                                <SlideHeading style={{}}>{ selected.heading }</SlideHeading>
                                <BodyTextStyled color="secondary">{ selected.text }</BodyTextStyled>
                            </div>
                        ) }
                        
                    </MobileInfoContainer>
                </LeftContainer>
                <RightContainer>
                    { selected && <SlideImage src={selected.image} alt={selected.heading} /> }
                </RightContainer>
            </Container>
        </PageWithBackground>
    );
}