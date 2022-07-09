
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default function RoutesPage() {
  return (
    <Router basename={"/testing-hosting"}>
      <Switch>
        <Route exact path='/about'>
          page about
        </Route>
      </Switch>      
    </Router>
  );
}
