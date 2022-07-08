

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function RoutesPage() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
       <Route path={'/news'}>
          aaaa
        </Route>
    </Switch>
 </Router>
  );
}

export default RoutesPage;