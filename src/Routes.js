

import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";



export default function Routes() {
  return (
    <Router>
       <Switch>
          <Route exact path="/testing-hosting/aaa">
                testing
           </Route>
       </Switch>
    </Router>
  );
}
