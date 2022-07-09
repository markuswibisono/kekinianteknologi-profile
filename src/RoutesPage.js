

import { HashRouter, Route } from 'react-router-dom';

import App from './App';


const RoutesPage = () => (
  <HashRouter  basename="{'/testing-hosting'}">
    <Route
      exact
      path='/sss'
      component={App}
    />
  </HashRouter>
)
export default RoutesPage