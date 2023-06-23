
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Template/HomePage';

import NavbarPage from './Template/NavbarPage';


import AboutPage from './Template/AboutPage';

import TeamsPage from './Template/TeamsPage';

import ContactPage from './Template/ContactPage';

import PortofolioPage from './Template/PortofolioPage';

import AppPortofolio from './Template/AppPortofolio';

import AppPortofolio2 from './Template/AppPortofolio2';

export default function RoutesPage() {
  return (
    <Router basename={"/kekinianteknologi-profile"}>
      <Switch>
        <Route exact path='/'>
            <NavbarPage flagMenu="home"/>
            <HomePage menudata="home"/>
            <AboutPage menudata="home"/>
            <TeamsPage menudata="home"/>
            <PortofolioPage menudata="home" />
            <ContactPage menudata="home"/>  
        </Route>
        
        <Route exact path="/about">
                <NavbarPage flagMenu="about"/>
                <AboutPage menudata="about"/>
        </Route>

        <Route exact path="/team">
            <NavbarPage flagMenu="team" />
            <TeamsPage menudata="teams"/> 
        </Route>
        <Route exact path="/portofolio">
              <NavbarPage flagMenu="portofolio" />
              <PortofolioPage menudata="portofolio"/> 
        </Route>
        <Route exact path="/contact">
              <NavbarPage flagMenu="contact" />
              <ContactPage menudata="contact"/>
        </Route>
        <Route exact path="/aboutportofolio">
            <NavbarPage flagMenu="aboutportofolio" />
            <AppPortofolio />
        </Route>
        <Route exact path="/aboutportofolio2">
            <NavbarPage flagMenu="aboutportofolio2" />
            <AppPortofolio2 />
        </Route>
      </Switch>
    </Router>
  );
}
