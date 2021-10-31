import { NavLink, useHistory } from 'react-router-dom';
import {
    Container,
    HeaderNav,
    Blur,
    Number,
    Title,
    BottomBar,
    HeaderNavMobile,
    CloseButtonContainer,
    NavLinkContainer,
} from './styles';

import CloseSvg from '../../../assets/icons/close.svg';
import HambuguerSvg from '../../../assets/icons/hamburguer.svg';
import { useRef, useState } from 'react';

export const Header = () => {            
    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const history = useHistory();
    const menuBlurRef = useRef<HTMLDivElement>(null);
    
    const handleNavigate = (e: any, path: string) => {
        e.preventDefault();
        setMenuOpened(false);

        history.push(path);
    }

    const handleMenuClose = () => {
        
        if(menuBlurRef?.current) {
            menuBlurRef?.current.classList.add('animate__fadeOutRight');
        }

        setTimeout(() => {
            setMenuOpened(false);
        }, 800);
    }

    const routes = [
        { number: '00', title: 'home', path: '/', exact: true },
        { number: '01', title: 'destination', path: '/destination' },
        { number: '02', title: 'crew', path: '/crew' },
        { number: '03', title: 'technology', path: '/technology' },
    ];


    return (
        <Container>
            <HeaderNav>
                <Blur active={true} />

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
                                    <BottomBar />

                            </NavLink>
                    )) }
                
            </HeaderNav>

            <HeaderNavMobile className="HeaderNavMobile">

                <div onClick={() => setMenuOpened(true)}>
                    <HambuguerSvg />
                </div>

                <Blur
                    ref={menuBlurRef}
                    active={menuOpened}
                    className="animate__animated animate__fadeInRight animate__faster">
                    <CloseButtonContainer>
                        <div onClick={handleMenuClose}>
                            <CloseSvg />
                        </div>
                    </CloseButtonContainer>

                    <NavLinkContainer>
                        { routes.map(r => (
                            <NavLink
                                key={r.number}
                                to={r.path}
                                activeClassName="active"
                                exact={r.exact}
                                onClick={(e) => handleNavigate(e, r.path)}
                                >
                                    <Number>
                                        { r.number }
                                    </Number>
                                    <Title>
                                        { r.title }
                                    </Title>
                                    <BottomBar />

                            </NavLink>
                        )) }
                    </NavLinkContainer>

                </Blur>

            </HeaderNavMobile>
        </Container>
    )
}
