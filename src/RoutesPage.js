

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function RoutesPage() {
  return (
    <Router>
    <Switch>
       <Route path={'/testing-hosting/blog'}>
          aaaa
        </Route>
    </Switch>
 </Router>
  );
}

export default RoutesPage;