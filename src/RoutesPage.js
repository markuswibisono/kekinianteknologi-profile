

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function RoutesPage() {
  console.log("data-->"+ process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
       <Route exact path="/aaa">
          aaaa
        </Route>
    </Switch>
 </Router>
  );
}

export default RoutesPage;