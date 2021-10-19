import { Home, SignIn, SignUp, List } from './screens'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/list' component={List} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
