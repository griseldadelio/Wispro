import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { List } from './List';
import { Home } from './Home';

export const Private: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/list' component={List} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}