import { Route, Router, Switch, useHistory } from 'react-router-dom'
import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { Technology } from './pages/Technology';

export const Routes = () => {
    const history = useHistory();

    const routes = [
        { id: 1, path: '/', exact: true, component: Home },
        { id: 2, path: '/destination', component: Destination },
        { id: 3, path: '/crew', component: Crew },
        { id: 4, path: '/technology', component: Technology },
    ]

    return (
        <Router history={history}>
            <Switch>
                { routes.map(r => 
                        <Route
                            key={r.id}
                            path={r.path}
                            exact={r.exact}
                            
                        >
                            <div className="fade-in">
                                { r.component() }
                            </div>
                        </Route>
                )}
            </Switch>
        </Router>
    )
}
