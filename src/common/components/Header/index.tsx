import { NavLink } from 'react-router-dom';
import {
    Container,
    HeaderNav,
    Blur,
    Number,
    Title,
} from './styles';

export const Header = () => {
    const routes = [
        { number: '00', title: 'home', path: '/', exact: true },
        { number: '01', title: 'destination', path: '/destination' },
        { number: '02', title: 'crew', path: '/crew' },
        { number: '03', title: 'technology', path: '/technology' },
    ];

    return (
        <Container>
            <HeaderNav>
                <Blur />

                    { routes.map(r => (
                            <NavLink
                                key={r.number}
                                to={r.path}
                                activeClassName="active"
                                exact={r.exact}
                                >
                                    <Number>
                                        { r.number }
                                    </Number>
                                    <Title>
                                        { r.title }
                                    </Title>

                            </NavLink>
                    )) }
                
            </HeaderNav>
        </Container>
    )
}
