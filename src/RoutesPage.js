
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Template/HomePage';

import NavbarPage from './Template/NavbarPage';


import AboutPage from './Template/AboutPage';

import TeamsPage from './Template/TeamsPage';

import ContactPage from './Template/ContactPage';

import PortofolioPage from './Template/PortofolioPage';



export default function RoutesPage() {
  return (
    <Router basename={"/testing-hosting"}>
      <Switch>
        <Route exact path='/'>
            <NavbarPage flagMenu="home"/>
            <HomePage />
            <AboutPage />
            <TeamsPage />
            <PortofolioPage />
            <ContactPage />  
        </Route>
        <Route exact path="/about">
                < NavbarPage flagMenu="about"/>
                <AboutPage />
        </Route>
      </Switch>      
    </Router>
  );
}
