import { useHistory } from 'react-router';
import { PageWithBackground } from '../../common/components/PageWithBackground';
import {
    Container,
    ElementsContainer,
    TextContainer,
    Headline,
    Highlight,
    Description,
    RoundButton
} from './styles';

export const Home = () => {
    const history = useHistory();

    const handleNavigate = () => {
        history.push('/destination');
    };

    return (
        <PageWithBackground>
            <Container>
                <ElementsContainer>
                    <TextContainer>
                        <Headline>so, you want to travel to</Headline>

                        <Highlight>Space</Highlight>

                        <Description>
                            Let’s face it; if you want to go to space, you might as well
                            genuinely go to outer space and not hover kind of on the edge
                            of it. Well sit back, and relax because we’ll give you a
                            truly out of this world experience!
                        </Description>
                    </TextContainer>
                    <RoundButton onClick={handleNavigate}>
                        Explore
                    </RoundButton>
                </ElementsContainer>
            </Container>
        </PageWithBackground>
    );
}