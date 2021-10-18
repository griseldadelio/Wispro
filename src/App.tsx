import { Home } from ''
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
