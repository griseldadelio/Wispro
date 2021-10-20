import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';


export const Public: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
            </Switch>
        </Router>
    )
}
