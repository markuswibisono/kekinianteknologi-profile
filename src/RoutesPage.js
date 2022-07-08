

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function RoutesPage() {
  return (
    <Router basename={'/testing-hosting'}>
    <Switch>
       <Route path={'/blog'}>
          aaaa
        </Route>
    </Switch>
 </Router>
  );
}

export default RoutesPage;